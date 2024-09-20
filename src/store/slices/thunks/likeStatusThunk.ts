import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { getLikeStatus, listLikeStatuses } from "../../../graphql/queries";
import { createLikeStatus, updateLikeStatus, updatePost } from "../../../graphql/mutations";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient()
const privateClient = generateClient()

const fetchLikeStatus = createAsyncThunk("fetchLikeStatus", async (postId : string) => {
    const user = getCurrentUser()
    const response = await privateClient.graphql({
        query: getLikeStatus,
        variables: {
            id: postId + ":" + (await user).username
        }
    })
    if(response.data.getLikeStatus === null){
        const newLikeStatus = await privateClient.graphql({
            query: createLikeStatus,
            variables: {
                input: {
                    id: postId + ":" + (await user).username,
                    status: false,
                    postID: postId
                }
            }
        })
        return newLikeStatus.data.createLikeStatus
    }

    return response.data.getLikeStatus
})

const toggleLikeStatus = createAsyncThunk("toggleLikeStatus" , async (postId : string) => {

    try{
    const user = getCurrentUser()

    const likeStatus = await privateClient.graphql({
        query: getLikeStatus,
        variables: {
            id: postId + ":" + (await user).username
        }
    })

    if(!likeStatus.data.getLikeStatus){
        console.log("Error");
        return;
    }
    const response = await privateClient.graphql({
        query: updateLikeStatus,
        variables: {
            input: {
                id: likeStatus.data.getLikeStatus?.id,
                status: !likeStatus.data.getLikeStatus?.status 
            }
        }
    })

    return response.data.updateLikeStatus.status
    }
    catch(error){
        console.log(error);
        
    }
})

const updateLikesByPost = createAsyncThunk("fetchLikesByPost" , async (postId : string) => {
    try{
        const response = await client.graphql({
            query: listLikeStatuses,
            variables: {
                filter:{
                    postID: {
                        eq: postId
                    },
                    status: {
                        eq: true
                    }
                }
            }
        })
        await privateClient.graphql({
            query: updatePost,
            variables: {
                input: {
                    id : postId,
                    likes: response.data.listLikeStatuses.items.length
                }
            }

        })
        // console.log("updateLikesByPost");
        return { postId, likesCount: response.data.listLikeStatuses.items.length };
    }
    catch(error){
        console.log(error);   
    }
})



export { fetchLikeStatus  , updateLikesByPost , createAsyncThunk , toggleLikeStatus }