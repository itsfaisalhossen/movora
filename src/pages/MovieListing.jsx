import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import Container from "../components/Container";

const MovieListing = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();

        setAllMovies(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center my-14 md:my-20">
        <div className="relative w-full max-w-4xl mx-auto">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Enter your movie name"
            className="w-full border text-white border-red-200 text-xl rounded-full p-4 pl-12 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>
      </div>
      <Container>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {allMovies.map((movie) => (
                <MovieCard key={movie?.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};
export default MovieListing;
