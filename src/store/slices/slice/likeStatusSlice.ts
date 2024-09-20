import type { LikeStatus } from "../../../API";
import { createSlice } from "@reduxjs/toolkit";
import { fetchLikeStatus, toggleLikeStatus } from "../thunks/likeStatusThunk";

const likeStatusSlice = createSlice({
  name: "likeStatus",
  initialState: {
    data: null as LikeStatus | null,
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLikeStatus.fulfilled, (state, action) => {
      if (action.payload) state.data = action.payload;
    });
    builder.addCase(fetchLikeStatus.rejected, (state) => {
      state.error = "fail to fetchLikeStatus";
    });
    builder.addCase(toggleLikeStatus.fulfilled, (state, action) => {
      if (state.data) {
        if (action.payload === false) { state.data.status = false; return;}
        if(action.payload)
        state.data.status = action.payload;
        console.log("toggleLike in Redux Success");
      }
    });
    builder.addCase(toggleLikeStatus.rejected, (state) => {
      state.error = "fail to toggleLikeStatus"
    })
  },
});

export const likeStatusReducer = likeStatusSlice.reducer;
