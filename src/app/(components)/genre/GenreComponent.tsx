import React, { FC } from 'react';
import {IGenresResponse} from "@/app/(models)/IGenres";

const GenreComponent: FC<IGenresResponse> = ({ genres }) => {
    // if (!Array.isArray(genres)) {
    //     return <p>Genres data is not an array or is undefined</p>;
    // }

    return (
        <div className={'genres-container'}>
            {genres.map(({ id, name }) => (
                <div className={'genre-box'} key={id}>
                    <p>{name}</p>
                </div>
            ))}
        </div>
    );
};

export default GenreComponent;