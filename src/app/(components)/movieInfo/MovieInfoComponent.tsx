import React, {FC} from 'react';
import {IMovieInfo} from "@/app/(models)/IMovieInfo";

const MovieInfoComponent:FC<IMovieInfo> = ({title, overview}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{overview}</p>
        {/*    Genre badge to be added here*/}
        </div>
    );
};

export default MovieInfoComponent;