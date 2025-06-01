import React from 'react';
import "./component.css";

const ChangeThemeButton = () => {

    return (
        <button className="change-theme-button" onClick={() => {
            console.log("capturing click");
        }}>
            Change Theme
        </button>
    )
};
export default ChangeThemeButton;