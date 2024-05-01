// 영화 상세 페이지에 대한 리액트 쿼리
import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMovieDetail = ({id}) => {
    return api.get(`/movie/${id}`);
};

export const useMovieDetailQuery = ({id}) => {
    return useQuery({
        queryKey: ['movie-datail', id],
        queryFn: () => fetchMovieDetail({id}),
        select: (result) => result.data,
    });
};