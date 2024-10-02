/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateLikeStatus = /* GraphQL */ `subscription OnCreateLikeStatus(
  $filter: ModelSubscriptionLikeStatusFilterInput
  $username: String
) {
  onCreateLikeStatus(filter: $filter, username: $username) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLikeStatusSubscriptionVariables,
  APITypes.OnCreateLikeStatusSubscription
>;
export const onUpdateLikeStatus = /* GraphQL */ `subscription OnUpdateLikeStatus(
  $filter: ModelSubscriptionLikeStatusFilterInput
  $username: String
) {
  onUpdateLikeStatus(filter: $filter, username: $username) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLikeStatusSubscriptionVariables,
  APITypes.OnUpdateLikeStatusSubscription
>;
export const onDeleteLikeStatus = /* GraphQL */ `subscription OnDeleteLikeStatus(
  $filter: ModelSubscriptionLikeStatusFilterInput
  $username: String
) {
  onDeleteLikeStatus(filter: $filter, username: $username) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLikeStatusSubscriptionVariables,
  APITypes.OnDeleteLikeStatusSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $username: String
) {
  onCreateComment(filter: $filter, username: $username) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $username: String
) {
  onUpdateComment(filter: $filter, username: $username) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $username: String
) {
  onDeleteComment(filter: $filter, username: $username) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $client: String
) {
  onCreateOrder(filter: $filter, client: $client) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $client: String
) {
  onUpdateOrder(filter: $filter, client: $client) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $client: String
) {
  onDeleteOrder(filter: $filter, client: $client) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateOrderDetail = /* GraphQL */ `subscription OnCreateOrderDetail(
  $filter: ModelSubscriptionOrderDetailFilterInput
  $owner: String
) {
  onCreateOrderDetail(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderDetailSubscriptionVariables,
  APITypes.OnCreateOrderDetailSubscription
>;
export const onUpdateOrderDetail = /* GraphQL */ `subscription OnUpdateOrderDetail(
  $filter: ModelSubscriptionOrderDetailFilterInput
  $owner: String
) {
  onUpdateOrderDetail(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderDetailSubscriptionVariables,
  APITypes.OnUpdateOrderDetailSubscription
>;
export const onDeleteOrderDetail = /* GraphQL */ `subscription OnDeleteOrderDetail(
  $filter: ModelSubscriptionOrderDetailFilterInput
  $owner: String
) {
  onDeleteOrderDetail(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderDetailSubscriptionVariables,
  APITypes.OnDeleteOrderDetailSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onCreateProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onUpdateProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onDeleteProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
