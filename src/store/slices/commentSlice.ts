import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Status} from "../common/enums";
import {RootState} from "../index";

export interface commentItem {
    id: string
    postId: string
    text: string
    layoutDate: string
    avatar: string
    author: string
}

interface commentPayload {
    id: string,
    text: string,
    layoutDate: string,
    avatar: string,
    author: string
}

export const fetchComments = createAsyncThunk<commentItem[], string>(
    'comment/fetchComments',
    async (id) => {
        const response = await axios.get<commentItem[]>(`https://62ea46f9ad2954632588907e.mockapi.io/posts/${id}/comments`)
        return response.data
    }
)
export const addComment = createAsyncThunk<commentItem, commentPayload>(
    'auth/addComment',
    async ({id, text, layoutDate, avatar, author}, {dispatch}) => {
        const response = await axios.post<commentItem>(`https://62ea46f9ad2954632588907e.mockapi.io/posts/${id}/comments`, {
            text,
            layoutDate,
            avatar,
            author
        })
        dispatch(fetchComments(id))
        return response.data
    }
)
export const deleteComment = createAsyncThunk<commentItem, string>(
    'auth/addPost',
    async (id, {dispatch, getState}) => {
        await dispatch(fetchComments(id))
        const {comment} = getState() as { comment: { items: commentItem[] } }
        const filter = comment.items.filter((item) => item.postId === id)
        let response = null
        for (let i = 0; i <= filter.length - 1; i++) {
            response = await axios.delete(`https://62ea46f9ad2954632588907e.mockapi.io/posts/${id}/comments/${filter[i].id}`)
        }
        if (response) {
            return response.data
        }
    }
)



interface commentState {
    items: commentItem[]
    status: Status
}

const initialState: commentState = {
    items: [],
    status: Status.LOADING
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.items = []
            state.status = Status.LOADING
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
        })
        builder.addCase(fetchComments.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})


export const {} = commentSlice.actions

export const commentSelect = (state: RootState) => state.comment

export default commentSlice.reducer