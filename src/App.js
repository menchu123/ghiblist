import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="ghiblist">
      <h1 className="heading">GHIBLIST</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":movieId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
