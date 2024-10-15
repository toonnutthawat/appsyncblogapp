import { useLocation, useNavigate } from 'react-router-dom';
import { Product } from '../../API';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { FaCartShopping } from 'react-icons/fa6';
import ProfilePicture from '../../components/ProfilePicture';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addToCart, fetchMyOrderInCart } from '../../store/slices/thunks/ordersThunk';

function ProductDetail() {
    const location = useLocation()
    const product: Product = location.state.product
    const productsInCart = useAppSelector(state => state.orders.orderDetail)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    async function fetchOrderDetailInMyCart(){
        dispatch(fetchMyOrderInCart())
    }

    async function addCart(product : Product)  {
        await dispatch(addToCart(product))
        await fetchOrderDetailInMyCart()
    }
    function toCartPage(){
        navigate('/shop/cart')
    }

    return (
        <div className=''>
            <div className='top-16 right-16 absolute'>
                <div className="m-4 cursor-pointer" onClick={toCartPage}>
                    <FaCartShopping className="text-cyan-500" size="32px"></FaCartShopping>
                </div>
                {
                    (productsInCart?.length !== 0 && productsInCart) && (
                        <div className="bg-red-500 text-center text-white flex items-center p-1 h-4 rounded-full right-2 absolute top-2">
                            {productsInCart.length}
                        </div>
                    )
                }
            </div>
            <div className='m-16 flex flex-row space-x-8'>
                <div className='relative  flex justify-center items-center' >
                    <StorageImage path={product.image} alt='productImage' className='rounded-2xl' style={{ objectFit: "cover", width: "750px", height: "550px" }}></StorageImage>
                    {
                        product.stock === 0 && (
                            <div className="absolute bg-zinc-500 text-white p-16 opacity-75 rounded">out of stock</div>
                        )
                    }
                </div>

                <div className=' p-2 flex flex-col font-normal text-xl space-y-16 divide-y divide-zinc-200' style={{width: "550px"}}>
                    <div className='p-4'>{product.name}</div>
                    <div className='p-4'>ขายแล้ว {product.quantity - product.stock}</div>
                    <div className='flex flex-row p-4'>
                        <ProfilePicture src={`public/profile/${product.owner}`} size='32px'></ProfilePicture>
                        <p className="text-ellipsis overflow-hidden truncate whitespace-nowrap text-center px-2">{product.owner}</p>
                    </div>
                    <div className='flex flex-row p-4'>
                        <div>B {product.price}</div>
                        { product.stock !== 0 ?
                        <button className='bg-cyan-500 hover:bg-cyan-700 px-4 py-2 rounded-md ml-2'>
                            <FaCartShopping onClick={() => addCart(product)} color='white'></FaCartShopping>
                        </button>
                        :
                        <div></div>
                        }
                        <div className='font-thin text-zinc-500 ml-8'>มีสินค้าทั้งหมด : {product.stock}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;