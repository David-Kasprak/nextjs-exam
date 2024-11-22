import React, { FC } from 'react';
import {IGenresResponse} from "@/app/(models)/IGenres";
import Link from "next/link";

const GenreComponent: FC<IGenresResponse> = ({ genres }) => {
    return (
        <div className={'genres-container'}>
            {genres.map(({ id, name }) => (
                <Link className={'genre-box'} href={`/genres/${id}`}>
                <div key={id}>
                    <p>{name}</p>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default GenreComponent;