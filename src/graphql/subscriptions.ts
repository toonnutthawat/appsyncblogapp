/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const newOnCreatePost = /* GraphQL */ `subscription NewOnCreatePost {
  newOnCreatePost {
    id
    title
    content
    username
    coverImage
    comments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.NewOnCreatePostSubscriptionVariables,
  APITypes.NewOnCreatePostSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $username: String
) {
  onCreatePost(filter: $filter, username: $username) {
    id
    title
    content
    username
    coverImage
    comments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $username: String
) {
  onUpdatePost(filter: $filter, username: $username) {
    id
    title
    content
    username
    coverImage
    comments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $username: String
) {
  onDeletePost(filter: $filter, username: $username) {
    id
    title
    content
    username
    coverImage
    comments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $createBy: String
) {
  onCreateComment(filter: $filter, createBy: $createBy) {
    id
    message
    img
    post {
      id
      title
      content
      username
      coverImage
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $createBy: String
) {
  onUpdateComment(filter: $filter, createBy: $createBy) {
    id
    message
    img
    post {
      id
      title
      content
      username
      coverImage
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $createBy: String
) {
  onDeleteComment(filter: $filter, createBy: $createBy) {
    id
    message
    img
    post {
      id
      title
      content
      username
      coverImage
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateChat = /* GraphQL */ `subscription OnCreateChat(
  $filter: ModelSubscriptionChatFilterInput
  $username: String
) {
  onCreateChat(filter: $filter, username: $username) {
    id
    message
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat(
  $filter: ModelSubscriptionChatFilterInput
  $username: String
) {
  onUpdateChat(filter: $filter, username: $username) {
    id
    message
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat(
  $filter: ModelSubscriptionChatFilterInput
  $username: String
) {
  onDeleteChat(filter: $filter, username: $username) {
    id
    message
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
