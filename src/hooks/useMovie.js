import { useQuery } from "react-query";
import axios from "axios";

const getMovieById = async (movieId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_URL}/${movieId}`);
  return data;
};

export default function useMovie(movieId) {
  return useQuery("movie", () => getMovieById(movieId), {
    notifyOnNetworkStatusChange: true,
    keepPreviousData: false,
    retry: false,
  });
}
