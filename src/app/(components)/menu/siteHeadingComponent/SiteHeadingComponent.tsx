import React from 'react';
import Link from "next/link";

const SiteHeadingComponent = () => {
    return (
        <div>
            <div className={'menu-heading-container'}>
                <Link href={'/movies'}>
                <h2>Movie DB</h2>
                </Link>
            </div>
        </div>
    );
};

export default SiteHeadingComponent;