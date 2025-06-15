import React from "react";
import Styles from "./top-navigation.module.css";
import ChangeThemeButton from '../changeTheme-component';


const TopNavigation = () => {
    return (
        <div className={Styles["navbar-row"]}>
            <nav className={Styles["nav-links"]}>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Experience</a>
                <a href="#">Dev Tip for the Day</a>
            </nav>

            <ChangeThemeButton />
        </div>
    );
};

export default TopNavigation;
