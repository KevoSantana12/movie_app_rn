import { movieApi } from "core/api/movie-api"
import { MovieDBResponse } from "infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {

    try {
        const { data } = await movieApi.get<MovieDBResponse>('/now_playing');

        const movies = data.results.map(MovieMapper.fromJSONResponseToMovieClass);

        console.log(movies)

    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }


}