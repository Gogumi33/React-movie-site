// 곧 개봉할 영화들
import React from "react";
import { useUpComingMoviesQuery } from "../../../../hooks/useUpComingMovies";
import { Alert } from "bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const UpComeMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }
  
  return (
    <div>
      <MovieSlider title='😃 Comming Soon!' movies={data.results} responsive={responsive} />
    </div>
  );
};

export default UpComeMovieSlide;
