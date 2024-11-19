import React from 'react';
import GenreComponent from "@/app/(components)/genre/GenreComponent";
import './genres-styles.css';
import {options} from "@/app/(constants)/constants";
import {GetServerSideProps} from "next";
import {getGenres} from "@/app/(services)/api.services";

// const getServerSideProps: GetServerSideProps = async () => {
//     const genreData = await getGenres(); // Получаем данные жанров
//     return {
//         props: {
//             genres: genreData.genres,
//         },
//     };
// };

const GenresPage = async () => {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(value => value.json());
    const genres = response.genres;

    return (
        <div>
            <h1>Genres</h1>
            <div>
                <GenreComponent genres={genres} />
            </div>
        </div>
    );
};

export default GenresPage;
