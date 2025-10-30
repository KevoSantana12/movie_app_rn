import { Movie } from "infrastructure/interfaces/movie.interface";
import { Result } from "infrastructure/interfaces/moviedb-responses";


export class MovieMapper {
    static fromJSONResponseToMovieClass = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average
        };
    };
}