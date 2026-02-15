export default function App() {
  const handleGoogleLogin = () => {
    // Placeholder for Google OAuth login
    // In a real implementation, this would redirect to Google OAuth flow
    console.log('Google login clicked');
    alert('Google OAuth would be initiated here. Please configure with your Google OAuth credentials.');
  };

  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Book and Diary Themed Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Open Book Pages Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pages" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <line x1="20" y1="0" x2="20" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="40" y1="0" x2="40" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="60" y1="0" x2="60" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="80" y1="0" x2="80" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="100" y1="0" x2="100" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="120" y1="0" x2="120" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="140" y1="0" x2="140" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="160" y1="0" x2="160" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
                <line x1="180" y1="0" x2="180" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pages)"/>
          </svg>
        </div>

        {/* Decorative Books */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 opacity-20">
          {/* Book Stack Left */}
          <div className="relative mb-8 transform -rotate-3">
            <div className="w-24 h-32 bg-red-700 rounded-r-md shadow-lg border-r-4 border-red-900"></div>
            <div className="absolute top-0 left-0 w-2 h-32 bg-red-900"></div>
          </div>
          <div className="relative mb-4 transform rotate-2">
            <div className="w-28 h-36 bg-blue-700 rounded-r-md shadow-lg border-r-4 border-blue-900"></div>
            <div className="absolute top-0 left-0 w-2 h-36 bg-blue-900"></div>
          </div>
          <div className="relative mb-12">
            <div className="w-32 h-40 bg-green-700 rounded-r-md shadow-lg border-r-4 border-green-900"></div>
            <div className="absolute top-0 left-0 w-2 h-40 bg-green-900"></div>
          </div>
          <div className="relative mb-6 transform -rotate-1">
            <div className="w-24 h-32 bg-purple-700 rounded-r-md shadow-lg border-r-4 border-purple-900"></div>
            <div className="absolute top-0 left-0 w-2 h-32 bg-purple-900"></div>
          </div>
          <div className="relative mb-10 transform rotate-3">
            <div className="w-28 h-36 bg-orange-700 rounded-r-md shadow-lg border-r-4 border-orange-900"></div>
            <div className="absolute top-0 left-0 w-2 h-36 bg-orange-900"></div>
          </div>
        </div>

        {/* Floating Bookmarks */}
        <div className="absolute top-20 left-20 animate-bounce opacity-30" style={{ animationDuration: '3s' }}>
          <svg width="40" height="80" viewBox="0 0 40 80">
            <rect x="0" y="0" width="40" height="70" fill="#ef4444" rx="2"/>
            <polygon points="20,70 10,80 20,75 30,80" fill="#ef4444"/>
            <rect x="5" y="10" width="30" height="2" fill="#ffffff" opacity="0.5"/>
            <rect x="5" y="18" width="25" height="2" fill="#ffffff" opacity="0.5"/>
          </svg>
        </div>

        <div className="absolute top-40 right-32 animate-bounce opacity-30" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          <svg width="35" height="70" viewBox="0 0 35 70">
            <rect x="0" y="0" width="35" height="60" fill="#3b82f6" rx="2"/>
            <polygon points="17.5,60 8.75,70 17.5,65 26.25,70" fill="#3b82f6"/>
            <rect x="5" y="10" width="25" height="2" fill="#ffffff" opacity="0.5"/>
            <rect x="5" y="18" width="20" height="2" fill="#ffffff" opacity="0.5"/>
          </svg>
        </div>

        <div className="absolute bottom-40 right-20 animate-bounce opacity-30" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
          <svg width="45" height="85" viewBox="0 0 45 85">
            <rect x="0" y="0" width="45" height="75" fill="#8b5cf6" rx="2"/>
            <polygon points="22.5,75 11.25,85 22.5,80 33.75,85" fill="#8b5cf6"/>
            <rect x="5" y="10" width="35" height="2" fill="#ffffff" opacity="0.5"/>
            <rect x="5" y="18" width="28" height="2" fill="#ffffff" opacity="0.5"/>
          </svg>
        </div>

        <div className="absolute top-1/3 left-40 animate-bounce opacity-30" style={{ animationDuration: '3.8s', animationDelay: '1.5s' }}>
          <svg width="38" height="75" viewBox="0 0 38 75">
            <rect x="0" y="0" width="38" height="65" fill="#10b981" rx="2"/>
            <polygon points="19,65 9.5,75 19,70 28.5,75" fill="#10b981"/>
            <rect x="5" y="10" width="28" height="2" fill="#ffffff" opacity="0.5"/>
            <rect x="5" y="18" width="22" height="2" fill="#ffffff" opacity="0.5"/>
          </svg>
        </div>

        {/* Open Book Left Side */}
        <div className="absolute top-10 left-10 opacity-15">
          <svg width="200" height="150" viewBox="0 0 200 150">
            <path d="M10,10 Q10,75 50,130 L50,20 Q10,20 10,10" fill="#f5e6d3" stroke="#8B4513" strokeWidth="2"/>
            <line x1="20" y1="30" x2="45" y2="30" stroke="#8B4513" strokeWidth="0.5" opacity="0.5"/>
            <line x1="20" y1="40" x2="45" y2="42" stroke="#8B4513" strokeWidth="0.5" opacity="0.5"/>
            <line x1="20" y1="50" x2="45" y2="54" stroke="#8B4513" strokeWidth="0.5" opacity="0.5"/>
            <line x1="20" y1="60" x2="45" y2="66" stroke="#8B4513" strokeWidth="0.5" opacity="0.5"/>
            <line x1="20" y1="70" x2="45" y2="78" stroke="#8B4513" strokeWidth="0.5" opacity="0.5"/>
          </svg>
        </div>

        {/* Diary/Journal Top Right */}
        <div className="absolute top-20 right-10 opacity-20">
          <svg width="120" height="160" viewBox="0 0 120 160">
            <rect x="10" y="0" width="100" height="150" fill="#8B4513" rx="4"/>
            <rect x="15" y="5" width="90" height="140" fill="#d4a574" rx="2"/>
            <rect x="20" y="10" width="80" height="130" fill="#f5e6d3" rx="2"/>
            <line x1="30" y1="25" x2="90" y2="25" stroke="#8B4513" strokeWidth="1" opacity="0.3"/>
            <line x1="30" y1="35" x2="90" y2="35" stroke="#8B4513" strokeWidth="1" opacity="0.3"/>
            <line x1="30" y1="45" x2="85" y2="45" stroke="#8B4513" strokeWidth="1" opacity="0.3"/>
            <line x1="30" y1="55" x2="90" y2="55" stroke="#8B4513" strokeWidth="1" opacity="0.3"/>
            <line x1="30" y1="65" x2="80" y2="65" stroke="#8B4513" strokeWidth="1" opacity="0.3"/>
            <circle cx="60" cy="90" r="15" fill="#c19a6b"/>
            <text x="60" y="95" textAnchor="middle" fill="#8B4513" fontSize="12" fontWeight="bold">SM</text>
          </svg>
        </div>

        {/* Page Corner Curls */}
        <div className="absolute bottom-20 left-1/4 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,80 Q80,100 60,80 L0,80 Z" fill="#f5e6d3" stroke="#d4a574" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 size-full flex items-center justify-center p-4">
        <div className="w-full max-w-md flex flex-col items-center gap-8">
          {/* App Title with Book-styled Card */}
          <div className="text-center bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 shadow-2xl border-4 border-amber-800 w-full relative">
            {/* Book binding effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-900 to-amber-700 rounded-l-3xl">
              <div className="h-full flex flex-col justify-around py-4">
                <div className="w-full h-0.5 bg-amber-950"></div>
                <div className="w-full h-0.5 bg-amber-950"></div>
                <div className="w-full h-0.5 bg-amber-950"></div>
              </div>
            </div>
            
            <div className="mb-6 ml-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="url(#bookmarkGradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="bookmarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#92400e', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ea580c', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 text-amber-900 ml-4">
              Smart Bookmark App
            </h1>
            <p className="text-amber-800 mt-4 ml-4">
              Save and organize your favorite links like bookmarks in a book
            </p>
          </div>

          {/* Google OAuth Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-3 bg-white text-gray-700 px-6 py-4 rounded-xl border-2 border-amber-700 hover:scale-105 hover:shadow-2xl hover:border-amber-800 transition-all duration-300 w-full max-w-sm justify-center shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>

          {/* Additional Info */}
          <p className="text-sm text-amber-900 text-center max-w-sm bg-amber-100/80 py-3 px-4 rounded-full shadow-md border-2 border-amber-600">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}