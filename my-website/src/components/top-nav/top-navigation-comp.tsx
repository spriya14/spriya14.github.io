import React, { useState } from "react";
import Styles from "./top-navigation.module.css";
import ChangeThemeButton from '../changeTheme-component';


const TopNavigation = () => {
    const [showModal, setShowModal] = useState(false);

    const tip = "💡 Tip: Use `useMemo` to memoize expensive computations in React.";
    return (
        <div className={Styles["navbar-row"]}>
            <nav className={Styles["nav-links"]}>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Experience</a>
                <a href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                    }}>Dev Tip for the Day</a>
            </nav>

            <ChangeThemeButton />
            

        </div>
    );
};

export default TopNavigation;
