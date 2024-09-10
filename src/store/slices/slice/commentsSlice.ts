import { createSlice } from "@reduxjs/toolkit";
import type { Comment } from "../../../API";
import { fetchComments , addComment } from "../thunks/commentsThunk";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        data: null as Comment[] | null,
        error: ""
    },
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchComments.fulfilled , (state,action) => {
            state.data = action.payload
        })
        builder.addCase(fetchComments.rejected, (state) => {
            state.error = "fail to fetch Comments"
        })
        builder.addCase(addComment.fulfilled, (state,action) => {
            state.data?.push(action.payload)
        })
        builder.addCase(addComment.rejected, (state) => {
            state.error = "fail to create Comment"
        })
    }
})

export const commentsReducer = commentsSlice.reducer;