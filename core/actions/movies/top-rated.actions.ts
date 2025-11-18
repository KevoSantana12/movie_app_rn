import { movieApi } from "core/api/movie-api"
import { MovieDBResponse } from "infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "infrastructure/mappers/movie.mapper";

interface Options {
    page?: number,
    limit?: number
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {

    try {
        const { data } = await movieApi.get<MovieDBResponse>('/top_rated', {
            params: {
                page: page,
            }
        });

        const movies = data.results.map(MovieMapper.fromJSONResponseToMovieClass);

        return movies

    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }


}