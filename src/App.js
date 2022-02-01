import MovieCard from "./components/MovieCard/MovieCard";
import "./App.scss";

import useMovies from "./hooks/useMovies";

function App() {
  const { status, data } = useMovies();

  return (
    <div className="App">
      <ul className="movie-list">
        {status !== "loading" ? (
          data.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}

export default App;
