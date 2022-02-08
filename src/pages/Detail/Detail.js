import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";

const Detail = () => {
  const { movieId } = useParams();
  const { data, status, isFetchedAfterMount } = useMovie(movieId);

  return (
    <>
      {(status === "loading" || !isFetchedAfterMount) && <div>Loading...</div>}
      {isFetchedAfterMount && status === "success" && (
        <>
          <h2>{data.title}</h2>
          <img
            src={data.movie_banner}
            alt={`${data.title} banner`}
            height="300"
          />
        </>
      )}
    </>
  );
};

export default Detail;
