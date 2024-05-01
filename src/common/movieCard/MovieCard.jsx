import React from 'react'
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const {data: genreData} = useMovieGenreQuery(); // 데이터 이름 재정의.
  // 상세 영화 페이지 이동
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if(!genreData) return []; // 장르 데이터가 없다면 그냥 아무것도 안 보여주겠다.
    const genreNameList = genreIdList.map((id) => { // 장르의 이름만 보인 것들이 모일것이다.
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  }
  const movieDetailPage = (id) => {
    navigate(`/movies/${id}`);
  }

  // onClick 이벤트로 movieDetailPage로 이동.
  return (
    <div onClick={() => movieDetailPage(movie?.id)} style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}} className="movie-card">
      
      <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id) => (
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
