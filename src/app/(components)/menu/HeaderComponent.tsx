import React from 'react';
import './header-styles.css';
import UserInfoComponent from "@/app/(components)/menu/userInfoComponent/UserInfoComponent";
import MenuNavigationComponent from "@/app/(components)/menu/menuNavigationComponent/MenuNavigationComponent";
import SiteHeadingComponent from "@/app/(components)/menu/siteHeadingComponent/SiteHeadingComponent";

const HeaderComponent = () => {
    return (
        <div className={'header-container'}>
            <MenuNavigationComponent/>
            <SiteHeadingComponent/>
            <UserInfoComponent/>
        </div>
    );
};

export default HeaderComponent;