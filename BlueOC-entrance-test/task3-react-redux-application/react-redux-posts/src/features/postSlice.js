import { createSlice } from '@reduxjs/toolkit';
import { fetchPostsThunk, addPostThunk } from './postThunk';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetch posts
            .addCase(fetchPostsThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostsThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPostsThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch posts';
            })

            // Handle add post
            .addCase(addPostThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addPostThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts.unshift(action.payload);
            })
            .addCase(addPostThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to add post';
            });
    },
});

export default postSlice.reducer;
