import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("data", data); // API로 부터 데이터 잘 받아오는지 test.

  if (isLoading) {
    // 나중에 로딩스피너 넣기.
    <h1>Loading...</h1>;
  }
  if (isError) {
    // 에러 alert 넣기.
    <Alert variant="danger">{error.message}</Alert>;
  }

  // data?. 는 데이터가 있으면 보여달라는 의미.
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org./t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
