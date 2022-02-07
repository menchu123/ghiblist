const filterMovies = (data, filter) => {
  const { year, runtime, rating } = filter;
  let filteredData = data;
  if (year) {
    const [from, to] = year.split("-");
    filteredData = filteredData.filter(
      (movie) => movie.release_date >= +from && movie.release_date <= +to
    );
  }
  if (runtime) {
    const [from, to] = runtime.split("-");
    filteredData = filteredData.filter(
      (movie) => movie.running_time >= +from && movie.running_time <= +to
    );
  }
  if (rating) {
    const [from, to] = rating.split("-");
    filteredData = filteredData.filter(
      (movie) => movie.rt_score >= +from && movie.rt_score <= +to
    );
  }
  return filteredData;
};

export default filterMovies;
