import  { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchMyConfirmOrders } from '../../store/slices/thunks/ordersThunk'
import { Order } from '../../API'
import { useNavigate } from 'react-router-dom'

function MyPurchase(){
    const dispatch = useAppDispatch()
    const myConfirmOrders = useAppSelector(state => state.orders.myOrders)
    const navigate = useNavigate()
    console.log("myConfirmOrders : ", myConfirmOrders);

    useEffect(() => {
        dispatch(fetchMyConfirmOrders())
        console.log("fetchMyConfirmOrders");
    },[])

    const toMyPurchaseOrderDetail = (order : Order) => {
        navigate('/profile-page/orderDetail', {state: {order}})
    }

    const renderedMyConfirmOrders = myConfirmOrders?.map((order,index) => (
        <div key={index} className='border border-white p-4 rounded-2xl bg-white cursor-pointer' onClick={() => toMyPurchaseOrderDetail(order)}>
            <div className='text-cyan-800'>
                <div>order ID :</div>
                <div>{order.id}</div>
            </div>
        </div>
    ))

    return(
        <div className='bg-white min-h-screen px-20 flex justify-center'>
            <div className='bg-cyan-500 rounded p-8 mt-8 space-y-4 overflow-scroll' style={{height: "48rem", width: "28rem"}}>
                <div className='text-4xl py-4 text-white font-bold drop-shadow-lg'>
                    My Purchase
                </div>
            { renderedMyConfirmOrders }
            </div>
        </div>

    )
}
export default MyPurchase
