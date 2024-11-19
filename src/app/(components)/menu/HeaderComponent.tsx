import React from 'react';
import Link from "next/link";
import './header-styles.css';

const HeaderComponent = () => {
    return (
        <div className={'header-container'}>
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
            <div className={'menu-heading-container'}>
                <h2>Movie DB</h2>
            </div>
            <div className={'menu-user-icons-container'}>
                <p>User Name</p>
                <img src="/user-icon/login-icon.png" alt="User icon"/>
            </div>
        </div>
    );
};

export default HeaderComponent;