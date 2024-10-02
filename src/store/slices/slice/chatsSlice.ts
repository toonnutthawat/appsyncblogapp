// import { createSlice } from "@reduxjs/toolkit";
// import type { Chat } from "../../../API";
// import { fetchChats , fetchMyChats , createMessage} from "../thunks/chatsThunk";


// const chatsSlice = createSlice({
//     name: "chats",
//     initialState: {
//         myChats: {
//             data: null as Chat[] | null,
//             error: ""
//         },
//         allChats: {
//             data: null as Chat[] | null,
//             error: ""
//         },
//         error: ""
//     },
//     extraReducers(builder) {
//         builder.addCase(fetchChats.fulfilled, (state,action) => {
//             state.allChats.data = action.payload.items
//         })
//         builder.addCase(fetchChats.rejected, (state) => {
//             state.allChats.error = "fail to fetch chats"
//         })
//         builder.addCase(fetchMyChats.fulfilled, (state,action) => {
//             state.myChats.data = action.payload.items
//         })
//         builder.addCase(fetchMyChats.rejected , (state) => {
//             state.myChats.error = "fail to fetcht myChats"
//         })
//         builder.addCase(createMessage.fulfilled, (state, action) => {
//             state.allChats.data?.push(action.payload)
//         })
//         builder.addCase(createMessage.rejected , (state) => {
//             state.error = "fail to createMessage"
//         })
//     }
//     ,reducers:{}

// })

// export const chatsReducer = chatsSlice.reducer;