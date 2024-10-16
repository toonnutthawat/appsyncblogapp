import { useEffect } from 'react'
import { Order } from '../../API'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchMyConfirmOrderDetails } from '../../store/slices/thunks/ordersThunk'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import Moment from "moment"

function MyPurchaseOrderDetail() {
    const location = useLocation()
    const order: Order = location.state.order
    const dispatch = useAppDispatch()
    const myConfirmOrderDetails = useAppSelector(state => state.orders.myOrderDetail)

    useEffect(() => {
        dispatch(fetchMyConfirmOrderDetails(order.id))
    }, [])

    const renderedOrderDetail = myConfirmOrderDetails?.map((detail, index) => (
        <div key={index} className="bg-white border-white rounded flex items-center p-4 relative">
            <div className="p-5 flex flex-row items-center justify-center text-cyan-800">
                <StorageImage path={detail.product?.image || ''} alt="img" style={{ width: "200px", height: "200px", objectFit: "cover" }}></StorageImage>
                <div className="flex flex-col absolute text-right right-8" >
                    <div>{detail.product?.name}</div>
                    <div>B {detail.product?.price}</div>
                    <div>quantity : {detail.quantity}</div>
                </div>
            </div>
        </div>
    ))


    return (
        <div className='space-y-4 px-20'>
            <div className='bg-cyan-500 mt-8 rounded p-8 text-white space-y-4'>
                <div>ทำรายการเมื่อ : {Moment(order.createdAt).format("DD / MM / YYYY, hh:mm:ss a")}</div>
                <div>สถานะ : {order.status}</div>
                <div>ที่อยู่ในการจัดส่ง : {order.address}</div>
                {renderedOrderDetail}
            </div>
        </div>
    )
}

export default MyPurchaseOrderDetail
