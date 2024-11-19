import React from 'react';
import {options} from "@/app/(constants)/constants";
import {MovieData} from "@/app/(models)/MovieTypes";
import Link from "next/link";
import PaginationForGenreComponent from "@/app/(components)/paginationForGenre/PaginationForGenreComponent";
import {IGenre} from "@/app/(models)/IGenres";

const GenrePage = async ({params, searchParams}:{params:{id:string}, searchParams: {page?: string}}) => {
    const genreId = params.id;
    const page = searchParams.page? parseInt(searchParams.page) : 1;
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`,
        options);
    const data: MovieData = await response.json();
    const movies = data.results || [];
    const totalPages = data.total_pages || 1;

    const genreResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options);
    const genreData = await genreResponse.json();
    const genreName = genreData.genres.find((genre: IGenre) => genre.id === parseInt(genreId))?.name || "Unknown Genre";

    return (
        <div>
            <h1>Movies in Genre: {genreName}</h1>
                <div className={'movies-container'}>
                    {movies.map((movie) => (
                        <Link
                            key={movie.id}
                            href={`/movies/${movie.id}`}
                        >
                            <div className={'movie-box'}>
                                <img
                                    className={'movie-poster'}
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                            </div>
                        </Link>
                    ))}
                </div>)
            <PaginationForGenreComponent currentPage={page} totalPages={totalPages} genreId={genreId}/>
        </div>
    );
};

export default GenrePage;