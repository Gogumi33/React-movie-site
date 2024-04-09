import React from 'react';
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../movieCard/MovieCard";

const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
      <h3 className="h3-tag">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="caruosel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => <MovieCard movie={movie} key={index}/> )}
      </Carousel>
    </div>
  )
}

export default MovieSlider
