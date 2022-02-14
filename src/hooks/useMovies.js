import { useQuery } from "react-query";
import axios from "axios";
import filterMovies from "./filterMovies";

const getMovies = async (filter) => {
  const { data } = await axios.get(process.env.REACT_APP_URL);
  return filterMovies(data, filter);
};

const getMovieById = async (movieId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_URL}/${movieId}`);
  return data;
};

export function useMovies(filter) {
  return useQuery(["movies", filter], () => getMovies(filter));
}

export function useMovie(movieId) {
  return useQuery("movie", () => getMovieById(movieId), {
    refetchOnMount: "always",
    notifyOnNetworkStatusChange: true,
    keepPreviousData: false,
  });
}
