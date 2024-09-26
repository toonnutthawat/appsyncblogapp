import { useLoaderData } from "react-router-dom";
import { getProperties } from "aws-amplify/storage";
import type { DetailResult } from "../../loaders/detailLoader";
import Moment from "moment"
import { useEffect, useState } from "react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import SimpleMdeReact from "react-simplemde-editor";
import type { Comment } from "../../API";
import { generateClient } from "@aws-amplify/api";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Subscription } from 'rxjs';
import { onCreateComment } from "../../graphql/subscriptions";
import { BiSolidLike } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addComment, fetchComments } from "../../store/slices/thunks/commentsThunk";
import { updateLikesByPost, fetchLikeStatus, toggleLikeStatus } from "../../store/slices/thunks/likeStatusThunk";
import ProfilePicture from "../../components/ProfilePicture";

function DetailPost() {

    const { detail } = useLoaderData() as DetailResult
    const { authStatus } = useAuthenticator(context => [context.authStatus])
    const initialState: Comment = {
        id: '', message: '', createdAt: '', updatedAt: '', __typename: "Comment",
        post: detail,
        postID: detail.id
    }
    const [coverImage, setCoverImage] = useState('')
    const [showComment, setShowComment] = useState(false)
    const [accountLike, setAccountLike] = useState<boolean>(false)
    const [comment, setComment] = useState<Comment>(initialState)
    const [newComment, setNewComment] = useState<Comment>()
    const comments = useAppSelector(state => state.comments.data)
    const likeStatus = useAppSelector(state => state.likeStatus.data)
    const postLikes = useAppSelector(state => state.posts.allPosts.data?.find((post) => {return post.id === detail.id}))
    const clientPublic = generateClient();
    const dispatch = useAppDispatch()
    let subOnCreate: Subscription
    
    useEffect(() => {
        updateCoverImage();
        dispatch(fetchComments(detail))
    }, [newComment])



    function setUpSubscription() {
        subOnCreate = clientPublic.graphql({
            query: onCreateComment
        }).subscribe({
            next: ({ data }) => {
                const commentData = data.onCreateComment as Comment;
                setNewComment(commentData);
            }
        });
    }

    useEffect(() => {
        setUpSubscription();
        return () => {
            subOnCreate.unsubscribe();
        };
    }, []);

    useEffect(() => {
        dispatch(fetchLikeStatus(detail.id))
        fetchStatusAccountLike()
    }, [])

    useEffect(() => {
        dispatch(updateLikesByPost(detail.id))
    },[toggleLike])

    async function fetchStatusAccountLike() {
        try {
            setAccountLike(likeStatus?.status as boolean)
        }
        catch (error) {
            console.log(error);
        }
    }

    async function toggleLike() {
        if(!likeStatus) return;
        dispatch(toggleLikeStatus(detail.id))
        dispatch(updateLikesByPost(detail.id))
        fetchStatusAccountLike()
        setAccountLike(!accountLike)
    }

    async function updateCoverImage() {
        if (detail.coverImage) {
            try {
                const result = await getProperties({
                    path: detail.coverImage,
                });
                setCoverImage(result.path)
            } catch (error) {
                console.log('Error ', error);
            }
        }
    }

    async function writeComment() {
        if (!comment?.message) return;
        try {
            dispatch(addComment({message: comment.message , postId: detail.id}))
            setShowComment(false)
            dispatch(fetchComments(detail))
            setComment({ ...comment, message: "" })
        } catch (error) {
            console.log('Error writing comment: ', error);
        }
    }


    return (
        <div className="px-20">
            <div className="flex flex-col text-left relative">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row absolute right-0 mt-4 items-center">
                        {likeStatus?.status  ?
                            <BiSolidLike className="text-green-500 hover:text-green-700 cursor-pointer" size="34px" onClick={toggleLike} />
                            :
                            <BiSolidLike className="text-red-500 hover:text-red-700 cursor-pointer" size="34px" onClick={toggleLike} />
                        }
                        <div className="ml-2">{postLikes?.likes}</div>
                    </div>
                    {
                        coverImage && (
                            <StorageImage path={coverImage} alt="cat" className="rounded-lg mt-2 size-3/6"></StorageImage>
                        )
                    }
                    <div></div>
                    <p className="text-5xl mt-4 font-semibold">title : {detail.title}</p>
                    <p className="text-xl mt-4 font-light max-w-full max-h-full break-words">content : {detail.content}</p>
                    <div className="flex flex-row space-x-2 items-center">
                        <ProfilePicture src={`public/profile/${detail.username}`} size='32px'></ProfilePicture>
                        <p className="text-xl font-light my-4">{detail.username}</p>
                    </div>
                    <p className="text-xl mt-4 font-light my-4">Create on : {Moment(detail.createdAt).format("DD / MM / YYYY, hh:mm:ss a")}</p>
                </div>
                {
                    authStatus === 'authenticated' ?
                        <h1 className="font-bold">Comments:  {comments?.length}</h1>
                        : <></>
                }

                {
                    comments && (

                        comments.map((comment) => (
                            <div key={comment?.id} className="gap-4 p-8 mt-4 shadow-md cursor-pointer hover:bg-zinc-100 relative space-y-2">
                                    <div className="flex flex-row space-x-2">
                                        <ProfilePicture src={`public/profile/${comment.createBy}`} size='32px'></ProfilePicture>
                                        <p style={{overflowWrap: "anywhere"}}>{comment?.createBy}</p>
                                    </div>
                                    <h1>{comment?.message}</h1>
                                    <h1 className="bottom-2 right-2">{Moment(comment.createdAt).format("DD / MM / YYYY, hh:mm:ss a")}</h1>
                            </div>
                        ))
                    )
                }
                {authStatus === 'authenticated' ?
                    <button
                        type="button"
                        onClick={() => setShowComment(!showComment)}
                        className="mt-4 ml-2 mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-green-800">
                        write a comment
                    </button>
                    : <></>
                }
                {
                    showComment && (
                        <div>
                            <SimpleMdeReact value={comment.message} onChange={(value) => setComment({ ...comment, message: value, postID: detail.id })}></SimpleMdeReact>
                            <button
                                type="button"
                                className="ml-2 mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-green-800"
                                onClick={writeComment}>
                                send
                            </button>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default DetailPost;

export async function getStaticProps() {
    return {
        props: {
            isPassedToWithAuthenticator: true,
        }
    }
}