import React from 'react'
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';

const MovieCard = ({movie}) => {
  return (
    <div style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}} className="movie-card">
      
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
        
        <div>
            <div>👑 {(movie.vote_average).toFixed(1)}</div>
            <div>👩‍👩‍👦 {(movie.popularity).toFixed(0)}</div>
            <div>{movie.adult?'🔞 청소년관람불가':'🆗 전체관람가'}</div>
        </div>
        ------------------------------
        <div>
            <div>🗓️ 영화개봉일</div>
            <div>{movie.release_date}</div>
        </div>
      </div>

    </div>
  )
}

export default MovieCard
