import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slice/postsSlice";
import { userReducer } from "./slice/userSlice";
// import { chatsReducer } from "./slice/chatsSlice";
import { orderReducer } from "./slice/ordersSlice";
import { productsReducer } from "./slice/productsSlice";
import { commentsReducer } from "./slice/commentsSlice";
import { likeStatusReducer } from "./slice/likeStatusSlice";


const store = configureStore({
    reducer: {
        orders: orderReducer,
        posts: postsReducer,
        user: userReducer,
        products: productsReducer,
        comments: commentsReducer,
        likeStatus: likeStatusReducer
    }
})

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch