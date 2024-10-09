import { createSlice } from "@reduxjs/toolkit";
import { Order, OrderDetail } from "../../../API";
import { addToCart, createNewOrder, fetchMyOrderInCart } from "../thunks/ordersThunk";

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        order: null as Order[] | null,
        orderDetail: null as OrderDetail[] | null,
        error: ""
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(createNewOrder.fulfilled, (state,action) => {
            state.order?.push(action.payload as Order)
        })
        builder.addCase(createNewOrder.rejected, (state,action) => {
            state.error = (action.error as Error).message
        })
        builder.addCase(fetchMyOrderInCart.fulfilled, (state,action) => {
            state.orderDetail = action.payload
        })
        builder.addCase(fetchMyOrderInCart.rejected, (state, action) => {
            state.error = (action.error as Error).message
        })
        builder.addCase(addToCart.fulfilled, (state, action) => {
            // Assuming addToCart returns an object with newOrder and orderDetail if successful
            const { newOrder, orderDetail } = action.payload;
            if (newOrder) {
                state.order = state.order ? [...state.order, newOrder] : [newOrder];
            }
            if (orderDetail) {
                state.orderDetail = state.orderDetail ? [...state.orderDetail, orderDetail] : [orderDetail];
            }
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            state.error = action.error.message || "Failed to add to cart";
        });

    }
})

export const orderReducer = ordersSlice.reducer;