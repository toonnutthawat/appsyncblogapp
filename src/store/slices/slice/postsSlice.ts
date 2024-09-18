import { createSlice } from "@reduxjs/toolkit"
import type { Post } from "../../../API"
import { fetchPosts , fetchMyPosts , removePost , editPost } from "../thunks/postsThunk"
import { updateLikesByPost } from "../thunks/likeStatusThunk"

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

        builder.addCase(updateLikesByPost.fulfilled, (state, action) => {
            const { postId, likesCount } = action.payload;
      
            // Update likes in allPosts
            if (state.allPosts.data) {
              const index = state.allPosts.data.findIndex((post) => post.id === postId);
              if (index !== -1) {
                state.allPosts.data[index].likes = likesCount; // Set the totalLikes for that post
                console.log("updated totalLikes");
              }
            }
      
            // Update likes in myPosts
            if (state.myPosts.data) {
              const index = state.myPosts.data.findIndex((post) => post.id === postId);
              if (index !== -1) {
                state.myPosts.data[index].likes = likesCount; // Set the totalLikes for that post
                console.log("updated totalLikes");
              }
            }
          });

        builder.addCase(editPost.fulfilled, (state, action) => {
            const updatedPost = action.payload;

            // Update in allPosts
            if (state.allPosts.data) {
              const index = state.allPosts.data.findIndex((post) => post.id === updatedPost.id);
              if (index !== -1) {
                state.allPosts.data[index] = updatedPost as Post;
                console.log("after updated : ", state.allPosts.data[index]);
              }
            }
      
            // Update in myPosts
            if (state.myPosts.data) {
              const index = state.myPosts.data.findIndex((post) => post.id === updatedPost.id);
              if (index !== -1) {
                state.myPosts.data[index] = updatedPost as Post;
              }
            }
        })
    
    },
    reducers: {

    }
})


export const postsReducer = postsSlice.reducer;