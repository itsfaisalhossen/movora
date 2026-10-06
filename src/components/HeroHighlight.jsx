const HeroHighlight = () => {
  return (
    <div className="mb-6 flex justify-center">
      <div className="group relative rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm text-rose-200 backdrop-blur-sm transition hover:bg-rose-500/20">
        <span className="mr-2 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          New
        </span>
        Discover All time's most anticipated blockbusters
        <span className="ml-2 opacity-70 group-hover:opacity-100 transition">
          →
        </span>
      </div>
    </div>
  );
};

export default HeroHighlight;
