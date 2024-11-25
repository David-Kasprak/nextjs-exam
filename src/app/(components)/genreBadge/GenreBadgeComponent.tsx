import './genreBadge-styles.css';
import {IGenreBadge} from "@/app/(models)/IGenres";
import {getGenreName} from "@/app/(helpers)/helpers";
import React, {FC} from 'react';
import Link from "next/link";

const GenreBadgeComponent: FC<IGenreBadge> = ({genre_ids}) => {
    return (
        <div>
            {genre_ids.map((genreId) => (
                <Link key={genreId} href={`/genres/${genreId}`}>
                <span className={'genre-badge'} key={genreId}>
                    {getGenreName(genreId)}
                </span>
                </Link>
            ))}
        </div>
    );
};

export default GenreBadgeComponent;
