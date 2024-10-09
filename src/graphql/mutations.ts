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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createLikeStatus = /* GraphQL */ `mutation CreateLikeStatus(
  $input: CreateLikeStatusInput!
  $condition: ModelLikeStatusConditionInput
) {
  createLikeStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLikeStatusMutationVariables,
  APITypes.CreateLikeStatusMutation
>;
export const updateLikeStatus = /* GraphQL */ `mutation UpdateLikeStatus(
  $input: UpdateLikeStatusInput!
  $condition: ModelLikeStatusConditionInput
) {
  updateLikeStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLikeStatusMutationVariables,
  APITypes.UpdateLikeStatusMutation
>;
export const deleteLikeStatus = /* GraphQL */ `mutation DeleteLikeStatus(
  $input: DeleteLikeStatusInput!
  $condition: ModelLikeStatusConditionInput
) {
  deleteLikeStatus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLikeStatusMutationVariables,
  APITypes.DeleteLikeStatusMutation
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
    username
    createdAt
    updatedAt
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
    username
    createdAt
    updatedAt
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
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    id
    status
    client
    address
    phone
    OrderDetails {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
    status
    client
    address
    phone
    OrderDetails {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    id
    status
    client
    address
    phone
    OrderDetails {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createOrderDetail = /* GraphQL */ `mutation CreateOrderDetail(
  $input: CreateOrderDetailInput!
  $condition: ModelOrderDetailConditionInput
) {
  createOrderDetail(input: $input, condition: $condition) {
    id
    quantity
    OrderID
    order {
      id
      status
      client
      address
      phone
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
      stock
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
` as GeneratedMutation<
  APITypes.CreateOrderDetailMutationVariables,
  APITypes.CreateOrderDetailMutation
>;
export const updateOrderDetail = /* GraphQL */ `mutation UpdateOrderDetail(
  $input: UpdateOrderDetailInput!
  $condition: ModelOrderDetailConditionInput
) {
  updateOrderDetail(input: $input, condition: $condition) {
    id
    quantity
    OrderID
    order {
      id
      status
      client
      address
      phone
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
      stock
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
` as GeneratedMutation<
  APITypes.UpdateOrderDetailMutationVariables,
  APITypes.UpdateOrderDetailMutation
>;
export const deleteOrderDetail = /* GraphQL */ `mutation DeleteOrderDetail(
  $input: DeleteOrderDetailInput!
  $condition: ModelOrderDetailConditionInput
) {
  deleteOrderDetail(input: $input, condition: $condition) {
    id
    quantity
    OrderID
    order {
      id
      status
      client
      address
      phone
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
      stock
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
` as GeneratedMutation<
  APITypes.DeleteOrderDetailMutationVariables,
  APITypes.DeleteOrderDetailMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    name
    price
    owner
    quantity
    stock
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    name
    price
    owner
    quantity
    stock
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    name
    price
    owner
    quantity
    stock
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
