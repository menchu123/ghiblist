import { useQuery } from "react-query";
import axios from "axios";
import filterMovies from "../filterMovies/filterMovies";

const getMovies = async (filter) => {
  const { data } = await axios.get(process.env.REACT_APP_URL);
  return filterMovies(data, filter);
};

export default function useMovies(filter) {
  return useQuery(["movies", filter], () => getMovies(filter), {
    retry: false,
  });
}
