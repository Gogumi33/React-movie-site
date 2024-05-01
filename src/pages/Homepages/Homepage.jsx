// 최종 홈페이지 -> 여기에 컴포넌트들 다 가져옴
import React from "react";
import Banner from "./components/banner/Banner";
import PopularMovieSlide from "./components/popularMovieSlide/PopularMovieSlide";
import TopRateMovieSlide from "./components/topRateMovieSlide/TopRateMovieSlide";
import UpComeMovieSlide from "./components/upComeMovieSlide/UpComeMovieSlide";

// 만들어야 할 것.
// 1. 배너(첫 번째 popular 영화꺼 들고오기)
// 2. 인기있는 영화
// 3. 탑 랭킹 영화
// 4. 미개봉 영화

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRateMovieSlide />
      <UpComeMovieSlide />
    </div>
  );
};

export default Homepage;
