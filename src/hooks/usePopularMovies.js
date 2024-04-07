// popular movie API 호출

import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
    return api.get(`/movie/popular`);
}

// 컴포넌트 훅 - 다른데에서도 가져다 쓰기 쉬움.
export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
    })
}