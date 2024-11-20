import React from 'react';
import Link from "next/link";

const MenuNavigationComponent = () => {
    return (
        <div>
            <div className={'menu-container'}>
                <ul>
                    <li>
                        <Link href={'/movies'}>ALL MOVIES</Link>
                    </li>
                    <li>
                        <Link href={'/genres'}>GENRES</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuNavigationComponent;