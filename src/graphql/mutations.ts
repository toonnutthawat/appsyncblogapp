/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    title
    content
    username
    coverImage
    comments {
      nextToken
      __typename
    }
    listOfLike {
      nextToken
      __typename
    }
    likes
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    title
    content
    username
    coverImage
    comments {
      nextToken
      __typename
    }
    listOfLike {
      nextToken
      __typename
    }
    likes
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    title
    content
    username
    coverImage
    comments {
      nextToken
      __typename
    }
    listOfLike {
      nextToken
      __typename
    }
    likes
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createAccountLike = /* GraphQL */ `mutation CreateAccountLike(
  $input: CreateAccountLikeInput!
  $condition: ModelAccountLikeConditionInput
) {
  createAccountLike(input: $input, condition: $condition) {
    id
    status
    post {
      id
      title
      content
      username
      coverImage
      likes
      createdAt
      updatedAt
      __typename
    }
    postID
    createdAt
    updatedAt
    createBy
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAccountLikeMutationVariables,
  APITypes.CreateAccountLikeMutation
>;
export const updateAccountLike = /* GraphQL */ `mutation UpdateAccountLike(
  $input: UpdateAccountLikeInput!
  $condition: ModelAccountLikeConditionInput
) {
  updateAccountLike(input: $input, condition: $condition) {
    id
    status
    post {
      id
      title
      content
      username
      coverImage
      likes
      createdAt
      updatedAt
      __typename
    }
    postID
    createdAt
    updatedAt
    createBy
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAccountLikeMutationVariables,
  APITypes.UpdateAccountLikeMutation
>;
export const deleteAccountLike = /* GraphQL */ `mutation DeleteAccountLike(
  $input: DeleteAccountLikeInput!
  $condition: ModelAccountLikeConditionInput
) {
  deleteAccountLike(input: $input, condition: $condition) {
    id
    status
    post {
      id
      title
      content
      username
      coverImage
      likes
      createdAt
      updatedAt
      __typename
    }
    postID
    createdAt
    updatedAt
    createBy
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAccountLikeMutationVariables,
  APITypes.DeleteAccountLikeMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    message
    img
    post {
      id
      title
      content
      username
      coverImage
      likes
      createdAt
      updatedAt
      __typename
    }
    postID
    createdAt
    updatedAt
    createBy
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    message
    img
    post {
      id
      title
      content
      username
      coverImage
      likes
      createdAt
      updatedAt
      __typename
    }
    postID
    createdAt
    updatedAt
    createBy
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    message
    img
    post {
      id
      title
      content
      username
      coverImage
      likes
      createdAt
      updatedAt
      __typename
    }
    postID
    createdAt
    updatedAt
    createBy
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
    id
    message
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatMutationVariables,
  APITypes.CreateChatMutation
>;
export const updateChat = /* GraphQL */ `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
    id
    message
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatMutationVariables,
  APITypes.UpdateChatMutation
>;
export const deleteChat = /* GraphQL */ `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
    id
    message
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
