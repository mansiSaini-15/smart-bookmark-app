# 🚀 Smart Bookmark App

A full-stack real-time bookmark management application built using Next.js (App Router), Supabase (Authentication, PostgreSQL, Realtime), Tailwind CSS, and deployed on Vercel.

This application allows users to securely log in using Google OAuth, create and manage personal bookmarks, and experience real-time updates across browser tabs and devices while maintaining strict user-level data isolation.

---

# 📌 Project Overview

Smart Bookmark App is designed to solve a simple but common problem: managing and organizing useful links securely and efficiently.

The application enables users to:

- Sign in securely using Google OAuth
- Add bookmarks with title and URL
- View bookmarks in a clean dashboard
- Search bookmarks instantly
- Delete bookmarks
- Experience real-time synchronization across multiple tabs and devices
- Maintain strict user-level data isolation

Each user has completely isolated bookmark data, enforced through Supabase Row-Level Security (RLS) policies.

---

# 🛠 Tech Stack

This project strictly follows the required modern full-stack architecture:

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

### Backend & Database
- Supabase
  - Supabase Authentication (Google OAuth)
  - PostgreSQL Database
  - Row-Level Security (RLS)
  - Realtime subscriptions

### Deployment
- Vercel

---

# 🔐 Authentication Implementation

Authentication is implemented using Supabase Auth with Google OAuth integration.

Process:
1. Google OAuth configured in Google Cloud Console.
2. OAuth credentials connected to Supabase.
3. Supabase handles token generation and session management.
4. User sessions are stored securely in browser storage.
5. Dashboard access is restricted if no valid session exists.

On dashboard load:
- `supabase.auth.getUser()` checks session.
- If no user → redirect to login page.
- If user exists → load user-specific bookmarks.

---

# 🗄 Database Structure

A PostgreSQL table named `bookmarks` is created with:

- `id` (UUID, Primary Key)
- `user_id` (UUID, references auth.users)
- `title` (Text)
- `url` (Text)
- `created_at` (Timestamp)

Row-Level Security (RLS) policies ensure:

- Users can only SELECT their own bookmarks.
- Users can only INSERT with their own user_id.
- Users can only DELETE their own bookmarks.

This guarantees complete data isolation between users.

---

# 🔄 Real-Time Synchronization

Supabase Realtime is implemented to provide instant updates.

Features:
- Bookmark addition updates instantly across tabs.
- Bookmark deletion updates instantly.
- Cross-tab synchronization within same browser profile.
- Cross-browser synchronization when logged in.

Realtime works through:
- Supabase Postgres changes subscription
- WebSocket-based real-time channel
- State updates triggered on change events

---

# 🔐 Security Implementation

Security is handled at multiple levels:

1. Google OAuth secure authentication.
2. Supabase session validation.
3. Server-side user verification before data fetching.
4. PostgreSQL Row-Level Security (RLS).
5. Restricted database policies.

Even if someone tries to manually query the API,
they cannot access other users’ data due to RLS enforcement.

---

# 💻 Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/mansiSaini-15/smart-bookmark-app.git

