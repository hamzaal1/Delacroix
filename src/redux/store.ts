'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/Slices/counterReducer';
import contentSlice from '@/redux/Slices/contentSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        content: contentSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;