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
    likes
    comments {
      nextToken
      __typename
    }
    listOfLike {
      nextToken
      __typename
    }
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
export const getLikeStatus = /* GraphQL */ `query GetLikeStatus($id: ID!) {
  getLikeStatus(id: $id) {
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
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLikeStatusQueryVariables,
  APITypes.GetLikeStatusQuery
>;
export const listLikeStatuses = /* GraphQL */ `query ListLikeStatuses(
  $filter: ModelLikeStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikeStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      postID
      username
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLikeStatusesQueryVariables,
  APITypes.ListLikeStatusesQuery
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
    username
    createdAt
    updatedAt
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
      username
      createdAt
      updatedAt
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
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    status
    client
    OrderDetails {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      client
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getOrderDetail = /* GraphQL */ `query GetOrderDetail($id: ID!) {
  getOrderDetail(id: $id) {
    id
    quantity
    OrderID
    order {
      id
      status
      client
      createdAt
      updatedAt
      __typename
    }
    ProductID
    product {
      id
      name
      price
      owner
      quantity
      image
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrderDetailQueryVariables,
  APITypes.GetOrderDetailQuery
>;
export const listOrderDetails = /* GraphQL */ `query ListOrderDetails(
  $filter: ModelOrderDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      quantity
      OrderID
      ProductID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderDetailsQueryVariables,
  APITypes.ListOrderDetailsQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    price
    owner
    quantity
    image
    OrderDetails {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
      owner
      quantity
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
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
export const likeStatusesByPostID = /* GraphQL */ `query LikeStatusesByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeStatusFilterInput
  $limit: Int
  $nextToken: String
) {
  likeStatusesByPostID(
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
      username
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikeStatusesByPostIDQueryVariables,
  APITypes.LikeStatusesByPostIDQuery
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
      username
      createdAt
      updatedAt
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
export const orderDetailsByOrderID = /* GraphQL */ `query OrderDetailsByOrderID(
  $OrderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  orderDetailsByOrderID(
    OrderID: $OrderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quantity
      OrderID
      ProductID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderDetailsByOrderIDQueryVariables,
  APITypes.OrderDetailsByOrderIDQuery
>;
export const orderDetailsByProductID = /* GraphQL */ `query OrderDetailsByProductID(
  $ProductID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  orderDetailsByProductID(
    ProductID: $ProductID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quantity
      OrderID
      ProductID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderDetailsByProductIDQueryVariables,
  APITypes.OrderDetailsByProductIDQuery
>;
