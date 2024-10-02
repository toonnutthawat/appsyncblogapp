/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content: string,
  username?: string | null,
  coverImage?: string | null,
  likes: number,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  username?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  content: string,
  username?: string | null,
  coverImage?: string | null,
  likes: number,
  comments?: ModelCommentConnection | null,
  listOfLike?: ModelLikeStatusConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  message: string,
  img?: string | null,
  post: Post,
  postID: string,
  username: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikeStatusConnection = {
  __typename: "ModelLikeStatusConnection",
  items:  Array<LikeStatus | null >,
  nextToken?: string | null,
};

export type LikeStatus = {
  __typename: "LikeStatus",
  id: string,
  status: boolean,
  post: Post,
  postID: string,
  username: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  username?: string | null,
  coverImage?: string | null,
  likes?: number | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateLikeStatusInput = {
  id?: string | null,
  status: boolean,
  postID: string,
  username: string,
};

export type ModelLikeStatusConditionInput = {
  status?: ModelBooleanInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelLikeStatusConditionInput | null > | null,
  or?: Array< ModelLikeStatusConditionInput | null > | null,
  not?: ModelLikeStatusConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLikeStatusInput = {
  id: string,
  status?: boolean | null,
  postID?: string | null,
  username?: string | null,
};

export type DeleteLikeStatusInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  message: string,
  img?: string | null,
  postID: string,
  username: string,
};

export type ModelCommentConditionInput = {
  message?: ModelStringInput | null,
  img?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCommentInput = {
  id: string,
  message?: string | null,
  img?: string | null,
  postID?: string | null,
  username?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  status: Status,
  client: string,
};

export enum Status {
  ORDER = "ORDER",
  CONFIRM = "CONFIRM",
  PACKED = "PACKED",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
}


export type ModelOrderConditionInput = {
  status?: ModelStatusInput | null,
  client?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  status: Status,
  client: string,
  OrderDetails?: ModelOrderDetailConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderDetailConnection = {
  __typename: "ModelOrderDetailConnection",
  items:  Array<OrderDetail | null >,
  nextToken?: string | null,
};

export type OrderDetail = {
  __typename: "OrderDetail",
  id: string,
  quantity: number,
  OrderID: string,
  order?: Order | null,
  ProductID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  price: number,
  owner: string,
  quantity: number,
  image: string,
  OrderDetails?: ModelOrderDetailConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderInput = {
  id: string,
  status?: Status | null,
  client?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateOrderDetailInput = {
  id?: string | null,
  quantity: number,
  OrderID: string,
  ProductID: string,
};

export type ModelOrderDetailConditionInput = {
  quantity?: ModelIntInput | null,
  OrderID?: ModelIDInput | null,
  ProductID?: ModelIDInput | null,
  and?: Array< ModelOrderDetailConditionInput | null > | null,
  or?: Array< ModelOrderDetailConditionInput | null > | null,
  not?: ModelOrderDetailConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateOrderDetailInput = {
  id: string,
  quantity?: number | null,
  OrderID?: string | null,
  ProductID?: string | null,
};

export type DeleteOrderDetailInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  price: number,
  owner: string,
  quantity: number,
  image: string,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  owner?: string | null,
  quantity?: number | null,
  image?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  username?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelLikeStatusFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelBooleanInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLikeStatusFilterInput | null > | null,
  or?: Array< ModelLikeStatusFilterInput | null > | null,
  not?: ModelLikeStatusFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  img?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  client?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelOrderDetailFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  OrderID?: ModelIDInput | null,
  ProductID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrderDetailFilterInput | null > | null,
  or?: Array< ModelOrderDetailFilterInput | null > | null,
  not?: ModelOrderDetailFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  coverImage?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  username?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLikeStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  postID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLikeStatusFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeStatusFilterInput | null > | null,
  username?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  img?: ModelSubscriptionStringInput | null,
  postID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  username?: ModelStringInput | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  client?: ModelStringInput | null,
};

export type ModelSubscriptionOrderDetailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  OrderID?: ModelSubscriptionIDInput | null,
  ProductID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderDetailFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderDetailFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    likes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    listOfLike?:  {
      __typename: "ModelLikeStatusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    likes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    listOfLike?:  {
      __typename: "ModelLikeStatusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    likes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    listOfLike?:  {
      __typename: "ModelLikeStatusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeStatusMutationVariables = {
  input: CreateLikeStatusInput,
  condition?: ModelLikeStatusConditionInput | null,
};

export type CreateLikeStatusMutation = {
  createLikeStatus?:  {
    __typename: "LikeStatus",
    id: string,
    status: boolean,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeStatusMutationVariables = {
  input: UpdateLikeStatusInput,
  condition?: ModelLikeStatusConditionInput | null,
};

export type UpdateLikeStatusMutation = {
  updateLikeStatus?:  {
    __typename: "LikeStatus",
    id: string,
    status: boolean,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeStatusMutationVariables = {
  input: DeleteLikeStatusInput,
  condition?: ModelLikeStatusConditionInput | null,
};

export type DeleteLikeStatusMutation = {
  deleteLikeStatus?:  {
    __typename: "LikeStatus",
    id: string,
    status: boolean,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    img?: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    img?: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    img?: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    status: Status,
    client: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    status: Status,
    client: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    status: Status,
    client: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderDetailMutationVariables = {
  input: CreateOrderDetailInput,
  condition?: ModelOrderDetailConditionInput | null,
};

export type CreateOrderDetailMutation = {
  createOrderDetail?:  {
    __typename: "OrderDetail",
    id: string,
    quantity: number,
    OrderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOrderDetailMutationVariables = {
  input: UpdateOrderDetailInput,
  condition?: ModelOrderDetailConditionInput | null,
};

export type UpdateOrderDetailMutation = {
  updateOrderDetail?:  {
    __typename: "OrderDetail",
    id: string,
    quantity: number,
    OrderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOrderDetailMutationVariables = {
  input: DeleteOrderDetailInput,
  condition?: ModelOrderDetailConditionInput | null,
};

export type DeleteOrderDetailMutation = {
  deleteOrderDetail?:  {
    __typename: "OrderDetail",
    id: string,
    quantity: number,
    OrderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    owner: string,
    quantity: number,
    image: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    owner: string,
    quantity: number,
    image: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    owner: string,
    quantity: number,
    image: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    likes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    listOfLike?:  {
      __typename: "ModelLikeStatusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeStatusQueryVariables = {
  id: string,
};

export type GetLikeStatusQuery = {
  getLikeStatus?:  {
    __typename: "LikeStatus",
    id: string,
    status: boolean,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikeStatusesQueryVariables = {
  filter?: ModelLikeStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikeStatusesQuery = {
  listLikeStatuses?:  {
    __typename: "ModelLikeStatusConnection",
    items:  Array< {
      __typename: "LikeStatus",
      id: string,
      status: boolean,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    img?: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      message: string,
      img?: string | null,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    status: Status,
    client: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderDetailQueryVariables = {
  id: string,
};

export type GetOrderDetailQuery = {
  getOrderDetail?:  {
    __typename: "OrderDetail",
    id: string,
    quantity: number,
    OrderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOrderDetailsQueryVariables = {
  filter?: ModelOrderDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderDetailsQuery = {
  listOrderDetails?:  {
    __typename: "ModelOrderDetailConnection",
    items:  Array< {
      __typename: "OrderDetail",
      id: string,
      quantity: number,
      OrderID: string,
      ProductID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    owner: string,
    quantity: number,
    image: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostByUsernameQuery = {
  postByUsername?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikeStatusesByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikeStatusesByPostIDQuery = {
  likeStatusesByPostID?:  {
    __typename: "ModelLikeStatusConnection",
    items:  Array< {
      __typename: "LikeStatus",
      id: string,
      status: boolean,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIDQuery = {
  commentsByPostID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      message: string,
      img?: string | null,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderDetailsByOrderIDQueryVariables = {
  OrderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderDetailsByOrderIDQuery = {
  orderDetailsByOrderID?:  {
    __typename: "ModelOrderDetailConnection",
    items:  Array< {
      __typename: "OrderDetail",
      id: string,
      quantity: number,
      OrderID: string,
      ProductID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderDetailsByProductIDQueryVariables = {
  ProductID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderDetailsByProductIDQuery = {
  orderDetailsByProductID?:  {
    __typename: "ModelOrderDetailConnection",
    items:  Array< {
      __typename: "OrderDetail",
      id: string,
      quantity: number,
      OrderID: string,
      ProductID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  username?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    likes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    listOfLike?:  {
      __typename: "ModelLikeStatusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  username?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    likes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    listOfLike?:  {
      __typename: "ModelLikeStatusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  username?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
    likes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    listOfLike?:  {
      __typename: "ModelLikeStatusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeStatusSubscriptionVariables = {
  filter?: ModelSubscriptionLikeStatusFilterInput | null,
  username?: string | null,
};

export type OnCreateLikeStatusSubscription = {
  onCreateLikeStatus?:  {
    __typename: "LikeStatus",
    id: string,
    status: boolean,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeStatusSubscriptionVariables = {
  filter?: ModelSubscriptionLikeStatusFilterInput | null,
  username?: string | null,
};

export type OnUpdateLikeStatusSubscription = {
  onUpdateLikeStatus?:  {
    __typename: "LikeStatus",
    id: string,
    status: boolean,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeStatusSubscriptionVariables = {
  filter?: ModelSubscriptionLikeStatusFilterInput | null,
  username?: string | null,
};

export type OnDeleteLikeStatusSubscription = {
  onDeleteLikeStatus?:  {
    __typename: "LikeStatus",
    id: string,
    status: boolean,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  username?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    img?: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  username?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    img?: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  username?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    img?: string | null,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  client?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    status: Status,
    client: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  client?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    status: Status,
    client: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  client?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    status: Status,
    client: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderDetailSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDetailFilterInput | null,
  owner?: string | null,
};

export type OnCreateOrderDetailSubscription = {
  onCreateOrderDetail?:  {
    __typename: "OrderDetail",
    id: string,
    quantity: number,
    OrderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderDetailSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDetailFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOrderDetailSubscription = {
  onUpdateOrderDetail?:  {
    __typename: "OrderDetail",
    id: string,
    quantity: number,
    OrderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderDetailSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDetailFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOrderDetailSubscription = {
  onDeleteOrderDetail?:  {
    __typename: "OrderDetail",
    id: string,
    quantity: number,
    OrderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: Status,
      client: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price: number,
      owner: string,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    owner: string,
    quantity: number,
    image: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    owner: string,
    quantity: number,
    image: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price: number,
    owner: string,
    quantity: number,
    image: string,
    OrderDetails?:  {
      __typename: "ModelOrderDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
