import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { listComments } from "../../../graphql/queries";
import { Post } from "../../../API";
import { createComment } from "../../../graphql/mutations";
import { getCurrentUser } from "aws-amplify/auth";

const publicClient = generateClient()
const privateClient = generateClient()

const fetchComments = createAsyncThunk("fetchComments", async (post : Post) => {

    const commentList = await publicClient.graphql({
        query: listComments,
        variables: {
            filter: {
                postID: {
                    eq: post.id
                },
            },
        },
    });
    const fetchedComments = commentList.data.listComments.items.map((comment) => ({
        ...comment,
        post: post,
    }));
    return fetchedComments
})

const addComment = createAsyncThunk("addComment", async ({message,postId} : {message: string , postId: string}) => {
    const user = getCurrentUser()
    const response = await privateClient.graphql({
        query: createComment,
        variables: {
            input: {
                message: message,
                postID: postId,
                username: (await user).username
            }
        }
    })
    return response.data.createComment
})

export { fetchComments  , addComment }