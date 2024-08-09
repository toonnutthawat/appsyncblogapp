import { createSlice } from "@reduxjs/toolkit"
import type { Post } from "../../../API"
import { fetchPosts , fetchMyPosts , removePost } from "../thunks/postsThunk"

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        myPosts: {
            data: null as Post[] | null,
            error: ""
        },
        allPosts: {
            data: null as Post[] | null,
            error: ""
        },
        error: ""
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled , (state , action) => {
            state.allPosts.data = action.payload.items 
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.allPosts.error = "fail to fetchPosts"
        })
        builder.addCase(fetchMyPosts.fulfilled, (state, action) => {
            state.myPosts.data = action.payload.items
        })
        builder.addCase(fetchMyPosts.rejected, (state) => {
            state.myPosts.error = "fail to fetchMyPosts"
        })
        builder.addCase(removePost.fulfilled, (state , action) => {
            if(!state.myPosts.data) return;
            state.myPosts.data = state.myPosts.data?.filter((post) => {
                return post.id !== action.payload.data.deletePost.id
            })
        })
    },
    reducers: {

    }
})


export const postsReducer = postsSlice.reducer;