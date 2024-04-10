// 네비게이션 바
import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import png from "../assets/netflix.PNG";

// bg="dark" variant="dark" 다크모드
// className="bg-body-tertiary"

// 넷플릭스 로고 링크 - https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png

const AppLayout = () => {
  // 검색어 받아오는 state
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault(); // 자동 새로고침 방지.

    // url 바꿔주기.
    navigate(`/movies?q=${keyword}`);
    setKeyword(""); // 검색창 비워주기.
  }

  return (
    <div style={{background: 'black', color:'white'}}>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary navigation_bar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={png}
              alt="netfilx logo"
              width={100}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>

            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet /> {/* 자손들을 보여주기 위한 제공 기능 */}
    </div>
  );
};

export default AppLayout;
