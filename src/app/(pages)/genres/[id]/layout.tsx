import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GenreLayout metadata',
    description: 'All the movies of the genre here'
}

type Props = {children: React.ReactNode}

const GenreLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default GenreLayout;