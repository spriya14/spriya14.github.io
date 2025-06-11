import React from 'react';
import "./component.css";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/slice';

const ChangeThemeButton = () => {
    const theme = useSelector((state: any) => state.theme.mode);
    const dispatch = useDispatch();
    console.log(theme);

    const handleThemeToggle = () => {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
        console.log(`Theme changed to: ${theme === 'dark' ? 'light' : 'dark'}`);
        fetch("http://localhost:8080/log-theme-toggle", {
            method: "POST"
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            else {
                console.log("Theme toggle logged successfully");
            }
        }).
            catch((err) => {
                console.error("Failed to log theme toggle:", err);
            });
    };
    return (
        <button style={{ backgroundColor: theme === 'dark' ? '#D6A4E6' : '#0A192F', color: theme === 'light' ? '#D6A4E6' : '#0A192F' }} className="change-theme-button" onClick={handleThemeToggle}>
            Change Theme to {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
    )
};
export default ChangeThemeButton;