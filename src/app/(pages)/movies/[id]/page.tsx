import React from 'react';
import './movie-styles.css';
import {MovieTypeForSingleMovie} from "@/app/(models)/MovieTypes";
import {options} from "@/app/(constants)/constants";
import MovieCardForSingleMovieComponent
    from "@/app/(components)/movieCardForSingleMovie/MovieCardForSingleMovieComponent";
import MoviePosterForSingleMovieComponent
    from "@/app/(components)/moviePosterForSingleMovie/MoviePosterForSingleMovieComponent";

type Params = {
    id: string
}

const MoviePage = async ({params}: {params: Params}) => {
    const movieId = params.id;

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        options
    );

    const movie: MovieTypeForSingleMovie = await response.json();

    return (
        <div className="movie-page">
            <h1>{movie.title}</h1>
            <div className={'movie-container'}>
                <MovieCardForSingleMovieComponent movie={movie}/>
                <MoviePosterForSingleMovieComponent title={movie.title} poster_path={movie.poster_path}/>
            </div>
        </div>
    );
};

export default MoviePage;