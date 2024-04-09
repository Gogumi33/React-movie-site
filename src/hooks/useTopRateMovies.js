// top_rate movie API 호출

import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies = () => {
    return api.get(`/movie/top_rated?language=ko-KR`);
}

// 컴포넌트 훅 - 다른데에서도 가져다 쓰기 쉬움.
export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-top-rated'],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data,
    })
}