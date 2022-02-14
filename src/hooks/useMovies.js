import { useQuery } from "react-query";
import axios from "axios";
import filterMovies from "../filterMovies/filterMovies";

const getMovies = async (filter) => {
  const { data } = await axios.get(process.env.REACT_APP_URL);
  return filterMovies(data, filter);
};

const getMovieById = async (movieId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_URL}/${movieId}`);
  return data;
};

export function useMovies(filter) {
  return useQuery(["movies", filter], () => getMovies(filter), {
    retry: false,
  });
}

export function useMovie(movieId) {
  return useQuery("movie", () => getMovieById(movieId), {
    notifyOnNetworkStatusChange: true,
    keepPreviousData: false,
    retry: false,
  });
}
