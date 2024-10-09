import { createSlice } from "@reduxjs/toolkit";
import { OrderDetail } from "../../../API";
import { fetchMyOrderInCart } from "../thunks/ordersThunk";


const ordersDetailSlice = createSlice({
    name: "ordersDetail",
    initialState: {
        data: null as OrderDetail[] | null,
        error: ""
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchMyOrderInCart.fulfilled, (state,action) => {
            state.data = action.payload
        })
        builder.addCase(fetchMyOrderInCart.rejected, (state, action) => {
            state.error = (action.error as Error).message
        })
    }
})

export const ordersDetail = ordersDetailSlice.reducer;