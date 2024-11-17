// import React from 'react';
//
// const MoviePage = () => {
//     return (
//         <div>
//             MoviePage
//         </div>
//     );
// };
//
// export default MoviePage;

// app/movies/[id]/page.tsx

import React from 'react';
import './movie-styles.css';

type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genres: { name: string }[];
    original_language: string
};

type MoviePageProps = {
    movie: Movie;
};

type Params = {
    id: string
}

const MoviePage = async ({params}: {params: Params}) => {
    const movieId = params.id;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTc1MjMyMC43NDI4MzA4LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VVNRd2McVF9BKtesmqnX7tnUGpyh9ZnqWUdHq24TGFk', // замените на ваш ключ
        },
    };

    // Делаем запрос к API для получения данных по фильму
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        options
    );

    const movie: Movie = await response.json();

    return (
        <div className="movie-page">
            <h1>{movie.title}</h1>
            <div className={'movie-container'}>
                <div className={'movie-info'}>
                    <p><span>Overview:</span> {movie.overview}</p>
                    <p><span>Original Language:</span> {movie.original_language}</p>
                    <p><span>Release Date:</span> {movie.release_date}</p>
                    <p><span>Rating:</span> {movie.vote_average}</p>
                    <h3>Genres:</h3>
                    <ul>
                        {movie.genres.map((genre, index) => (
                            <li key={index}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
                <div className={'movie-image-container'}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-poster"
                    />
                </div>
            </div>
        </div>
    );
};

export default MoviePage;