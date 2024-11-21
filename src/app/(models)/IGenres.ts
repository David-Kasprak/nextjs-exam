export interface IGenre {
    id: number;
    name: string;
}

export interface IGenresResponse {
    genres: IGenre[];
}

export interface IGenreBadgeProps {
    genreName: string;
}