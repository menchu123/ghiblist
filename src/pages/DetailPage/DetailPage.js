import "./DetailPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";
import { useMovie } from "../../hooks/useMovies";

const Detail = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { data, status, isFetchedAfterMount } = useMovie(movieId);

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)} className="go-back">
        {"<"}
      </button>
      {status === "error" && <div className="error">Could not find movie</div>}
      {(status === "loading" || !isFetchedAfterMount) && (
        <div className="loader">Loading...</div>
      )}
      {isFetchedAfterMount && status === "success" && (
        <DetailCard movie={data} />
      )}
    </div>
  );
};

export default Detail;
