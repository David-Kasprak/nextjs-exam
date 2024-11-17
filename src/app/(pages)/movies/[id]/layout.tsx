import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'MovieLayout metadata',
    description: 'All the details about the movie here'
}

type Props = {children: React.ReactNode}

const MovieLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default MovieLayout;