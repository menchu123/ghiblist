import "./DetailCard.scss";

const DetailCard = ({ movie }) => {
  return (
    <>
      <section className="movie-detail">
        <img
          className="movie-detail__image"
          src={movie.movie_banner}
          alt={`${movie.title} banner`}
          height="300"
        />
        <section className="movie-detail__info">
          <div className="movie-detail__data">
            <p className="movie-detail__year">{movie.release_date}</p>
            <p className="movie-detail__runtime">{movie.running_time}min</p>
            <p className="movie-detail__score">{movie.rt_score}%</p>
          </div>
        </section>
        <h2 className="movie-detail__title">{movie.title}</h2>
        <p className="movie-detail__director">
          {movie.director} · {movie.producer}
        </p>
        <p className="movie-detail__description">{movie.description}</p>
      </section>
    </>
  );
};

export default DetailCard;
