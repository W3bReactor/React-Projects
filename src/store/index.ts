import {configureStore} from "@reduxjs/toolkit";
import story from "./slices/storySlice";
import auth from "./slices/authSlice";
import post from "./slices/postSlice";
import comment from './slices/commentSlice'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {story, auth, post, comment}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector





