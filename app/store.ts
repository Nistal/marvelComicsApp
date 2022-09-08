import { configureStore } from '@reduxjs/toolkit'
import dataComics from './slices/comicsSlice'

export const store = configureStore({
    reducer: {
        dataComic: dataComics
    },
})