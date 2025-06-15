import React from 'react';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'dark',
        showModal: false // Deafult theme is dark
    },
    reducers: {
        setTheme(state, action: PayloadAction<string>) {
            state.mode = action.payload;
        },
        showTipModal(state) {
            state.showModal = true;
        }
    }
});
export const { setTheme, showTipModal } = themeSlice.actions;
export default themeSlice.reducer;