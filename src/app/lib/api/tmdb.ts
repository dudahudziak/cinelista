import { filme } from "../../types/types";
import tmdApi from "./axios";

type Data = {
    results: filme[];
}


export const getTrendingMovies = async () => {

    const res = await tmdApi.get<Data>("/trending/movie/week?language=pt-BR");
    return res.data.results;
}


export const getMoviesDetails = async (id: number): Promise<filme | undefined> => {
    const res = await tmdApi.get<filme>(`/movie/${id}?language=pt-BR`);
    return res.data;
};

export const getNowPlaying= async () => {

    const res = await tmdApi.get<Data>("/movie/now_playing?language=pt-BR");
    return res.data.results;
}

export const getPopularMovies= async () => {

    const res = await tmdApi.get<Data>("/movie/popular?language=pt-BR");
    return res.data.results;
}

export const getTopMovies= async () => {

    const res = await tmdApi.get<Data>("/movie/top_rated?language=pt-BR");
    return res.data.results;
}