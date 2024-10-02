import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

function ProductPage(){
    const navigate = useNavigate()

    const toAddProduct = () => {
        navigate('/shop/add')
    }

    const toCartPage = () => {
        navigate('/shop/cart')
    }

    return(
        <div>
            <div className="flex flex-row relative w-full">
            <button 
                className="m-4 bg-cyan-500 text-white font-semibold py-2 rounded-lg hover:bg-cyan-800 flex items-center justify-center w-36"
                onClick={toAddProduct}
                >add Product
            </button>
            <div className="m-4 absolute right-0 cursor-pointer" onClick={toCartPage}>
                <FaCartShopping className="text-cyan-500" size="32px"></FaCartShopping>
            </div>
            </div>
        </div>
    )
}

export default ProductPage;