import { createSlice } from "@reduxjs/toolkit";
import { Order, OrderDetail } from "../../../API";
import { addToCart, changeOrderStatus, createNewOrder, fetchMyConfirmOrderDetails, fetchMyConfirmOrders, fetchMyOrderInCart } from "../thunks/ordersThunk";

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        order: null as Order[] | null,
        myOrders: null as Order[] | null,
        myOrderDetail: null as OrderDetail[] | null,
        orderDetail: null as OrderDetail[] | null,
        error: ""
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(createNewOrder.fulfilled, (state, action) => {
            // Adds the newly created order to the order list
            if (state.order) {
                state.order.push(action.payload as Order);
            } else {
                state.order = [action.payload as Order];
            }
        });
        builder.addCase(createNewOrder.rejected, (state, action) => {
            state.error = (action.error as Error).message;
        });
        builder.addCase(fetchMyOrderInCart.fulfilled, (state, action) => {
            // Replaces the order details with the fetched details
            state.orderDetail = action.payload as OrderDetail[];
        });
        builder.addCase(fetchMyOrderInCart.rejected, (state, action) => {
            state.error = (action.error as Error).message;
        });
        builder.addCase(fetchMyConfirmOrders.fulfilled, (state,action) => {
            state.myOrders = action.payload
        })
        builder.addCase(fetchMyConfirmOrders.rejected, (state,action) => {
            state.error = (action.error as Error).message
        })
        builder.addCase(fetchMyConfirmOrderDetails.fulfilled, (state,action) => {
            state.myOrderDetail = action.payload
        })
        builder.addCase(fetchMyConfirmOrderDetails.rejected, (state,action) => {
            state.error = (action.error as Error).message
        })
        builder.addCase(addToCart.fulfilled, (state, action) => {
            if(action.payload?.newOrder === undefined || action.payload.orderDetail) return;
            const { newOrder, orderDetail } : {newOrder : Order , orderDetail : OrderDetail} = action.payload;
        
            // Add the new order if present
            if (newOrder && state.order) {
                state.order.push(newOrder);
            }
        
            // Add or update order details
            if (orderDetail) {
                if (state.orderDetail) {
                    state.orderDetail.push(orderDetail);
                } else {
                    state.orderDetail = [orderDetail];
                }
            }
        });
        
        builder.addCase(addToCart.rejected, (state, action) => {
            state.error = action.error.message || "Failed to add to cart";
        });
        builder.addCase(changeOrderStatus.fulfilled, (state,action) => {
            const index = state.order?.findIndex((order) => order.id === action.payload.id)
            if(!state.order) return;
            if(index)  {
            state.order[index].status = action.payload.status
        }
        })
        builder.addCase(changeOrderStatus.rejected, (state,action) => {
            state.error = (action.error as Error).message 
        })
    }
});

export const orderReducer = ordersSlice.reducer;
