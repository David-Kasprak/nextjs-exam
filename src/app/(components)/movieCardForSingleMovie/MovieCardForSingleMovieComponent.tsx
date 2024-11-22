import React, {FC} from 'react';
import {SingleMovieType} from "@/app/(models)/MovieTypes";

const MovieCardForSingleMovieComponent:FC<SingleMovieType> = ({movie}) => {
    return (
            <div className={'movie-info'}>
                <p><span>Overview:</span> {movie.overview}</p>
                <p><span>Original Language:</span> {movie.original_language}</p>
                <p><span>Release Date:</span> {movie.release_date}</p>
                <p><span>Rating:</span> {movie.vote_average}</p>
                <h3>Genres:</h3>
                <ul>
                    {movie.genres.map((genre, index) => (
                        <li key={index}>{genre.name}</li>
                    ))}
                </ul>
            </div>
    );
};

export default MovieCardForSingleMovieComponent;