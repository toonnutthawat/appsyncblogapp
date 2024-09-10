import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slice/postsSlice";
import { userReducer } from "./slice/userSlice";
import { chatsReducer } from "./slice/chatsSlice";
import { commentsReducer } from "./slice/commentsSlice";


const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
        chats: chatsReducer,
        comments: commentsReducer
    }
})

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch