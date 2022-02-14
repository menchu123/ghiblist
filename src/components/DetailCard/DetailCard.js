import "./DetailCard.scss";
import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";

const DetailCard = () => {
  const { movieId } = useParams();
  const { data, status, isFetchedAfterMount } = useMovie(movieId);

  return (
    <>
      {status === "error" && <div className="error">Could not find movie</div>}
      {(status === "loading" || !isFetchedAfterMount) && (
        <div className="loader">Loading...</div>
      )}
      {isFetchedAfterMount && status === "success" && (
        <>
          <section className="movie-detail">
            <img
              className="movie-detail__image"
              src={data.movie_banner}
              alt={`${data.title} banner`}
              height="300"
            />
            <section className="movie-detail__info">
              <div className="movie-detail__data">
                <p className="movie-detail__year">{data.release_date}</p>
                <p className="movie-detail__runtime">{data.running_time}min</p>
                <p className="movie-detail__score">{data.rt_score}%</p>
              </div>
            </section>
            <h2 className="movie-detail__title">{data.title}</h2>
            <p className="movie-detail__director">
              {data.director} · {data.producer}
            </p>
            <p className="movie-detail__description">{data.description}</p>
          </section>
        </>
      )}
    </>
  );
};

export default DetailCard;
