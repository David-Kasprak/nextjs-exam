import React, {FC} from 'react';
import {IMoviePoster} from "@/app/(models)/IMoviePoster";

const MoviePosterComponent:FC<IMoviePoster> = ({poster_path, title}) => {
    return (
        <div className={'movie-image-container'}>
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
            />
        </div>
    );
};

export default MoviePosterComponent;