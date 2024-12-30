import "../css/Favorite.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/movieCard";
function Favorite() {
  const { favorites } = useMovieContext();
  if (!favorites || favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
