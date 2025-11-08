import { MapPin, Search, User } from "lucide-react";

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#main" className="sr-only focus:not-sr-only focus:outline-none">Skip to content</a>
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
            <MapPin size={18} aria-hidden="true" />
          </div>
          <span className="font-semibold text-slate-800">CultureMap</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search events, venues..."
              className="pl-10 pr-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-80 text-sm"
              aria-label="Search events"
            />
          </div>
        </div>

        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 text-sm" aria-label="Open profile">
          <User size={18} aria-hidden="true" />
          <span className="hidden sm:inline">Profile</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
