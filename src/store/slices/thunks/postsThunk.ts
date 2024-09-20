import type { Post } from './../../../API';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { listLikeStatuses, listPosts } from "../../../graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";
import { createPost, deleteLikeStatus, deletePost, updatePost } from "../../../graphql/mutations";


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

const addPost = createAsyncThunk("addPost", async ({postId , postToCreate , coverImage} : {postId : string , postToCreate : Post , coverImage : string | null | undefined}) => {
  const user = await getCurrentUser()
  const response = await client.graphql({
    query: createPost,
    variables: {
        input: {
            title: postToCreate.title,
            content: postToCreate.content,
            id: postId,
            coverImage: coverImage,
            username: user.username,
            likes: 0
        }
    }
});
  console.log(response.data.createPost);
  return response.data.createPost
})


const removePost = createAsyncThunk("deletePost", async (id : string) => {
  try{    
    const dlList = await client.graphql({
      query: listLikeStatuses,
      variables: {
        filter: {
          postID: {
            eq: id
          }
        }
      }
    })
    const arrDl = []

    for(let i = 0; i < dlList.data.listLikeStatuses.items.length ; i++){
        arrDl[i] = dlList.data.listLikeStatuses.items[i].id
    }

    console.log("arrDl :",arrDl);

    for(let i = 0; i < dlList.data.listLikeStatuses.items.length ; i++){
      const deletedLikeStatus = await client.graphql({
        query: deleteLikeStatus,
        variables: { input : {id : arrDl[i]}}
      })
      console.log("deletedLikeStatus :",deletedLikeStatus);
    }

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

export { fetchPosts , fetchMyPosts, addPost , removePost , editPost}
