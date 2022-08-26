import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../index";

interface authState {
    isAuth: boolean
}

const initialState: authState = {
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

export const {} = authSlice.actions

export const authSelect = (state: RootState) => state.auth

export default authSlice.reducer