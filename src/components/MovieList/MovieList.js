import "./MovieList.scss";
import { useState } from "react";
import useMovies from "../../hooks/useMovies";
import SortBar from "../SortBar/SortBar";
import MovieCard from "../MovieCard/MovieCard";
import Filter from "../Filter/Filter";

const MovieList = () => {
  const [order, setOrder] = useState("title");
  const [filterOptions, setFilterOptions] = useState({});
  const { status, data } = useMovies(filterOptions);

  const addToFilter = (event, filterType) => {
    setFilterOptions({ ...filterOptions, [filterType]: event.target.value });
  };

  const removeAllFilters = () => {
    setFilterOptions({});
  };

  const sortMovies = (movies) => {
    movies.sort(
      order === "title"
        ? (a, b) =>
            a[order].localeCompare(b[order], "en", {
              ignorePunctuation: true,
            })
        : (a, b) => b[order] - a[order]
    );
    return movies;
  };

  return (
    <section className="movies">
      <div className="movies__sidebar">
        <Filter addToFilter={addToFilter} removeAllFilters={removeAllFilters} />
      </div>
      <div className="movies__container">
        <SortBar setOrder={setOrder} order={order} />

        {status === "error" && (
          <div className="error">Could not find movies</div>
        )}
        {status === "loading" && <div className="loader">Loading...</div>}
        {status === "success" &&
          (data.length ? (
            <ul className="movie-list">
              {sortMovies(data).map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </ul>
          ) : (
            <div className="no-results">
              No results <br />
              (╯°□°）╯︵ ┻━┻)
            </div>
          ))}
      </div>
    </section>
  );
};

export default MovieList;
