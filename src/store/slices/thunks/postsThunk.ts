import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { listPosts } from "../../../graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";
import { deletePost } from "../../../graphql/mutations";


const client = generateClient();

const fetchPosts = createAsyncThunk("fetchPosts", async () => {
    const response = await client.graphql({
        query: listPosts
    })

    return response.data.listPosts
})

const fetchMyPosts = createAsyncThunk("fetchMyPosts", async () => {
    const user = await getCurrentUser()
    const response = await client.graphql({
        query: listPosts,
        variables: {
          filter: {
            username: { eq: `${user?.userId}::${user?.username}` }
          }
        }
      })

      return response.data.listPosts
})

const removePost = createAsyncThunk("deletePost", async (id : string) => {
    const response = await client.graphql({
        query: deletePost,
        variables: {input : {id}}
    })

    return response
}) 

export { fetchPosts , fetchMyPosts , removePost }
