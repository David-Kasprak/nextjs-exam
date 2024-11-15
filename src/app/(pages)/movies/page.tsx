// app/movies/page.tsx
import React from 'react';
import './movies-styles.css';

type Movie = {
    id: number;
    title: string;
    overview: string;
};

const MoviesPage = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTY2NTM4OC40NTM1ODQ3LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n0W00bdvMbhWdJ9OtoWXLcFM8nViAB4RHVy3zNbgtd8',
        },
    };

    // Делаем запрос к API
    const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        options
    );
    const data = await response.json();

    // Передаем полученные данные в компонент
    const movies: Movie[] = data.results || [];

    return (
        <div>
            <h1>Movies Page</h1>
            {movies.length === 0 ? (
                <p>No movies found</p>
            ) : (
                <div className={'movies-container'}>
                    {movies.map((movie) => (
                        <div className={'movie-box'} key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MoviesPage;
