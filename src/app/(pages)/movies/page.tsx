import React from 'react';
import './movies-styles.css';
import Pagination from "@/app/(components)/pagination/PaginationComponent";
import Link from "next/link";
import {options} from "@/app/(constants)/constants";
import {MovieData} from "@/app/(models)/MovieTypes";

const MoviesPage = async ({ searchParams }: { searchParams: { page?: string, query?: string } }) => {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const query = searchParams.query || '';

    const url = query
        ? `https://api.themoviedb.org/3/search/movie?query=${(query)}&page=${page}`
        : `https://api.themoviedb.org/3/discover/movie?page=${page}`;
    const response = await fetch(url, options);
    const data: MovieData = await response.json();
    const movies = data.results || [];
    const totalPages = data.total_pages || 1;

    return (
        <div>
            <h1>Movies Page</h1>
            <form action="/movies" method="get">
                <input
                    type="text"
                    name="query"
                    defaultValue={query}
                    placeholder="Search for movies"
                />
                <button type={'submit'}>Search</button>
            </form>
            {movies.length === 0 ? (
                <p>No movies found</p>
            ) : (
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
                </div>
            )}
            <div>
                <Pagination currentPage={page} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default MoviesPage;