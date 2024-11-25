// import React, { FC } from 'react';
// import Link from "next/link";
// import {MovieData} from "@/app/(models)/MovieTypes";
// import StarsRatingComponent from "@/app/(components)/starsRating/StarsRatingComponent";
// import MoviePosterComponent from "@/app/(components)/moviePoster/MoviePosterComponent";
// import MovieInfoComponent from "@/app/(components)/movieInfo/MovieInfoComponent";
// import GenreBadgeComponent from "@/app/(components)/genreBadge/GenreBadgeComponent";
//
// const MovieCardComponent: FC<MovieData> = ({ results }) => {
//     return (
//         <div className={'movies-container'}>
//             {results.map((movie) => (
//                 <Link
//                     key={movie.id}
//                     href={`/movies/${movie.id}`}
//                 >
//                     <div className={'movie-box'}>
//                         <MoviePosterComponent title={movie.title} poster_path={movie.poster_path}/>
//                         <MovieInfoComponent title={movie.title} overview={movie.overview}/>
//                         <StarsRatingComponent rating={movie.vote_average} maxRating={5}/>
//                         <GenreBadgeComponent genre_ids={movie.genre_ids}/>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// };
//
// export default MovieCardComponent;

import React, { FC } from 'react';
import Link from "next/link";
import { MovieData } from "@/app/(models)/MovieTypes";
import StarsRatingComponent from "@/app/(components)/starsRating/StarsRatingComponent";
import MoviePosterComponent from "@/app/(components)/moviePoster/MoviePosterComponent";
import MovieInfoComponent from "@/app/(components)/movieInfo/MovieInfoComponent";
import GenreBadgeComponent from "@/app/(components)/genreBadge/GenreBadgeComponent";

const MovieCardComponent: FC<MovieData> = ({ results }) => {
    return (
        <div className={'movies-container'}>
            {results.map((movie) => (
                <div key={movie.id} className={'movie-box'}>
                    <Link href={`/movies/${movie.id}`}>
                            <MoviePosterComponent title={movie.title} poster_path={movie.poster_path} />
                            <MovieInfoComponent title={movie.title} overview={movie.overview} />
                            <StarsRatingComponent rating={movie.vote_average} maxRating={5} />
                    </Link>
                    <GenreBadgeComponent genre_ids={movie.genre_ids} />
                </div>
            ))}
        </div>
    );
};

export default MovieCardComponent;
