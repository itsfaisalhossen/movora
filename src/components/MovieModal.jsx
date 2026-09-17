import { X, Star, Calendar, Clock, Tv2 } from "lucide-react";

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
  } = movie;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1f0000] shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Backdrop / poster */}
        <div className="w-full h-72 md:h-80 overflow-hidden rounded-t-2xl bg-gray-800">
          <img
            src={image?.original || image?.medium}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 text-white space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              {rating?.average ?? "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {premiered ?? "Unknown"}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {runtime ? `${runtime} min` : "N/A"}
            </span>
            {network?.name && (
              <span className="flex items-center gap-1">
                <Tv2 size={16} />
                {network.name}
              </span>
            )}
          </div>

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

          <div>
            <h3 className="text-lg font-semibold mb-1">Overview</h3>
            <div
              className="text-gray-300 text-sm leading-relaxed [&>p]:mb-2"
              dangerouslySetInnerHTML={{
                __html: summary || "No summary available.",
              }}
            />
          </div>

          {status && (
            <p className="text-xs text-gray-400">
              Status: <span className="text-gray-200">{status}</span>
            </p>
          )}

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors px-5 py-2 text-sm font-medium cursor-pointer"
            >
              <X size={16} />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
