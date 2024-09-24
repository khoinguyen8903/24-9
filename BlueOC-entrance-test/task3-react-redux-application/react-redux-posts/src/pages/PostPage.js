import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsThunk, addPostThunk } from "../features/postThunk";
import PostPageUI from "../components/PostPageUI";
import AddPostFormUI from "../components/AddPostFormUI";

const PostPage = () => {
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts.posts);
    const postsStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPostsThunk());
        }
    }, [dispatch, postsStatus]);

    const handleAddPost = (formData) => {
        dispatch(addPostThunk(formData)).then((action) => {
            if (addPostThunk.fulfilled.match(action)) {
                alert('Add Post Successfully!');
            }
        });
    };

    return (
        <div>
            <h1>Post Page</h1>
            <AddPostFormUI onAddPost={handleAddPost} />
            {postsStatus === 'loading' && <p>Loading posts...</p>}
            {postsStatus === 'succeeded' && <PostPageUI posts={posts} />}
            {postsStatus === 'failed' && <p>Error: {error}</p>}
        </div>
    );
};

export default PostPage;
