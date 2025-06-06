import React from 'react';
import "./component.css";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/slice';

const ChangeThemeButton = () => {
    const theme = useSelector((state: any) => state.theme.mode);
    const dispatch = useDispatch();
    console.log(theme);
    return (
        <button style={{ backgroundColor: theme === 'dark' ? '#D6A4E6' : '#0A192F', color:theme === 'light' ? '#D6A4E6' : '#0A192F' }} className="change-theme-button" onClick={() => {
            dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
            console.log(`Theme changed to: ${theme === 'dark' ? 'light' : 'dark'}`);
        }}>
            Change Theme to {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
    )
};
export default ChangeThemeButton;