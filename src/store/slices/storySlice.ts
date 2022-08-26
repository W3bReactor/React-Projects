import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";

interface storyState {
    showModal: boolean
    urlVideo: string
}

const initialState: storyState = {
    showModal: false,
    urlVideo: ''
}

export const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        hideModal(state) {
            state.showModal = false
        },
        showModal(state, action: PayloadAction<string>) {
            state.showModal = true
            state.urlVideo = action.payload
        },
    }
})

export const storySelect = (state: RootState) => state.story

export const {hideModal, showModal} = storySlice.actions

export default storySlice.reducer