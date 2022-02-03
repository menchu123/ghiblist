import MovieCard from "./components/MovieCard/MovieCard";
import "./App.scss";

import useMovies from "./hooks/useMovies";
import SortBar from "./components/SortBar/SortBar";
import { useState } from "react/cjs/react.development";

function App() {
  const { status, data } = useMovies();
  const [order, setOrder] = useState("title");

  return (
    <div className="App">
      <SortBar setOrder={setOrder} order={order} />
      <ul className="movie-list">
        {status !== "loading" ? (
          data
            .sort(
              order === "title"
                ? (a, b) =>
                    a[order].localeCompare(b[order], "en", {
                      ignorePunctuation: true,
                    })
                : (a, b) => b[order] - a[order]
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}

export default App;
