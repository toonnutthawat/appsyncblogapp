import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { changeOrderStatus, decreaseProductStock, fetchMyOrderInCart } from "../../store/slices/thunks/ordersThunk";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { Order, Status } from "../../API";
import { useNavigate } from "react-router-dom";


function CartPage(){
    const dispatch = useAppDispatch()
    const ordersInCart = useAppSelector(state => state.orders.orderDetail)
    const order = ordersInCart?.find((order) => order.order)
    const orderId = ordersInCart?.find((order) =>  order.OrderID)?.OrderID
    const [total , setTotal] = useState(0);
    const confirmStatus : Status = Status.CONFIRM
    const navigate = useNavigate()

  

    useEffect(() => {
        dispatch(fetchMyOrderInCart())
        calTotalPrice()
    },[])

    function calTotalPrice() {
        if (!ordersInCart) return;
        let total = 0;
        for (let i = 0; i < ordersInCart.length; i++) {
            // Check if product and price are defined
            const price = ordersInCart[i].product?.price || 0; // Use 0 as default if price is undefined
            total += price * (ordersInCart[i].quantity || 0); // Multiply by quantity if defined
        }
        setTotal(total);
    }

    async function confirmOrder(order : Order | null | undefined){
        if(!orderId) return;
        dispatch(changeOrderStatus({orderId: orderId ,status : confirmStatus}))
        ordersInCart.forEach(orderDetail => {
            dispatch(decreaseProductStock(orderDetail))
        });
        navigate('/profile-page/orderDetail', {state: {order}})
    }


    const renderedOrderDetail = ordersInCart?.map((detail,index) => (
        <div key={index} className="border border-cyan-500 rounded flex items-center p-4 relative">
            <div className="p-5 flex flex-row items-center justify-center">
                <StorageImage path={detail.product?.image || ''} alt="img" style={{width: "200px", height: "200px", objectFit: "cover"}}></StorageImage>
                <div className="flex flex-col absolute text-right right-8" >
                    <div>{detail.product?.name}</div>
                    <div>B {detail.product?.price}</div>
                    <div>quantity : {detail.quantity}</div>
                </div>
            </div>
        </div>
    ))
    
    return(
        <div>
            <div className="space-y-4 p-8">{renderedOrderDetail}</div>
            <div className="absolute right-8 p-8 space-y-2">
                <div>total price : B {total}</div>
                <div>
                    { order?.order && (
                    <button 
                        className="bg-cyan-500 hover:bg-cyan-700 px-8 py-2 text-white rounded "
                        onClick={() => confirmOrder(order?.order)}
                        >Confirm Order</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CartPage;