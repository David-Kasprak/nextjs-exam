import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'MovieLayout metadata'
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