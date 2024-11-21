import React, { FC } from 'react';
import './genreBadge-styles.css';
import {IGenreBadgeProps} from "@/app/(models)/IGenres";

const GenreBadgeComponent: FC<IGenreBadgeProps> = ({ genreName }) => {
    return (
        <span className="genre-badge">
            {genreName}
        </span>
    );
};

export default GenreBadgeComponent;
