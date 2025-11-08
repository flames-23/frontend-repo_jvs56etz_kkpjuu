import { Map, Stars, Camera, BadgeCheck } from "lucide-react";

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
      <div className="h-10 w-10 rounded-md bg-indigo-50 text-indigo-600 grid place-items-center mb-3">
        <Icon size={18} aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

function FeatureGrid() {
  return (
    <section id="how-it-works" className="py-12 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">What you can do</h2>
        <p className="text-slate-600 mt-1">A fast, accessible, map-first experience.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon={Map} title="Map-first discovery" desc="Clustered markers, popups, and a synced list view." />
          <Feature icon={Camera} title="QR check-in" desc="Scan in-browser or enter a token manually." />
          <Feature icon={Stars} title="Ratings & comments" desc="Optimistic UI with mock endpoints via MSW." />
          <Feature icon={BadgeCheck} title="Points & badges" desc="Gamified feedback with local persistence." />
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
