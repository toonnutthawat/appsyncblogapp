import { useLocation } from 'react-router-dom';
import { Product } from '../../API';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { FaCartShopping } from 'react-icons/fa6';
import ProfilePicture from '../../components/ProfilePicture';

function ProductDetail() {
    const location = useLocation()
    const product: Product = location.state.product
    return (
        <div className=''>
            <div className='m-16 flex flex-row space-x-8'>
                <div className='' style={{ objectFit: "cover", width: "750px", height: "750px" }}>
                    <StorageImage path={product.image} alt='productImage' className='rounded-2xl'></StorageImage>
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
                        <button className='bg-cyan-500 hover:bg-cyan-700 px-4 py-2 rounded-md ml-2'>
                            <FaCartShopping color='white'></FaCartShopping>
                        </button>
                        <div className='font-thin text-zinc-500 ml-8'>มีสินค้าทั้งหมด : {product.stock}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;