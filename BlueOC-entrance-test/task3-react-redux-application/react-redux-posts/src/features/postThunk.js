import { createAsyncThunk } from '@reduxjs/toolkit';
import productService from "../services/postService";

export const fetchPostsThunk = createAsyncThunk(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const posts = await productService.getAllPosts();
            console.log('thunk')
            return posts;
        } catch (error) {
            console.error('Error fetching products:', error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const addPostThunk = createAsyncThunk(
    'posts/addPosts',
    async (formData, { rejectWithValue }) => {
        try {
            const posts = await productService.addPost(formData);
            return posts;
        } catch (error) {
            console.error('Error adding product:', error);
            return rejectWithValue(error.response.data);
        }
    }
);



