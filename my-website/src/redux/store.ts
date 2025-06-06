import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;
