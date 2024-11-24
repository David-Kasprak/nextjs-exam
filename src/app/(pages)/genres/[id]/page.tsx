import React from 'react';
import {options} from "@/app/(constants)/constants";
import {MovieData} from "@/app/(models)/MovieTypes";
import PaginationForGenreComponent from "@/app/(components)/paginationForGenre/PaginationForGenreComponent";
import {IGenre} from "@/app/(models)/IGenres";
import MovieCardComponent from "@/app/(components)/movieCard/MovieCardComponent";
import './genre-styles.css';

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
    const genreName = genreData.genres.find((genre: IGenre) => genre.id === parseInt(genreId))?.name;

    return (
        <div className={'genre-page'}>
            <h1>Movies in Genre: <i>{genreName}</i></h1>
            <MovieCardComponent results={movies} total_pages={totalPages} page={page}/>
            <PaginationForGenreComponent currentPage={page} totalPages={totalPages} genreId={genreId}/>
        </div>
    );
};

export default GenrePage;