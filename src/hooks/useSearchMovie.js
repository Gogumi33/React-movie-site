import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// 이 함수에서 중요한 것 - 상황에 따라 2가지의 다른 URL 호출시켜줘야함.
const fetchSearchMovie = ({ keyword, page }) => {
  // 키워드가 있다면 영화 찾아서 렌딩.
  return keyword
    ? api.get(`/search/movie?language=ko-KR&query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?language=ko-KR&page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["movie-search", {keyword, page}], // 항상 keyword에 따라 달라지므로 매개변수로 넣어주기.
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
  });
};
