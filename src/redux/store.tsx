import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import weather from './weather/slice'

export const store = configureStore({
    reducer: {
        weather
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();