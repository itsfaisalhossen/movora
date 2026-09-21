import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import Container from "../components/Container";

const MovieListing = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      const fetchAllMovies = async () => {
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
      fetchAllMovies();
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    const timeoutId = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
        );
        const data = await res.json();

        const shows = data.map((item) => item.show);
        setAllMovies(shows);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);
  return (
    <div>
      <Container>
        <div className="my-14 md:my-20 ">
          <div className="textcenter flex gap-4 max-md:flex-col justify-between items-center text-white mb-12">
            <div className="fraunces">
              <p className="text-xs opacity-30">DIVE INTO THE VAULT</p>
              <h2 className="text-5xl md:text-6xl font-bold ">
                Your next binge <br />{" "}
                <p className="text-rose-500">is hiding here.</p>
              </h2>
            </div>
            <div>
              <p className="w-full md:w-112.5 max-md:text-center opacity-80">
                Dig through thousands of shows on TVMaze — hunt by title, genre,
                rating or release year until something clicks.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-24 border border-white/10 bg-white/10 rounded-full p-3 md:p-6 mx-auto max-w-3xl   ">
            <div className="relative w-full max-w-3xl mx-auto ">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Movie"
                className="w-full border text-white border-rose-300 text-base rounded-full p-4 pl-12 pr-40 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : allMovies.length === 0 ? (
          <p className="text-center text-gray-400 mb-12">
            No movies found for "{query}"
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {allMovies.map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default MovieListing;
