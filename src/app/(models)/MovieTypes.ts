export type MovieTypes = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number
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