import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchProducts } from "../../store/slices/thunks/productsThunk";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import ProfilePicture from "../../components/ProfilePicture";
import { addToCart } from "../../store/slices/thunks/ordersThunk";
import { Product } from "../../API";

function ProductPage() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products.data)
    const [term , setTerm] = useState("")

    const filteredProducts = products?.filter((product) => 
        product.name.toLowerCase().includes(term.toLowerCase())
    )

    useEffect(() => {
        dispatch(fetchProducts())
        console.log("fetchProducts");
    }, [])

    const toAddProduct = () => {
        navigate('/shop/add')
    }

    const toCartPage = () => {
        navigate('/shop/cart')
    }

    const toProductDetail = (product : Product) => {
        navigate('/product/detail', {state: {product}})
    }

    const addCart = (product : Product) =>  {
        dispatch(addToCart(product))
    }

    const renderedProducts = filteredProducts?.map((product, index) => (
        <div key={index} className="drop-shadow-md hover:bg-zinc-200">
            <div style={{ height: "16rem" }} className="border border-cyan-500 flex flex-col items-center relative rounded-lg ">
                <div className='pt-4 cursor-pointer' onClick={() => toProductDetail(product)}>
                    <StorageImage path={product.image} alt='img' className='rounded-lg' style={{ objectFit: "cover", width: "140px", height: "140px" }}></StorageImage>
                </div>
                <p className="text-ellipsis overflow-hidden truncate whitespace-nowrap w-full text-center px-2">
                    {product.name}
                </p>
                <p className="truncate">B {product.price}</p>
                <div className='flex flex-row'>
                    <ProfilePicture src={`public/profile/${product.owner}`} size='32px'></ProfilePicture>
                    <p className="text-ellipsis overflow-hidden truncate whitespace-nowrap text-center px-2" style={{ width: "100px" }}>{product.owner}</p>
                </div>
                <FaCartShopping onClick={() => addCart(product)} className="text-cyan-500 absolute right-2 bottom-2 cursor-pointer" size="32px"></FaCartShopping>
            </div>
        </div>
    ))

    return (
        <div className="px-20">
            <div className="flex flex-row relative w-full">
                <button
                    className="m-4 bg-cyan-500 text-white font-semibold py-2 rounded-lg hover:bg-cyan-800 flex items-center justify-center w-36"
                    onClick={toAddProduct}
                >add Product
                </button>
                <input
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    placeholder='search product'
                    className='p-2 rounded-xl bg-zinc-100 m-4'
                    style={{ width: "75%"}}>
                </input>
                <div className="m-4 absolute right-0 cursor-pointer" onClick={toCartPage}>
                    <FaCartShopping className="text-cyan-500" size="32px"></FaCartShopping>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {renderedProducts}
            </div>
        </div>
    )
}

export default ProductPage;