import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../../API";
import { addProduct, fetchProducts } from "../thunks/productsThunk";


const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: null as Product[] | null,
        error: ""
    },
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled , (state,action) => {
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.error = "fail to fetchProducts"
            console.log("fail to fetchProducts");
        })
        builder.addCase(addProduct.fulfilled, (state,action) => {
            state.data?.push(action.payload as Product)
        })
        builder.addCase(addProduct.rejected, (state,action) => {
            state.error = action.error.message as string
            console.log("fail to addProduct");
        })
    }
})

export const productsReducer = productsSlice.reducer;