import { Calendar, Star } from "lucide-react";
import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieCard = ({ movie }) => {
  const { name, image, rating, premiered } = movie;
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="text-white flex flex-col justify-between lg:bg-[#1f0000] rounded-2xl p-5">
      <div className=" flex-col flex w-full justify-center items-center">
        <img className="w-[230px]  rounded-2xl" src={image?.medium} alt="" />
      </div>
      <div className="space-y-5 mt-3">
        <h1 className="text-lg font-medium">{name}</h1>
        <div className="flex justify-between text-sm font-medium">
          <p className="flex items-center gap-2">
            <Star size={18} /> {rating?.average}
          </p>
          <p className="flex items-center gap-2">
            <Calendar size={18} />
            {premiered}
          </p>
        </div>
        <button
          onClick={() => setSelectedMovie(movie)}
          className="group text-sm z-0 w-full relative overflow-hidden rounded-full bg-rose-500 px-8 py-3 font-semibold text-white shadow-[0_0_30px_-5px_#f43f5e] transition hover:bg-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
        >
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          See Details
        </button>
      </div>

      {/* Modal Section */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieCard;
