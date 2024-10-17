import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { createProduct, deleteProduct, updateProduct } from "../../../graphql/mutations";
import { getCurrentUser } from "aws-amplify/auth";
import { getProduct, listProducts } from "../../../graphql/queries";
import { OrderDetail, Product } from "../../../API";

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
                credit: false,
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
        query: listProducts,
        variables: {
            filter: {
                credit: {
                    eq: true
                }
            }
        }
    })

    return response.data.listProducts.items
})

const fetchUncheckedCreditProducts = createAsyncThunk("fetchUncheckedCreditProducts", async () => {
    const response = await client.graphql({
        query: listProducts,
        variables: {
            filter: {
                credit: {
                    eq: false
                }
            }
        }
    })

    return response.data.listProducts.items
})

const goodCredit = createAsyncThunk("goodCredit", async (product : Product) => {
    const response = await client.graphql({
        query: updateProduct,
        variables: {
            input: {
                id: product.id,
                credit: true
            }
        }
    })
    return response.data.updateProduct
})

const badCredit = createAsyncThunk("badCredit", async (product : Product) => {
    const id = product.id
    const response = await client.graphql({
        query: deleteProduct,
        variables: {input : {id}}
    })

    return response.data.deleteProduct
})

const decreaseProductStock = createAsyncThunk(
    "decreaseProductStock",
    async (ordersDetail: OrderDetail) => {
      console.log("orderDetail to decrease stock :", ordersDetail);
      try {
        const product = await client.graphql({
          query: getProduct,
          variables: {
            id: ordersDetail.ProductID,
          },
        });
        console.log("product to decrease stock :", product.data.getProduct);
        if (!product.data.getProduct?.stock) return;
        const response = await client.graphql({
          query: updateProduct,
          variables: {
            input: {
              id: ordersDetail.ProductID,
              stock: product.data.getProduct?.stock - 1,
            },
          },
        });
        console.log(response.data.updateProduct);
        return response.data.updateProduct;
      } catch (error) {
        console.log((error as Error));
      }
    }
  );

export { addProduct , fetchProducts , fetchUncheckedCreditProducts , decreaseProductStock , goodCredit , badCredit}