import { Params } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import '../../configureAmplify'
import { getPost } from "../graphql/queries";
import type { Post, ModelCommentConnection, ModelAccountLikeConnection } from "../API"; // Adjust the path as necessary

interface ParamsType {
    params: Params
}

export interface DetailResult {
    detail: Post
}

export async function detailLoader({ params }: ParamsType): Promise<DetailResult> {
    const client = generateClient({ authMode: "apiKey" });
    const { id } = params;
    if (!id) {
        throw new Error('id must be provided');
    }

    const postData = await client.graphql({
        query: getPost,
        variables: { id }
    });

    if (!postData || !postData.data || !postData.data.getPost) {
        throw new Error('Post not found');
    }

    // Ensure comments field is correctly typed
    const detail: Post = {
        ...postData.data.getPost,
        // Type assertion for comments field
        listOfLike: {
            __typename: "ModelAccountLikeConnection",
            nextToken: postData.data.getPost.listOfLike?.nextToken,
        } as ModelAccountLikeConnection
        ,
        comments: postData.data.getPost.comments as ModelCommentConnection
    };

    return {
        detail
    };
}
