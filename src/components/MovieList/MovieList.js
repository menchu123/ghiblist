import "./MovieList.scss";
import { useState } from "react/cjs/react.development";
import useMovies from "../../hooks/useMovies";
import SortBar from "../SortBar/SortBar";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const { status, data } = useMovies();
  const [order, setOrder] = useState("title");
  return (
    <>
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
    </>
  );
};

export default MovieList;
