import { movieApi } from "core/api/movie-api"
import { MovieDBResponse } from "infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {

    try {
        const { data } = await movieApi.get<MovieDBResponse>('/popular');

        const movies = data.results.map(MovieMapper.fromJSONResponseToMovieClass);

        return movies

    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }


}