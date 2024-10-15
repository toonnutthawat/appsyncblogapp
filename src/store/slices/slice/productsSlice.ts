import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../../API";
import { addProduct, fetchProducts } from "../thunks/productsThunk";
import { decreaseProductStock } from "../thunks/ordersThunk";


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
        builder.addCase(decreaseProductStock.fulfilled, (state, action) => {
            if (!action.payload || !state.data) return;
            console.log("action.payload in decreaseProductStock", action.payload);
            const index = state.data.findIndex((product) => product.id === action.payload?.id);
            console.log("index: ",index);
            if (index !== -1) {
                console.log("decrease stock success");
                state.data[index].stock = action.payload.stock;
            }
            else{
                console.log('fail to decrease stock');
            }
        });
        
        builder.addCase(decreaseProductStock.rejected, (state,action) => {
            state.error = (action.error as Error).message
        })
    }
})

export const productsReducer = productsSlice.reducer;