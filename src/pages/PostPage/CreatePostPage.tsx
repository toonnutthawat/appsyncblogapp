import { useState, useRef } from 'react'
import { generateClient } from "@aws-amplify/api";
import { uploadData } from "aws-amplify/storage";
import { v4 as uuid } from "uuid"
import { createPost } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import SimpleMdeReact from "react-simplemde-editor";
import { useAuthenticator } from "@aws-amplify/ui-react";
import type { Post } from "../../API";
import { FaFileImage } from "react-icons/fa";
import "easymde/dist/easymde.min.css"



function CreatePostPage() {
    const initialState: Post = {
        title: "", content: "", id: "", createdAt: "", updatedAt: "",
        __typename: "Post"
    }
    const [post, setPost] = useState<Post>(initialState)
    const [image, setImage] = useState<File | null>(null)
    const { title, content } = post;
    const { authStatus } = useAuthenticator(context => [context.authStatus]);
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    console.log(post.content)




    const client = generateClient();
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
        if (!title) return;

        const id = uuid();

        if (image) {
            const filename = `public/${image.name}_${uuid()}`
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
            const newPost = {
                title,
                content,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            await client.graphql({
                query: createPost,
                variables: {
                    input: {
                        title: newPost.title,
                        content: newPost.content,
                        id: id,
                        coverImage: post.coverImage,
                    }
                }
            });
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
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2">
            </input>
            <SimpleMdeReact value={post.content} onChange={(value) => setPost({ ...post, content: value })} />
            <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0" />
            <div className="flex">
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
