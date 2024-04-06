import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepages/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";

// 1. 홈페이지 -> /
// 2. 영화 전체를 보여주는 페이지(search) -> /movies
// 3. 영화 상세 페이지 -> /movies/id


function App() {
  // Navbar = app layout
  // AppLayout 마저 라우트에 넣어서 네브바조차 바꿀 수 있게 만든다.
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index elememt={<Homepage/>}/>

        <Route path="movies">
          <Route index element={<MoviePage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>

        {/* <Route path="/movies" elememt={<Moviepage/>}/>
        <Route path="/movies/:id" elememt={<MovieDetailPage/>}/> */}
      </Route>


      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}


export default App;
