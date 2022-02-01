import MovieCard from "./components/MovieCard/MovieCard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ul className="movie-list">
        <MovieCard />
      </ul>
    </div>
  );
}

export default App;
