import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { listPosts } from "../../../graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";
import { deletePost, updatePost } from "../../../graphql/mutations";
import { Post } from "../../../API";


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
            username: { eq: `${user?.username}` }
          }
        }
      })

      return response.data.listPosts
})


const removePost = createAsyncThunk("deletePost", async (id : string) => {
  try{
    const response = await client.graphql({
        query: deletePost,
        variables: {input : {id}}
    })

    return response
  }
  catch(error){
    console.log(error);
    
  }
}) 

const editPost = createAsyncThunk("editPost", async ({updatedNewPost, detailId} : {updatedNewPost : Post , detailId : string}) => {
  const response = await client.graphql({
    query: updatePost,
    variables: { input: 
        {   
            id: detailId,
            title: updatedNewPost.title,
            content: updatedNewPost.content,
            coverImage: updatedNewPost.coverImage
        }
     }
})

  return response.data.updatePost
})

export { fetchPosts , fetchMyPosts , removePost , editPost}
