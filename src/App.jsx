import Header from "./components/Header";
import HeroTicket from "./components/HeroTicket";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main id="main" className="flex-1">
        <HeroTicket />
        <section id="discover" className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold">A map-first cultural guide</h2>
                <p className="mt-2 text-slate-600">
                  This demo showcases the core ideas: a full-screen interactive map
                  with clustered markers, synchronized lists, QR check-in, ratings, and a gamified profile.
                  Data is mocked via MSW so it can be swapped with a real backend later.
                </p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
                  <li>Accessible controls and keyboard-friendly flows</li>
                  <li>Lazy-loaded heavy libraries for performance</li>
                  <li>URL-synced filters and query caching</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-6 bg-gradient-to-br from-indigo-50 to-fuchsia-50">
                <p className="font-medium">Coming next in the full build:</p>
                <ol className="mt-2 text-slate-700 list-decimal pl-5 space-y-1">
                  <li>Mapbox GL map shell with cluster layers and popups</li>
                  <li>Side panel synced to map bounds</li>
                  <li>QR scanner modal with manual token fallback</li>
                  <li>Optimistic ratings/comments and gamified points</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
