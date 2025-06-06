import React from 'react';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'dark', // Deafult theme is dark
    },
    reducers: {
        setTheme(state, action: PayloadAction<string>) {
            state.mode = action.payload;
        }
    }
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;