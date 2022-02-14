import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import DetailPage from "./pages/DetailPage/DetailPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="ghiblist">
      <h1 className="heading">
        <Link to="/">GHIBLIST</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":movieId" element={<DetailPage />} />
      </Routes>
      <footer className="footer">© 2022 - Menchu for Beezy</footer>
    </div>
  );
}

export default App;
