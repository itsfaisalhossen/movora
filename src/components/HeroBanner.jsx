import { Link } from "react-router";
import HeroHighlight from "./HeroHighlight";

const HeroBanner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a0308] text-rose-50">
      {/* grid field */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]
               bg-[linear-gradient(to_right,#f43f5e_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e_1px,transparent_1px)]
               bg-size-[64px_64px]
               mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_40%,transparent_100%)]"
      />

      {/* top + bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-rose-500/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-rose-500/40 to-transparent" />

      <div className="relative container mx-auto flex flex-col items-center px-6 py-24 text-center sm:py-32 lg:py-40">
        <HeroHighlight />
        <h1 className="mt-8 max-w-4xl bg-linear-to-b from-white via-rose-100 to-rose-400/70 bg-clip-text text-5xl font-semibold leading-[1.05] tracking-tight text-transparent sm:text-6xl lg:text-7xl">
          Discover movies
          <br className="hidden sm:block" /> worth your night in
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-rose-100/70 sm:text-lg">
          Search any title, browse by what you're in the mood for, and open a
          film to see the cast, rating, and runtime in seconds.
        </p>

        {/* actions */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            to="/movie-listing"
            className="group relative overflow-hidden rounded-full bg-rose-500 px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_-5px_#f43f5e] transition hover:bg-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Explore now
          </Link>

          <Link
            to="/movie-listing"
            className="rounded-full border border-rose-300/25 bg-white/5 px-8 py-3.5 text-base font-medium text-rose-100 backdrop-blur-md transition hover:border-rose-300/50 hover:bg-white/10"
          >
            Browse trending
          </Link>
        </div>

        {/* stats strip */}
        <dl className="mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-rose-300/15 rounded-2xl border border-rose-300/15 bg-white/5 py-6 backdrop-blur-md">
          {[
            ["10K+", "Movies"],
            ["25", "Genres"],
            ["4.8", "Avg rating"],
          ].map(([value, label]) => (
            <div key={label} className="px-4">
              <dt className="text-2xl font-semibold text-white sm:text-3xl">
                {value}
              </dt>
              <dd className="mt-1 text-xs text-rose-200/60 sm:text-sm">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroBanner;
