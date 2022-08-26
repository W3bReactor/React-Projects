import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {Status} from "../common/enums";
import {RootState} from "../index";
import {postDate} from "../../components/Read";

export interface postItem {
    id: string
    title: string
    text: string
    layoutDate: string
    image?: string
}

export interface addPostItem {
    title: string
    text: string
    layoutDate: string
    image?: string
}

interface postState {
    items: postItem[]
    status: Status
    chart: number[]
    imageModal: boolean
    linkImage: string
    searchValue: string
}

interface fetchPostAsync {
    id?: string
    searchValue?: string
}

interface fetchPostMoreReturn {
    items: postItem[]
    count: number
}


export const fetchPosts = createAsyncThunk<(fetchPostMoreReturn | postItem), fetchPostAsync>(
    'auth/fetchPosts',
    async ({id, searchValue}) => {
        const {data} = await axios.get<fetchPostMoreReturn | postItem>(`https://62ea46f9ad2954632588907e.mockapi.io/posts${id ? `/${id}` : ''}${searchValue ? `?search=${searchValue}` : ''}`)
        return data
    }
)
export const addPost = createAsyncThunk<(fetchPostMoreReturn | postItem), addPostItem>(
    'auth/addPost',
    async ({title, text, layoutDate, image}, {dispatch}) => {
        const response = await axios.post(`https://62ea46f9ad2954632588907e.mockapi.io/posts`, {
            title,
            text,
            layoutDate,
            image
        })
        dispatch(fetchPosts({}))
        return response.data
    }
)
export const deletePost = createAsyncThunk<(fetchPostMoreReturn | postItem), string>(
    'auth/addPost',
    async (id, {dispatch}) => {
        const response = await axios.delete(`https://62ea46f9ad2954632588907e.mockapi.io/posts${id ? `/${id}` : ''}`)
        dispatch(fetchPosts({}))
        return response.data
    }
)

const initialState: postState = {
    items: [],
    status: Status.LOADING,
    chart: [],
    imageModal: false,
    linkImage: '',
    searchValue: ''
}

export const postSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setImageModal(state, action: PayloadAction<boolean>) {
            state.imageModal = action.payload
        },
        setLinkImage(state, action: PayloadAction<string>) {
            state.linkImage = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.items = []
            state.status = Status.LOADING
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            if ("items" in action.payload) {
                state.items = action.payload.items
            } else {
                state.items = [...state.items, action.payload]
            }
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})

export const postSelect = (state: RootState) => state.post
export const postItemSelect = (post: postDate) => (state: RootState) => state.post.items.find(item => item.id === post.id)
export const {setImageModal, setLinkImage, setSearchValue} = postSlice.actions

export default postSlice.reducer