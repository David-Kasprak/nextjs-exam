import React from 'react';
import './movies-styles.css';
import {options} from "@/app/(constants)/constants";
import {MovieData} from "@/app/(models)/MovieTypes";
import MovieCardComponent from "@/app/(components)/movieCard/MovieCardComponent";
import SearchComponent from "@/app/(components)/searchComponent/SearchComponent";
import PaginationComponent from "@/app/(components)/pagination/PaginationComponent";
import Link from "next/link";

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
        <div className={'movies-page'}>
            <Link href={'/movies'}>
            <h1>All Movies Page</h1>
            </Link>
            <SearchComponent query={query}/>
            <MovieCardComponent results={movies} total_pages={totalPages} page={page}/>
            <PaginationComponent currentPage={page} totalPages={totalPages}/>
        </div>
    );
};

export default MoviesPage;