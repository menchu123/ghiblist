import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <div className="ghiblist">
      <h1 className="heading">GHIBLIST</h1>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path=":id" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
