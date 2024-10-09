import { Params } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import '../../configureAmplify'
import { getPost, listComments, listLikeStatuses } from "../graphql/queries";
import type { Post, ModelCommentConnection , ModelLikeStatusConnection } from "../API";

interface ParamsType {
    params: Params
}

export interface DetailResult {
    detail: Post
}

export async function detailLoader({ params }: ParamsType): Promise<DetailResult> {
    const client = generateClient();
    const { id } = params;
    if (!id) {
        throw new Error('id must be provided');
    }

    const postData = await client.graphql({
        query: getPost,
        variables: { id }
    });
    
    const responseListOfLikes = await client.graphql({
        query: listLikeStatuses,
        variables: {
            filter:{
                postID: {
                    eq: postData.data.getPost?.id
                },
                
            }
        }
        
    })


    const responseComments = await client.graphql({
        query: listComments,
        variables: {
            filter:{
                postID: {
                    eq: postData.data.getPost?.id
                }
            }
        }
    })


    if (!postData.data.getPost ) {
        throw new Error('Post not found');
    }

    // Ensure comments field is correctly typed
    const detail: Post = {
        ...postData.data.getPost,
        // Type assertion for comments field
        listOfLike: {
            __typename: "ModelLikeStatusConnection",
            nextToken: postData.data.getPost.listOfLike?.nextToken,
            items: responseListOfLikes.data.listLikeStatuses.items 
        } as ModelLikeStatusConnection
        ,
        comments: {
            __typename: "ModelCommentConnection" , 
            items : responseComments.data.listComments.items ,
            nextToken: postData.data.getPost.comments?.nextToken
        } as ModelCommentConnection
    };

    return {
        detail
    };
}
