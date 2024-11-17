const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY5MTUyMDE4YzdlYzNlYzFiMzBkODM5ZGEzYWMzOCIsIm5iZiI6MTczMTc1MjMyMC43NDI4MzA4LCJzdWIiOiI2NzM2NjhkN2ExMDJkMjY5YzAzZjA3NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VVNRd2McVF9BKtesmqnX7tnUGpyh9ZnqWUdHq24TGFk'
    }
};

const getGenres = () => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(value => value.json())
};

export {
    getGenres,

};