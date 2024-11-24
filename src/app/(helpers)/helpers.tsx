import {allGenresArray} from "@/app/(constants)/constants";

const getGenreName = (genreId: number): string | undefined => {
    const genre = allGenresArray.find((g) => g.id === genreId);
    return genre?.name;
}

export {
    getGenreName
}