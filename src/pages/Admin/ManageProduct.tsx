import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect } from "react";
import { badCredit, fetchUncheckedCreditProducts, goodCredit } from "../../store/slices/thunks/productsThunk";
import Moment from "moment"
import { Product } from "../../API";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";

function ManageProduct(){
    const uncheckedCreditProducts = useAppSelector(state => state.products.data)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchUncheckedCreditProducts())
        console.log("fetchUncheckCreditProducts");
    },[])

    const giveGoodCredit = (product : Product) => {
        dispatch(goodCredit(product))
        navigate('/shop')
    }

    const giveBadCredit = (product : Product) => {
        dispatch(badCredit(product))
        dispatch(fetchUncheckedCreditProducts())
    }

    const renderedProduct = uncheckedCreditProducts?.map((product,index) => (
        <div key={index} className="border border-cyan-500 rounded flex items-center p-4 relative">
            <div className="p-5 flex flex-row items-center justify-center">
                <StorageImage path={product?.image || ''} alt="img" style={{width: "200px", height: "200px", objectFit: "cover"}}></StorageImage>
                <div className="flex flex-col absolute text-right right-8 space-y-2" >
                    <div>{product?.name}</div>
                    <div>B {product?.price}</div>
                    <div>quantity : {product.quantity}</div>
                    <div>credit : unchecked</div>
                    <div>create on : {Moment(product.createdAt).format("DD / MM / YYYY, hh:mm:ss a")}</div>
                    <div className='flex flex-row justify-end space-x-4 text-right'>
                        <ProfilePicture src={`public/profile/${product.owner}`} size='32px'></ProfilePicture>
                        <p className="text-ellipsis overflow-hidden truncate whitespace-nowrap text-right">{product.owner}</p>
                    </div>
                    <div className="space-x-2 mt-2">
                        <button 
                            className="bg-green-500  hover:bg-green-700 p-2 text-white rounded"
                            onClick={() => giveGoodCredit(product)}
                            >Approve</button>
                        <button  
                            className="bg-red-500 hover:bg-red-700 p-2 text-white rounded"
                            onClick={() => giveBadCredit(product)}
                            >Reject</button>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className="space-y-4 p-8">
            {renderedProduct}
        </div>
    )
}

export default ManageProduct;