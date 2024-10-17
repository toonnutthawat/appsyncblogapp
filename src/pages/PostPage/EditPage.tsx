import { useLoaderData } from "react-router-dom"
import type { DetailResult } from "../../loaders/detailLoader"
import { useState } from "react"
import SimpleMdeReact from "react-simplemde-editor"
// import { generateClient } from "@aws-amplify/api"
//import { PostType } from "../types/PostType"
import { useAppDispatch } from "../../hook";
import { Post } from "../../API"
import { useNavigate } from "react-router-dom"
import { StorageImage } from "@aws-amplify/ui-react-storage"
import { editPost } from "../../store/slices/thunks/postsThunk"


function EditPage(){
    const {detail} = useLoaderData() as DetailResult
    const [ updatedPost , setUpdatedPost] = useState<Post>(detail)
    const navigate = useNavigate()
    const dispatch = useAppDispatch();


    async function updatePost(){
        dispatch(editPost({ updatedNewPost: updatedPost, detailId: detail.id }));
        navigate('/my-post')
    }

    return(
        <div className="px-20">
            <h1 className="text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg">Edit Post</h1>
            {
                detail.coverImage  &&  (
                    <div className="relative items-center flex flex-col">
                        <StorageImage path={detail.coverImage} alt="img" className="size-3/12 rounded-lg"></StorageImage>
                    </div>
                
                )
            }
            <input 
                name="title" 
                placeholder="Title" 
                value={updatedPost.title} 
                onChange={e => setUpdatedPost({ ...updatedPost, title: e.target.value })} 
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2">
            </input>
        <SimpleMdeReact value={updatedPost.content}  onChange={((value) => setUpdatedPost({ ...updatedPost, content: value }))}/>
        <button type="button" className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-green-800" onClick={updatePost}>
             Edit 
        </button>
        </div>
    )
}

export default EditPage
