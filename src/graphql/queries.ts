/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const postByUsername = /* GraphQL */ `query PostByUsername(
  $username: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostByUsernameQueryVariables,
  APITypes.PostByUsernameQuery
>;
export const getAccountLike = /* GraphQL */ `query GetAccountLike($id: ID!) {
  getAccountLike(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAccountLikeQueryVariables,
  APITypes.GetAccountLikeQuery
>;
export const listAccountLikes = /* GraphQL */ `query ListAccountLikes(
  $filter: ModelAccountLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccountLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      postID
      createdAt
      updatedAt
      createBy
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountLikesQueryVariables,
  APITypes.ListAccountLikesQuery
>;
export const accountLikesByPostID = /* GraphQL */ `query AccountLikesByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAccountLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  accountLikesByPostID(
    postID: $postID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      postID
      createdAt
      updatedAt
      createBy
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountLikesByPostIDQueryVariables,
  APITypes.AccountLikesByPostIDQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      img
      postID
      createdAt
      updatedAt
      createBy
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const commentsByPostID = /* GraphQL */ `query CommentsByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPostID(
    postID: $postID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      message
      img
      postID
      createdAt
      updatedAt
      createBy
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostIDQueryVariables,
  APITypes.CommentsByPostIDQuery
>;
export const getChat = /* GraphQL */ `query GetChat($id: ID!) {
  getChat(id: $id) {
    id
    message
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChatQueryVariables, APITypes.GetChatQuery>;
export const listChats = /* GraphQL */ `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      username
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListChatsQueryVariables, APITypes.ListChatsQuery>;
