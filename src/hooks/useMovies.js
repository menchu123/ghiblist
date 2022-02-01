import { useQuery } from "react-query";
import axios from "axios";

const getMovies = async () => {
  const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
  return data;
};

export default function useMovies() {
  return useQuery("movies", getMovies);
}
