import { useLoaderData } from "react-router-dom";
import { getProperties } from "aws-amplify/storage";
import type { DetailResult } from "../loaders/detailLoader";
import Moment from "moment"
import { useEffect , useState} from "react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import SimpleMdeReact from "react-simplemde-editor";
import type { Comment } from "../API";
import { generateClient } from "@aws-amplify/api";
import { createComment } from "../graphql/mutations";
import { v4 as uuid} from "uuid"
import { listComments } from "../graphql/queries";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Subscription } from 'rxjs';
import { onCreateComment } from "../graphql/subscriptions";


function DetailPost() {

    const { detail } = useLoaderData() as DetailResult
    const { authStatus} = useAuthenticator(context => [context.authStatus])
    const initialState: Comment = {
        id: '', message: '', createdAt: '', updatedAt: '', __typename: "Comment",
        post: detail,
        postID: detail.id
    }
    const [ coverImage , setCoverImage ] = useState('')
    const [ showComment, setShowComment] = useState(false)
    const [ comment , setComment ] = useState<Comment>(initialState)
    const [ comments , setComments] = useState<Comment[]>()
    const [ newComment , setNewComment ] = useState<Comment>()
    const clientPublic = generateClient({authMode: 'apiKey'});
    const clientPrivate = generateClient();
    let subOnCreate : Subscription 


    useEffect(() => {
        updateCoverImage();
        fetchComment();
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

    async function fetchComment(){
        const commentList = await clientPublic.graphql({
            query: listComments,
            variables: {
                filter: {
                    postID: {
                        eq: detail.id,
                    },
                },
            },
        });

        const fetchedComments = commentList.data.listComments.items.map((comment) => ({
        ...comment,
        post: detail,
    }));

        setComments(fetchedComments)
    }


    async function updateCoverImage(){
        if(detail.coverImage){
            try {
                const result = await getProperties({
                  path: detail.coverImage,
                });
                setCoverImage(result.path)
                console.log('File Properties ', result);
              } catch (error) {
                console.log('Error ', error);
              }
        }
    }

    async function writeComment(){
        if(!comment?.message) return;
        const id = uuid()
        try {
            await clientPrivate.graphql({
                query: createComment,
                variables: {
                    input: {
                        id: id,
                        message: comment.message,
                        postID: detail.id
                    }
                }
            })
            setShowComment(false)
            setComment({...comment, message: ""})
            fetchComment()
            console.log(showComment)
            
        } catch (error) {
            console.log('Error writing comment: ', error);
        }
    }

    return(
        <div>
            <div className="flex flex-col text-left relative">
                <div className="flex flex-col items-center">
                    {
                        coverImage && (
                            <StorageImage path={coverImage} alt="cat" className="rounded-lg mt-2"></StorageImage>
                        )
                    }
                    <p className="text-5xl mt-4 font-semibold">title : {detail.title}</p>
                    <p className="text-xl mt-4 font-light max-w-full max-h-full break-words">content : {detail.content}</p>
                    <p className="text-xl mt-4 font-light my-4"> by : {detail.username}</p>
                    <p className="text-xl mt-4 font-light my-4">Create on : {Moment(detail.createdAt).format("ddd, MMM, hh:mm a")}</p>
                </div>
            {
                authStatus === 'authenticated' ? 
                 <h1 className="font-bold">Comments:  {comments?.length}</h1>
                 : <></>
            }
                
                {
                    comments && (

                        comments.map((comment) => (
                            <div key={comment?.id} className="gap-4 p-5 mt-4 shadow-md cursor-pointer hover:bg-zinc-100">
                                <div>
                                    <h1>{comment?.message}</h1>
                                    <p>comment by : {comment?.createBy}</p>
                                    <p>create on {Moment(comment.createdAt).format("ddd, MMM, hh:mm a")}</p>
                                </div>
                            </div>
                        ))
                    )
                }
            { authStatus === 'authenticated' ?
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
                                            <SimpleMdeReact value={comment.message} onChange={(value) => setComment({...comment ,message: value , postID: detail.id})}></SimpleMdeReact>
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

export async function getStaticProps(){
    return {
        props: {
            isPassedToWithAuthenticator: true,
        }
    }
}