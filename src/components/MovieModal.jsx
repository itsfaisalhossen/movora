import { X, Star, Calendar, Clock, Tv2, Play } from "lucide-react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const {
    image,
    name,
    summary,
    rating,
    premiered,
    genres,
    network,
    runtime,
    status,
    ended,
    officialSite,
  } = movie;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1f0000] shadow-2xl border border-white/40"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-900 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Content: poster left, details right */}
        <div className="flex flex-col items-center md:flex-row gap-6 p-6">
          {/* Poster */}
          <div className="relative w-full md:w-56 shrink-0">
            <div className="w-full aspect-2/3 overflow-hidden rounded-xl bg-gray-800">
              <img
                src={image?.original || image?.medium}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {status && (
              <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white">
                {status}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 text-white bg-[#300d0dfa] p-3.5 rounded-2xl space-y-4 min-w-0">
            <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>

            {genres?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            {/* Stat cards */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase text-gray-400">
                    Rating
                  </span>
                  <span className="text-sm font-semibold">
                    {rating?.average ?? "N/A"}/10
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2">
                <Clock size={18} className="text-blue-300" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase text-gray-400">
                    Runtime
                  </span>
                  <span className="text-sm font-semibold">
                    {runtime ? `${runtime}m` : "N/A"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2">
                <Calendar size={18} className="text-green-300" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase text-gray-400">
                    Premiered
                  </span>
                  <span className="text-sm font-semibold">
                    {premiered ?? "Unknown"}
                  </span>
                </div>
              </div>

              {network?.name && (
                <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2">
                  <Tv2 size={18} className="text-purple-300" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase text-gray-400">
                      Network
                    </span>
                    <span className="text-sm font-semibold">
                      {network.name}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Storyline */}
            <div>
              <h3 className="text-lg font-semibold mb-1">Storyline</h3>
              <div
                className="text-gray-300 text-sm leading-relaxed [&>p]:mb-2"
                dangerouslySetInnerHTML={{
                  __html: summary || "No summary available.",
                }}
              />
            </div>

            {/* Network / ended row */}
            {(network?.name || ended) && (
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
                {network?.name && (
                  <span>
                    Network:{" "}
                    <span className="text-gray-200 font-semibold">
                      {network.name}
                    </span>
                  </span>
                )}
                {ended && (
                  <span>
                    Ended:{" "}
                    <span className="text-gray-200 font-semibold">{ended}</span>
                  </span>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {officialSite && (
                <a
                  href={officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-lime-400 hover:bg-lime-500 transition-colors px-5 py-2 text-sm font-semibold text-black cursor-pointer"
                >
                  <Play size={16} className="fill-black" />
                  Official Site
                </a>
              )}
              <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors px-5 py-2 text-sm font-medium cursor-pointer"
              >
                <X size={16} />
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
