import { OrderDetail, Product, Status } from './../../../API';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { createOrder, createOrderDetail, updateOrder, updateProduct } from "../../../graphql/mutations";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { getProduct, listOrderDetails, listOrders } from "../../../graphql/queries";

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

const changeOrderStatus = createAsyncThunk("changeOrderStatus", async ({orderId , status } : { orderId : string , status : Status}) => {
    const response = await client.graphql({
        query: updateOrder,
        variables: {
            input: {
                id: orderId,
                status: status
            }
        }
    })

    return response.data.updateOrder
})

const decreaseProductStock = createAsyncThunk("decreaseProductStock", async (ordersDetail : OrderDetail) => {
    console.log("orderDetail to decrease stock :", ordersDetail);
    try{
    const product = await client.graphql({
        query: getProduct,
        variables: {
            id: ordersDetail.ProductID
        }
    })
    console.log("product to decrease stock :", product.data.getProduct);
    if(!product.data.getProduct?.stock) return;
    const response = await client.graphql({
        query: updateProduct,
        variables: {
            input: {
                id: ordersDetail.ProductID,
                stock: product.data.getProduct?.stock - 1
            }
        }
    })
    return response.data.updateProduct
    }
    catch(error){
        console.log((error as Error).message);
    }
})

const fetchMyOrderInCart = createAsyncThunk("fetchMyOrderInCart", async () => {
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
    if(cartList.data.listOrders.items.length !== 0){
    const orderID = cartList.data.listOrders.items.find((order) => {return order.id})
    const response = await client.graphql({
        query: listOrderDetails,
        variables: {
            filter: {
                OrderID: {
                    eq: orderID?.id
                },
                owner: {
                    eq: user.userId + "::" + user.username
                }

            }
        }
    })
    console.log("fetchMyOrderInCart Success");
     return response.data.listOrderDetails.items 
  }

    
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
    console.log("cartList :", cartList);
    
    try{
    //there's no currentOrder
    if(cartList.data.listOrders.items.length === 0){
        console.log("Inside IF");
        
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
        console.log("newOrder",newOrder);
        console.log("orderDetail", orderDetail);
        
        
        return { newOrder: newOrder.data.createOrder , orderDetail: orderDetail.data.createOrderDetail }
    }
    //there's currentOrder already
    else{
        console.log("Inside ELSE");
        
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
        console.log("orderDetail", orderDetail);
        return { newOrder: undefined, orderDetail: orderDetail.data.createOrderDetail }; // Ensure consistent structure
    }
    }
    catch(error){
        console.log((error as Error).message);
        return { newOrder: undefined, orderDetail: undefined }; // Ensur
    }
})

export { createNewOrder , addToCart , fetchMyOrderInCart , changeOrderStatus , decreaseProductStock}