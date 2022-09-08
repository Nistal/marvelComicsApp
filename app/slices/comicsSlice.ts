import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
        comicInfo: any
        showModal: boolean
    }

    const initialState: CounterState = {
        comicInfo: {},
        showModal: false
    }

    export const comicSlice = createSlice({
        name: 'comicInfo',
        initialState,
        reducers: {
        saveComic: (state, action) => {
            state.comicInfo = action.payload
        },
        modalState: (state) => {
            state.showModal = !state.showModal
        }
    },
})

export const { saveComic } = comicSlice.actions
export default comicSlice.reducer