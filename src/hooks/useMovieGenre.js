// 장르 매칭시켜주는 api 훅
// 리액트 쿼리
import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMovieGenre = () => {
    return api.get('/genre/movie/list?language=ko-KR');
};

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres, // data중에서도 장르만 뽑아보겠다.
        staleTime: 300000, // 5분동안은 호출x
    });
};