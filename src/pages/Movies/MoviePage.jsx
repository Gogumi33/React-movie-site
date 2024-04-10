import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from "../../common/movieCard/MovieCard";
import "./MoviePage.style.css";

import ReactPaginate from "react-paginate";

// 이 페이지로 올 수 있는 경로는 2가지
// 1. nav바에서 직접 movies 클릭 => popularMovie 보여주기
// 2. keyword를 검색해서 온 경우

// 리액트 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭 시 마다 page 바꿔주기
// page 값이 바뀔 때 마다 useSearchMovie에 page까지 넣어 fetch

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q"); // url에서 쿼리값 읽어오기.

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  const handlePageClick = ({selected}) => {
    setPage(selected+1);
  };

  // console.log("@@@", data);
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
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>

          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체 페이지 몇 개 인지 전달 필수.
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
