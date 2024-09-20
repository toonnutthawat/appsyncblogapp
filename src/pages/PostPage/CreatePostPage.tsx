import { useState, useRef } from 'react'
import { uploadData } from "aws-amplify/storage";
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";
import SimpleMdeReact from "react-simplemde-editor";
import { useAuthenticator } from "@aws-amplify/ui-react";
import type { Post } from "../../API";
import { FaFileImage } from "react-icons/fa";
import "easymde/dist/easymde.min.css"
import { useAppDispatch } from '../../hook';
import { addPost } from '../../store/slices/thunks/postsThunk';



function CreatePostPage() {
    const initialState: Post = {
        title: "", content: "", id: "", createdAt: "", updatedAt: "",
        __typename: "Post",likes: 0
    }
    const [post, setPost] = useState<Post>(initialState)
    const [errorMessage , setErrorMessage] = useState("")
    const dispatch = useAppDispatch()
    const [image, setImage] = useState<File | null>(null)
    const { title, content } = post;
    const { authStatus } = useAuthenticator(context => [context.authStatus]);
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate();

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPost(() => (
            {
                ...post, [e.target.name]: e.target.value
            }
        ))
    }

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

    async function createNewPost() {
        if(!title && !content) { setErrorMessage("Title and Content cannot be empty") ; return;}
        if (!title) { setErrorMessage("Title cannot be empty"); return;}
        if(!content) { setErrorMessage("Content cannot be empty"); return;}
        const id = uuid();

        if (image) {
            const filename = `public/postImage/${image.name}_${uuid()}`
            post.coverImage = filename
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
        if (authStatus === 'authenticated') {
        await dispatch(addPost({ postId: id, postToCreate: post, coverImage: post.coverImage }))
        }
        navigate(`/post/${id}`)
    }

    return (
        <div className='px-20'>
            {
                image && (
                    <div className="flex flex-col items-center">
                        <img src={URL.createObjectURL(image)} className="my-4 items-center size-3/12 rounded-lg"></img>
                    </div>
                )
            }
            <h1 className="text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg">Create new Post</h1>
            <input
                onChange={onChange}
                name="title"
                placeholder="Title"
                value={post.title}
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2" required>
            </input>
            <SimpleMdeReact value={post.content} onChange={(value) => setPost({ ...post, content: value })} aria-required/>
            <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0" />
            { errorMessage && <span className='text-red-500 break-word mt-4'>{errorMessage}</span>}
            <div className="flex flex-row">
                <button type="button" className="mb-4 bg-cyan-500 text-white font-semibold py-2 rounded-lg hover:bg-cyan-800 flex items-center justify-center w-36"
                    onClick={uploadImage}
                    style={{ width: '5rem' }}>
                    <FaFileImage />
                </button>
                <button type="button" className="ml-2 mb-4 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-800 flex items-center justify-center w-36"
                    onClick={createNewPost}
                    style={{ width: '5rem' }}>
                    Post
                </button>
            </div>
        </div>
    )
}

export default CreatePostPage;
