import React, { FC } from 'react';
import {IGenresResponse} from "@/app/(models)/IGenres";
import Link from "next/link";

const GenreComponent: FC<IGenresResponse> = ({ genres }) => {
    return (
        <div className={'genres-container'}>
            {genres.map(({ id, name }) => (
                <div className={'genre-box'} key={id}>
                    <Link href={`/genres/${id}`}>
                        <p>{name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GenreComponent;