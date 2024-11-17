// // app/movies/page.tsx
// import React from 'react';
// import './movies-styles.css';
//
// type Movie = {
//     id: number;
//     title: string;
//     overview: string;
//     poster_path: string;
// };
//
// const MoviesPage = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTY2NTM4OC40NTM1ODQ3LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n0W00bdvMbhWdJ9OtoWXLcFM8nViAB4RHVy3zNbgtd8',
//         },
//     };
//
//     // Делаем запрос к API
//     const response = await fetch(
//         'https://api.themoviedb.org/3/discover/movie',
//         options
//     );
//     const data = await response.json();
//
//     // Передаем полученные данные в компонент
//     const movies: Movie[] = data.results || [];
//
//     return (
//         <div>
//             <h1>Movies Page</h1>
//             {movies.length === 0 ? (
//                 <p>No movies found</p>
//             ) : (
//                 <div className={'movies-container'}>
//                     {movies.map((movie) => (
//                         <div className={'movie-box'} key={movie.id}>
//                             <img className={'movie-poster'} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
//                             <h2>{movie.title}</h2>
//                             <p>{movie.overview}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default MoviesPage;

// app/movies/page.tsx
import React from 'react';
import './movies-styles.css';
import Pagination from "@/app/(components)/pagination/PaginationComponent";
import Link from "next/link";

type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
};

type MovieData = {
    results: Movie[];
    total_pages: number;
    page: number;
};

type MoviesPageProps = {
    movies: Movie[];
    totalPages: number;
    currentPage: number;
};

const MoviesPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTc1MjMyMC43NDI4MzA4LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VVNRd2McVF9BKtesmqnX7tnUGpyh9ZnqWUdHq24TGFk', // Замените на ваш ключ
        },
    };

    // Делаем запрос к API с пагинацией
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${page}`,
        options
    );
    const data: MovieData = await response.json();
    const movies = data.results || [];
    const totalPages = data.total_pages || 1;

    return (
        <div>
            <h1>Movies Page</h1>
            {movies.length === 0 ? (
                <p>No movies found</p>
            ) : (
                <div className={'movies-container'}>
                    {movies.map((movie) => (
                        <div className={'movie-box'} key={movie.id}>
                            <img
                                className={'movie-poster'}
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <Link href={`/movies/${movie.id}`}>More details</Link>
                        </div>
                    ))}
                </div>
            )}
            <div>
                <Pagination currentPage={page} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default MoviesPage;
