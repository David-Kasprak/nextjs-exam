import React, {FC} from 'react';

type SearchComponentType = {
    query: string
}

const SearchComponent:FC<SearchComponentType> = ({query}) => {
    return (
        <div className={'search-container'}>
            <form action="/movies" method="get">
                <input className={'search-input'}
                    type="text"
                    name="query"
                    defaultValue={query}
                    placeholder="Search for movies"
                />
                <button className={'search-button'} type={'submit'}>Search</button>
            </form>
        </div>
    );
};

export default SearchComponent;