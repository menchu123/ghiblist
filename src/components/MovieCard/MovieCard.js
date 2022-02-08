import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <li className="movie">
        <section className="movie__image">
          <img
            className="movie__poster"
            src={movie.image}
            alt={`${movie.title} movie poster`}
            height="300"
          />
        </section>
        <section className="movie__info">
          <h3 className="movie__title">{movie.title}</h3>
          <div className="movie__data">
            <p className="movie__year">{movie.release_date}</p>
            <p className="movie__runtime">{movie.running_time}min</p>
            <p className="movie__score">{movie.rt_score}%</p>
          </div>
        </section>
      </li>
    </Link>
  );
};

export default MovieCard;
