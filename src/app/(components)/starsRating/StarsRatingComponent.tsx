import React from 'react';
import {IRating} from "@/app/(models)/IRating";
import './starsRating-styles.css';

const StarsRatingComponent: React.FC<IRating> = ({ rating, maxRating }) => {
    const filledStars = (Math.round(rating)) / 2;
    const totalStars = maxRating;

    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        if (i <= filledStars) {
            stars.push(<span key={i} className="star filled">★</span>);
        } else {
            stars.push(<span key={i} className="star">☆</span>);
        }
    }

    return (
        <div className="rating-stars">
            {stars}
        </div>
    );
};

export default StarsRatingComponent;