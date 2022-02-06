import "./MovieList.scss";
import { useState } from "react/cjs/react.development";
import useMovies from "../../hooks/useMovies";
import SortBar from "../SortBar/SortBar";
import MovieCard from "../MovieCard/MovieCard";
import Filter from "../Filter/Filter";

const MovieList = () => {
  const [order, setOrder] = useState("title");
  const [filterOptions, setFilterOptions] = useState({});
  const { status, data } = useMovies(filterOptions);

  return (
    <>
      <Filter
        setFilterOptions={setFilterOptions}
        filterOptions={filterOptions}
      />
      <SortBar setOrder={setOrder} order={order} />
      <ul className="movie-list">
        {status === "loading" ? (
          <div>Loading...</div>
        ) : data.length ? (
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
          <div>No results</div>
        )}
      </ul>
    </>
  );
};

export default MovieList;
