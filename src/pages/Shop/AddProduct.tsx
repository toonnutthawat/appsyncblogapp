import { useRef, useState } from "react";
import { useAppDispatch } from "../../hook";
import { addProduct } from "../../store/slices/thunks/productsThunk";
import { FaFileImage } from "react-icons/fa";
import { uploadData } from "aws-amplify/storage";

function AddProduct() {
    const [price, setPrice] = useState(0)
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState<number | 0>(0)
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useAppDispatch()
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const [image, setImage] = useState<File | null>(null)

    async function uploadImage() {
        if (imageFileInput.current) {
            imageFileInput.current.click()
        }
    }

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if (!fileUploaded) return;
        setImage(fileUploaded)
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        try {
            if (image) {
                const filename = `public/product/${image.name}`
                dispatch(addProduct({
                    productName: name,
                    coverImage: filename,
                    productQuantity: quantity,
                    productPrice: price
                }))
                try {
                    const result = await uploadData({
                        path: filename,
                        data: image,
                    }).result;
                    console.log('Succeeded: ', result);
                } catch (error) {
                    console.log('Error : ', error);
                }
            }
            console.log("add Product success");
        }
        catch (error) {
            setErrorMessage((error as Error).message)
        }

    }

    return (
        <div>
            <div className="flex justify-center bg-white min-h-screen px-20">
                <div className="space-y-2 relative bg-cyan-500 p-8 mt-8 shadow-2xl rounded" style={{ height: "40rem" }}>
                    <div className="text-4xl py-4 text-white font-bold drop-shadow-lg">
                        Add Product
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div style={{ width: "24rem", height: "10rem" }} className="border-2 border-white rounded">
                                {
                                    image && (
                                        <div className="flex flex-col items-center">
                                            <img src={URL.createObjectURL(image)} className="items-center rounded"
                                                style={{ width: "24rem", height: "157px", objectFit: "cover" }}></img>
                                        </div>
                                    )
                                }
                            </div>
                            <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0" />
                            <button type="button" className="absolute mb-4 bg-white text-white font-semibold py-2 rounded-lg flex items-center justify-center w-12"
                                onClick={uploadImage}
                                style={{ width: '3rem', top: '15rem', right: "32px" }}>
                                <FaFileImage className="text-cyan-500" />
                            </button>
                        </div>
                        <div>
                            <div className="text-white">Name</div>
                            <input
                                value={name}
                                type="text"
                                name="name"
                                className="border-2 pl-2 border-cyan-500 rounded"
                                style={{ width: "24rem" }}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>
                        <div>
                            <div className="text-white">Price</div>
                            <input
                                value={price || ''}
                                type="number"
                                name="price"
                                className="border-2 pl-2 border-cyan-500 rounded"
                                style={{ width: "24rem" }}
                                onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
                                required
                                min={100}
                                max={100000}
                            />
                        </div>
                        <div>
                            <div className="text-white">Quantity</div>
                            <input
                                value={quantity || ''}
                                type="number"
                                name="quantity"
                                className="border-2 pl-2 border-cyan-500 rounded"
                                style={{ width: "24rem" }}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                                required
                                min={1}
                                max={100}
                            />
                        </div>
                        <div className="mt-8">
                                <button 
                                    className={`${((name) === "" || (!price || !quantity ||!image)) ? "bg-gray-500" : "bg-cyan-700"} 
                                        text-white p-2 rounded w-full`}
                                    disabled={((name) === "" || (!price || !quantity || !image))}>
                                    add
                                </button>
                            {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                        </div>
                        </form>
                </div>

            </div>
        </div>
    )
}

export default AddProduct;