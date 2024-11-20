import React, { FC } from 'react';
import Link from "next/link";
import {MovieData} from "@/app/(models)/MovieTypes";

const MovieCardComponent: FC<MovieData> = ({ results }) => {
    return (
        <div className={'movies-container'}>
            {results.map((movie) => (
                <Link
                    key={movie.id}
                    href={`/movies/${movie.id}`}
                >
                    <div className={'movie-box'}>
                        <img
                            className={'movie-poster'}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieCardComponent;