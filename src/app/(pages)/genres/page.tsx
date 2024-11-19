// import React from 'react';
// import GenreComponent from "@/app/(components)/genre/GenreComponent";
//
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTc1MjMyMC43NDI4MzA4LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VVNRd2McVF9BKtesmqnX7tnUGpyh9ZnqWUdHq24TGFk'
//     }
// };
//
// const GenresPage = async () => {
//     const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//         .then(value => value.json());
//     const data = await response.json();
//     const genres = data.genres;
//     return (
//         <div>
//             GenresPage
//             <GenreComponent genres={genres}/>
//         </div>
//     );
// };
//
// export default GenresPage;

import React from 'react';
import GenreComponent from "@/app/(components)/genre/GenreComponent";
import './genres-styles.css';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTc1MjMyMC43NDI4MzA4LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VVNRd2McVF9BKtesmqnX7tnUGpyh9ZnqWUdHq24TGFk'
    }
};

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
