import React, {FC} from 'react';

type SearchComponentType = {
    query: string
}

const SearchComponent:FC<SearchComponentType> = ({query}) => {
    return (
        <div>
            <form action="/movies" method="get">
                <input
                    type="text"
                    name="query"
                    defaultValue={query}
                    placeholder="Search for movies"
                />
                <button type={'submit'}>Search</button>
            </form>
        </div>
    );
};

export default SearchComponent;