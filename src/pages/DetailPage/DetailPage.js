import "./DetailPage.scss";
import { useNavigate } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)} className="go-back">
        {"<"}
      </button>
      <DetailCard />
    </div>
  );
};

export default Detail;
