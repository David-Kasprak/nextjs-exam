// Интерфейс для отдельного жанра
export interface IGenre {
    id: number;
    name: string;
}

// Интерфейс для ответа от API
export interface IGenresResponse {
    genres: IGenre[];
}