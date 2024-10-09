import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { createProduct } from "../../../graphql/mutations";
import { getCurrentUser } from "aws-amplify/auth";
import { listProducts } from "../../../graphql/queries";

const client = generateClient()

const addProduct = createAsyncThunk("addProduct", async ({ productName , coverImage , productQuantity , productPrice} : 
    { productName : string , coverImage : string , productQuantity: number , productPrice: number}) => {
    try{
    const user = getCurrentUser()
    const response = await client.graphql({
        query: createProduct,
        variables: {
            input: {
                image: coverImage,
                name: productName,
                quantity: productQuantity,
                stock: productQuantity,
                owner: (await user).username,
                price: productPrice
            }
        }
    })

    return response.data.createProduct
    
    }
    catch(error){
        console.log((error as Error).message);
        
    }
})


const fetchProducts = createAsyncThunk("fetchProduct", async () => {
    const response = await client.graphql({
        query: listProducts
    })

    return response.data.listProducts.items
})

export { addProduct , fetchProducts}