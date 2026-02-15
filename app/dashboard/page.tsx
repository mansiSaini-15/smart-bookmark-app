"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  // 🔹 Get User
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/");
      } else {
        setUser(data.user);
        fetchBookmarks(data.user.id);
      }
    };

    getUser();
  }, []);

  // 🔹 Fetch bookmarks
  const fetchBookmarks = async (userId: string) => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (data) setBookmarks(data);
  };

  // 🔥 FINAL REALTIME FIX
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel(`bookmarks-${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "bookmarks",
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          setBookmarks((prev) => {
            const exists = prev.find((b) => b.id === payload.new.id);
            if (exists) return prev;
            return [payload.new, ...prev];
          });
        }
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "bookmarks",
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          setBookmarks((prev) =>
            prev.filter((item) => item.id !== payload.old.id)
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);


// 🔥 Auto Logout Across Tabs
useEffect(() => {
  const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
        router.push("/");
      }
    }
  );

  return () => {
    authListener.subscription.unsubscribe();
  };
}, []);



  // 🔹 Add bookmark
  const addBookmark = async () => {
    if (!title || !url) return;

    await supabase.from("bookmarks").insert([
      {
        title,
        url,
        user_id: user.id,
      },
    ]);

    setTitle("");
    setUrl("");
  };

  // 🔹 Delete bookmark (NO local state manipulation)
  const deleteBookmark = async (id: string) => {
    await supabase.from("bookmarks").delete().eq("id", id);
  };

  // 🔹 Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const filteredBookmarks = bookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f3eadf] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-yellow-300 p-8">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#7c3f00]">
            Welcome {user?.user_metadata?.full_name}
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Add Bookmark */}
        <div className="bg-[#f3eadf] p-6 rounded-xl mb-6">
          <h2 className="mb-4 font-semibold">Add Bookmark</h2>

          <input
            type="text"
            placeholder="Bookmark Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg mb-3 border"
          />

          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 rounded-lg mb-3 border"
          />

          <button
            onClick={addBookmark}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg"
          >
            Add Bookmark
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Search</label>
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg border"
          />
        </div>

        {/* Bookmark List */}
        <div>
          <h2 className="mb-4 font-semibold">Your Bookmarks</h2>

          {filteredBookmarks.length === 0 && (
            <p className="text-gray-500">No bookmarks yet.</p>
          )}

          {filteredBookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="bg-[#f3eadf] p-4 rounded-xl mb-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{bookmark.title}</p>
                <a
                  href={bookmark.url}
                  target="_blank"
                  className="text-blue-600 break-all"
                >
                  {bookmark.url}
                </a>
              </div>

              <button
                onClick={() => deleteBookmark(bookmark.id)}
                className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
