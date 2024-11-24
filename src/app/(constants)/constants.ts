// --------------Auth
import {IGenre} from "@/app/(models)/IGenres";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTc1MjMyMC43NDI4MzA4LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VVNRd2McVF9BKtesmqnX7tnUGpyh9ZnqWUdHq24TGFk', // Замените на ваш ключ
    },
};
// -------------- Genres array
const allGenresArray: IGenre[] = [
    {"id": 28, "name": "Action"},
    {"id": 12, "name": "Adventure"},
    {"id": 16, "name": "Animation"},
    {"id": 35, "name": "Comedy"},
    {"id": 80, "name": "Crime"},
    {"id": 99, "name": "Documentary"},
    {"id": 18, "name": "Drama"},
    {"id": 10751, "name": "Family"},
    {"id": 14, "name": "Fantasy"},
    {"id": 36, "name": "History"},
    {"id": 27, "name": "Horror"},
    {"id": 10402, "name": "Music"},
    {"id": 9648, "name": "Mystery"},
    {"id": 10749, "name": "Romance"},
    {"id": 878, "name": "Science Fiction"},
    {"id": 10770, "name": "TV Movie"},
    {"id": 53, "name": "Thriller"},
    {"id": 10752, "name": "War"},
    {"id": 37, "name": "Western"}
]

export {
    options,
    allGenresArray
}