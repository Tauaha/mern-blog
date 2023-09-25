import { createSlice } from "@reduxjs/toolkit";
import { createPost, getAllPosts, removePost, updatePost } from "./postOperations";

const initialState = {
    posts: [],
    popularPosts: [],
    loading: false,
}

const handelPending  = (state) => {
  state.loading = true
  
}
const handelFul = (state, action) => {
    state.loading = false
    state.posts.push(action.payload)
}

const handleRej = (state) => {
    state.loading = false
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createPost.pending, handelPending)
            .addCase(createPost.fulfilled, handelFul)
            .addCase(createPost.rejected, handleRej)
            .addCase(getAllPosts.pending, handelPending)
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload.posts
                state.popularPosts = action.payload.popularPosts
            })
            .addCase(getAllPosts.rejected, handleRej)
        .addCase(removePost.pending, handelPending)
            .addCase(removePost.fulfilled, (state, action) => {
                state.loading = false
                state.posts = state.posts.filter(post=> post.id!== action.payload._id)
            })
            .addCase(removePost.rejected, handleRej)
 .addCase(updatePost.pending, handelPending)
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false
                const index = state.posts.findIndex((post) => post._id === action.payload.id)
                state.posts[index]=action.payload
            })
            .addCase(updatePost.rejected, handleRej)
        
    }
})

export default postSlice.reducer