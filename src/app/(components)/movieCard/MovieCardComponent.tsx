import React, { FC } from 'react';
import Link from "next/link";
import {MovieData} from "@/app/(models)/MovieTypes";
import StarsRatingComponent from "@/app/(components)/starsRating/StarsRatingComponent";
import MoviePosterComponent from "@/app/(components)/moviePoster/MoviePosterComponent";
import MovieInfoComponent from "@/app/(components)/movieInfo/MovieInfoComponent";

const MovieCardComponent: FC<MovieData> = ({ results }) => {
    return (
        <div className={'movies-container'}>
            {results.map((movie) => (
                <Link
                    key={movie.id}
                    href={`/movies/${movie.id}`}
                >
                    <div className={'movie-box'}>
                        <MoviePosterComponent title={movie.title} poster_path={movie.poster_path}/>
                        <MovieInfoComponent title={movie.title} overview={movie.overview}/>
                        <StarsRatingComponent rating={movie.vote_average} maxRating={5}/>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieCardComponent;