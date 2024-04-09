import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRateMovies";
import { Alert } from "bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const TopRateMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider title='🏆 최고의 빛나는 영화들' movies={data.results} responsive={responsive} />
    </div>
  );
};

export default TopRateMovieSlide;
