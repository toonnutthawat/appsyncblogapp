import { useLoaderData } from "react-router-dom"
import type { DetailResult } from "../../loaders/detailLoader"
import { useState , useRef } from "react"
import SimpleMdeReact from "react-simplemde-editor"
// import { generateClient } from "@aws-amplify/api"
//import { PostType } from "../types/PostType"
import { useAppDispatch } from "../../hook";
import { Post } from "../../API"
import { useNavigate } from "react-router-dom"
import { StorageImage } from "@aws-amplify/ui-react-storage"
import { v4 as uuid} from "uuid"
import { uploadData } from "aws-amplify/storage"
import { editPost } from "../../store/slices/thunks/postsThunk"


function EditPage(){
    const {detail} = useLoaderData() as DetailResult
    //const client = generateClient()
    const [ updatedPost , setUpdatedPost] = useState<Post>(detail)
    const [image , setImage] = useState<File | null>(null)
    const [delImg , setDelImg] = useState(false)
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    console.log(delImg)
    console.log(updatedPost.coverImage)

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if(!fileUploaded) return;
        setImage(fileUploaded)
    }

    async function uploadImage(){
        if(imageFileInput.current){
            imageFileInput.current.click()
        }
    }

    async function updatePost(){

        if(image){
            const filename = `public/${image.name}_${uuid()}`
            updatedPost.coverImage = filename
              try {
                const result = await uploadData({
                  path: filename, 
                  data: image,
                }).result;
                console.log('Succeeded: ', result);
              } catch (error) {
                console.log('Error : ', error);
              }
        }

        if(delImg){
            updatedPost.coverImage = null
        }
        dispatch(editPost({ updatedNewPost: updatedPost, detailId: detail.id }));
        navigate('/my-post')
    }

    return(
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6">Edit Post</h1>
            {
                detail.coverImage && !image  && !delImg ? (
                    <div className="relative items-center flex flex-col">
                        <StorageImage path={detail.coverImage} alt="img" className="size-3/12 rounded-lg"></StorageImage>
                        <button 
                            type="button"
                            className="bg-red-600 text-white font-semibold px-2 py-1 rounded-lg hover:bg-red-800 absolute right-5 bottom-0"
                            onClick={() => setDelImg(true)}>
                            Delete Image
                        </button>
                    </div>
                
                )
              : image && !delImg ?

            (
                (   
                    <div className="relative flex flex-col items-center">
                        <img src={URL.createObjectURL(image)} className="my-4 size-3/12 rounded-lg"></img>
                        <button 
                            type="button"
                            className="bg-red-600 text-white font-semibold px-2 py-1 rounded-lg hover:bg-red-800 absolute right-5 bottom-0"
                            onClick={() => setDelImg(true)}>
                            Delete Image
                        </button>
                    </div>
                )
            )
            : <></>
            }
            <input 
                name="title" 
                placeholder="Title" 
                value={updatedPost.title} 
                onChange={e => setUpdatedPost({ ...updatedPost, title: e.target.value })} 
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2">
            </input>
        <SimpleMdeReact value={updatedPost.content}  onChange={((value) => setUpdatedPost({ ...updatedPost, content: value }))}/>
        <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0"/>
        <button type="button" className="mr-2 mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-blue-800" onClick={uploadImage}>
            Upload Cover Image
        </button>
        <button type="button" className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-green-800" onClick={updatePost}>
             Edit 
        </button>
        </div>
    )
}

export default EditPage
