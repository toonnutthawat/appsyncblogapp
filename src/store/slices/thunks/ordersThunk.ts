import { Product } from './../../../API';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { createOrder, createOrderDetail } from "../../../graphql/mutations";
import { Status } from "../../../API";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { listOrderDetails, listOrders } from "../../../graphql/queries";

const client = generateClient()
const orderStatus: Status = Status.ORDER

const createNewOrder = createAsyncThunk("addOrder", async () => {
    const user = await getCurrentUser()
    const responseAttributes = await fetchUserAttributes()
    if(!responseAttributes.address || !responseAttributes.phone_number) return;
    const response = await client.graphql({
        query: createOrder,
        variables: {
            input: {
                status: orderStatus,
                client: user.username,
                address: responseAttributes.address,
                phone: responseAttributes.phone_number
            }
        }
    })

    return response.data.createOrder
})

const fetchMyOrderInCart = createAsyncThunk("fetchMyOrderInCart", async (orderId : string) => {
    const response = await client.graphql({
        query: listOrderDetails,
        variables: {
            filter: {
                OrderID: {
                    eq: orderId
                }
            }
        }
    })

    return response.data.listOrderDetails.items
})


const addToCart = createAsyncThunk("addToCart", async (product : Product) => {
    const user = await getCurrentUser()
    const cartList = await client.graphql({
        query: listOrders,
        variables: {
            filter: {
                client: {
                    eq: user.username
                },
                status: {
                    eq: orderStatus
                }
            }
        }

    })

    try{
    if(!cartList.data.listOrders.items){
        const responseAttributes = await fetchUserAttributes()
        if(!responseAttributes.address || !responseAttributes.phone_number) return;
        const newOrder = await client.graphql({
            query: createOrder,
            variables: {
                input: {
                    status: orderStatus,
                    client: user.username,
                    address: responseAttributes.address,
                    phone: responseAttributes.phone_number
                }
            }
        })
        const orderDetail = await client.graphql({
            query: createOrderDetail,
            variables: {
                input: {
                    id: newOrder.data.createOrder.id + ":" + product.id,
                    quantity: 1,
                    OrderID: newOrder.data.createOrder.id,
                    ProductID: product.id
                }
            }
        })

        return { newOrder: newOrder.data.createOrder , orderDetail: orderDetail.data.createOrderDetail }
    }
    else{
        const orderID = cartList.data.listOrders.items.find((order) => {return order.id})
        if(!orderID) return;
        const orderDetail = await client.graphql({
            query: createOrderDetail,
            variables: {
                input: {
                    id: orderID?.id + ":" + product.id,
                    quantity: 1,
                    OrderID: orderID?.id,
                    ProductID: product.id
                }
            }
        })
        return orderDetail.data.createOrderDetail
    }
    }
    catch(error){
        console.log((error as Error).message);
    }
})

export { createNewOrder , addToCart , fetchMyOrderInCart}