/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content: string,
  username?: string | null,
  coverImage?: string | null,
  likes?: number | null,
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
  likes?: number | null,
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
  createdAt: string,
  updatedAt: string,
  createBy?: string | null,
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
  createdAt: string,
  updatedAt: string,
  createBy?: string | null,
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
};

export type ModelLikeStatusConditionInput = {
  status?: ModelBooleanInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeStatusConditionInput | null > | null,
  or?: Array< ModelLikeStatusConditionInput | null > | null,
  not?: ModelLikeStatusConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  createBy?: ModelStringInput | null,
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
};

export type DeleteLikeStatusInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  message: string,
  img?: string | null,
  postID: string,
};

export type ModelCommentConditionInput = {
  message?: ModelStringInput | null,
  img?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  createBy?: ModelStringInput | null,
};

export type UpdateCommentInput = {
  id: string,
  message?: string | null,
  img?: string | null,
  postID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateChatInput = {
  id?: string | null,
  message: string,
  username: string,
};

export type ModelChatConditionInput = {
  message?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Chat = {
  __typename: "Chat",
  id: string,
  message: string,
  username: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChatInput = {
  id: string,
  message?: string | null,
  username?: string | null,
};

export type DeleteChatInput = {
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLikeStatusFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelBooleanInput | null,
  postID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLikeStatusFilterInput | null > | null,
  or?: Array< ModelLikeStatusFilterInput | null > | null,
  not?: ModelLikeStatusFilterInput | null,
  createBy?: ModelStringInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  img?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  createBy?: ModelStringInput | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

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
  createBy?: ModelStringInput | null,
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
  createBy?: ModelStringInput | null,
};

export type ModelSubscriptionChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatFilterInput | null > | null,
  username?: ModelStringInput | null,
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
    likes?: number | null,
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
    likes?: number | null,
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
    likes?: number | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
  } | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    message: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat?:  {
    __typename: "Chat",
    id: string,
    message: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat?:  {
    __typename: "Chat",
    id: string,
    message: string,
    username: string,
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
    likes?: number | null,
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
      likes?: number | null,
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
      likes?: number | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
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
      createdAt: string,
      updatedAt: string,
      createBy?: string | null,
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
      createdAt: string,
      updatedAt: string,
      createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
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
      createdAt: string,
      updatedAt: string,
      createBy?: string | null,
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
      createdAt: string,
      updatedAt: string,
      createBy?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    message: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      message: string,
      username: string,
      createdAt: string,
      updatedAt: string,
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
    likes?: number | null,
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
    likes?: number | null,
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
    likes?: number | null,
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
  createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
  } | null,
};

export type OnUpdateLikeStatusSubscriptionVariables = {
  filter?: ModelSubscriptionLikeStatusFilterInput | null,
  createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
  } | null,
};

export type OnDeleteLikeStatusSubscriptionVariables = {
  filter?: ModelSubscriptionLikeStatusFilterInput | null,
  createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  createBy?: string | null,
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
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
    createBy?: string | null,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
  username?: string | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    message: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
  username?: string | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    message: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
  username?: string | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    message: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
