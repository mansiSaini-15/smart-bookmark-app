"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Home() {

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.error("Missing SUPABASE URL");
    }
  }, []);

  const handleLogin = async () => {

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
        queryParams: {
          prompt: "select_account", // 🔥 Always show account chooser
        },
      },
    });

    if (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3eadf]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px] text-center border border-yellow-300">
        
        <h1 className="text-3xl font-bold text-[#7c3f00] mb-4">
          Smart Bookmark App
        </h1>

        <p className="text-gray-600 mb-6">
          Save and organize your favorite links like bookmarks in a book.
        </p>

        <button
          onClick={handleLogin}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl w-full transition duration-300"
        >
          Sign in with Google
        </button>

      </div>
    </div>
  );
}
