function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} CultureMap. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#how-it-works" className="hover:text-slate-900">Features</a>
          <a href="#discover" className="hover:text-slate-900">Discover</a>
          <a href="#" className="hover:text-slate-900">Accessibility</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
