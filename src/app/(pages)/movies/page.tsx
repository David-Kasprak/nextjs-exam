// app/movies/page.tsx
import React from 'react';

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
                <p>Фильмы не найдены.</p>
            ) : (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MoviesPage;
