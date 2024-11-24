export type MovieTypes = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number
    genre_ids: number[]
}

export type MovieData = {
    results: MovieTypes[];
    total_pages: number;
    page: number;
};

export type MoviesPageProps = {
    movies: MovieTypes[];
    totalPages: number;
    currentPage: number;
};

export type MovieTypeForSingleMovie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genres: { name: string }[];
    original_language: string
};

export type SingleMovieType = {
    movie: MovieTypeForSingleMovie
}