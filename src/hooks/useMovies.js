import { useQuery } from "react-query";
import axios from "axios";
import filterMovies from "./filters";

const getMovies = async (filter) => {
  const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
  return filterMovies(data, filter);
};

export default function useMovies(filter) {
  return useQuery(["movies", filter], () => getMovies(filter));
}
