import React from "react";
import { Alert } from "bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Row, Col, Container } from "react-bootstrap";

const MovieDetailPage = () => {
  const { id } = useParams(); // 넘겨준 parameter 값 사용.
  const { data, isLoading, isError, error } = useMovieDetailQuery({ id });

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container className="movie-detail">
      <Row>
        <Col className="movie-detail-image">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
            }}
            className="movie-detail-backdrop"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
            }}
            className="movie-detail-poster"
          ></div>
        </Col>
      </Row>
      <Row>
        <div className="movie-info">
          <ul className="top">
            <li>
              <div className="movie-title">{data?.title}</div>
            </li>
            <li>
              <div className="movie-tagline">"{data?.tagline}"</div>
            </li>
            <ul>
              <li>{data?.vote_average.toFixed(2)}</li>
              <li>{data?.release_date}</li>
              <li>{data?.runtime}분</li>
              <li>{data?.adult ? "성인" : "전체 관람가"}</li>
            </ul>
          </ul>
          <hr />
          <ul className="mid">
            <li className="staff">
              <span>감독</span>
              {data?.credits.crew.map((staff) => (
                <span>{staff.name}</span>
              ))}
            </li>
            <li className="actor">
              <span>출연</span>
              {data?.credits.cast.map((actor) => (
                <span>{actor.name}</span>
              ))}
            </li>
            <li className="genre">
              <span>장르</span>
              {data?.genres.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </li>
            <li className="overview">
              <span>소개</span>
              <span>{data?.overview}</span>
            </li>
          </ul>
          <hr />
          <ul className="bottom">
            <li>
              <span>예산</span>
              <span>
                ${" "}
                {data?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </li>
            <li>
              <span>수익</span>
              <span>
                ${" "}
                {data?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </li>
          </ul>
          <hr />
        </div>
      </Row>
    </Container>
  );
};

export default MovieDetailPage;
