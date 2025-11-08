import Spline from "@splinetool/react-spline";

function HeroTicket() {
  return (
    <section
      aria-label="Hero: Discover cultural events"
      className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
          aria-hidden
        />
      </div>

      {/* Subtle gradient to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Explore culture on a living map
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/90">
            A map-first way to discover events, check in with QR, earn points and badges, and
            follow whats happening around you.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#discover"
              className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              Start exploring
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-md border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTicket;
