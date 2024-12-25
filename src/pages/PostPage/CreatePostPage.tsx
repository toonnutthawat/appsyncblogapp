import { useState, useRef } from 'react'
import { uploadData } from "aws-amplify/storage";
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { FaFileImage } from "react-icons/fa";
import "easymde/dist/easymde.min.css"
import { useAppDispatch } from '../../hook';
import { addPost } from '../../store/slices/thunks/postsThunk';



function CreatePostPage() {
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useAppDispatch()
    const [image, setImage] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { authStatus } = useAuthenticator(context => [context.authStatus]);
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate();

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if (!fileUploaded) return;
        setImage(fileUploaded)
    }

    async function uploadImage() {
        if (imageFileInput.current) {
            imageFileInput.current.click()
        }
    }

    const createNewPost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!title && !content) { setErrorMessage("Title and Content cannot be empty"); return; }
        if (!title) { setErrorMessage("Title cannot be empty"); return; }
        if (!content) { setErrorMessage("Content cannot be empty"); return; }
        const id = uuid();

        if (image) {
            const filename = `public/postImage/${image.name}_${uuid()}`
            if (authStatus === 'authenticated') {
                await dispatch(addPost({ postId: id,postTitle: title, postContent: content, coverImage: filename }))
                navigate(`/post/${id}`)
            }
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
        else {
            if (authStatus === 'authenticated') {
                await dispatch(addPost({postId: id, postTitle: title, postContent: content, coverImage: null }))
                navigate(`/post/${id}`)
            }
        }
    }
    

    return (
        <div className='px-20'>
            <div className="flex justify-center bg-white min-h-screen px-20">
                <div className="space-y-2 relative bg-green-800 p-8 mt-8 shadow-2xl rounded" style={{ height: "36rem" }}>
                    <div className="text-4xl py-4 text-white font-bold drop-shadow-lg">
                        Create Post
                    </div>
                    <form onSubmit={createNewPost}>
                        <div>
                            <div style={{ width: "24rem", height: "10rem" }} className="border-2 border-white rounded">
                                {
                                    image && (
                                        <div className="flex flex-col items-center">
                                            <img src={URL.createObjectURL(image)} className="items-center rounded"
                                                style={{ width: "24rem", height: "157px", objectFit: "cover" }}></img>
                                        </div>
                                    )
                                }
                            </div>
                            <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0" />
                            <button type="button" className="absolute mb-4 bg-white text-white font-semibold py-2 rounded-lg flex items-center justify-center w-12"
                                onClick={uploadImage}
                                style={{ width: '3rem', top: '15rem', right: "32px" }}>
                                <FaFileImage className="text-green-500" />
                            </button>
                        </div>
                        <div>
                            <div className="text-white">Title</div>
                            <input
                                value={title}
                                type="text"
                                name="name"
                                className="border-2 pl-2 border-green-500 rounded"
                                style={{ width: "24rem" }}
                                onChange={(e) => setTitle(e.target.value)}
                                required />
                        </div>
                        <div>
                            <div className='text-white'>Content</div>
                            <textarea
                                style={{width: "24rem", height: "6rem", resize: "none"}}
                                className='rounded'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            >

                            </textarea>
                        </div>
                        <div className="mt-8">
                            <button
                                className={`${((!title || !content)) ? "bg-gray-500" : "bg-green-700"} 
                                        text-white p-2 rounded w-full`}
                                disabled={((!title || !content))}>
                                create
                            </button>
                            {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default CreatePostPage;
