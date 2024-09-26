import '@aws-amplify/ui-react/styles.css';
import ProfilePicture from "../components/ProfilePicture";
import { useEffect, useRef, useState } from "react";
import { fetchUserAttributes } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { uploadData } from "aws-amplify/storage";
import { updateUserAttributes } from "aws-amplify/auth";
import { useAppDispatch, useAppSelector } from '../hook';
import { fetchUser } from '../store/slices/thunks/userThunk';

function ProfilePage() {
    const [image, setImage] = useState<File | null>(null)
    const dispatch = useAppDispatch()
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const userInfo = useAppSelector(state => state.user.userInfo)
    const userAttributes = fetchUserAttributes()
    const [editImg, setEditImg] = useState(false)
    const navigate = useNavigate();
    const user = useAppSelector(state => state.user.userInfo)

    console.log(userAttributes);

    async function handleSignOut() {
        await signOut()
        navigate('/')
    }

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    async function uploadIMG() {
        if (image) {
            const filename = `public/profile/${user?.username}`
            await updateUserAttributes({
                userAttributes: {
                    profile: filename
                }
            })

            try {
                const result = await uploadData({
                    path: filename,
                    data: image,
                }).result;
                console.log('Succeeded: ', result);
                dispatch(fetchUser())
            } catch (error) {
                console.log('Error : ', error);
            }
        }
        setEditImg(false)
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
        setEditImg(true)
    }

    return (
        <div className='flex flex-col items-center' style={{height: "654px"}}>
            <h1 className="text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg">Profile</h1>
            {
                (image && editImg) ? (
                    <><img src={URL.createObjectURL(image)} style={{ width: "128px", height: "128px", borderRadius: "50%" }} className='object-cover'></img>
                        <div className="flex gap-x-2 mt-2">
                            <button className="px-2 bg-green-500 rounded text-white hover:bg-green-800" onClick={uploadIMG}>save</button>
                            <button className="px-2 bg-red-500 rounded text-white hover:bg-red-800" onClick={() => setImage(null)}>cancel</button>
                        </div>
                    </>
                ) :
                    <ProfilePicture size="128px" src={userInfo?.img}></ProfilePicture>
            }
            <div>
                <p className="font-medium text-gray-500 my-2">
                    username : 
                    {
                        " " + userInfo?.username
                    }
                </p>
                <p className="text-sm text-gray-500 mb-6">
                    email :
                    {
                        " " + userInfo?.email
                    }
                </p>
            </div>
            <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0" />
            <div className="gap-2">
                <button onClick={uploadImage} className="p-4 bg-cyan-500 rounded text-white hover:bg-cyan-800 mr-4">update profile</button>
                <button onClick={handleSignOut} className="mt-2 p-4 bg-red-500 rounded text-white hover:bg-red-800">Sign out</button>
            </div>
        </div>
    )
}

export default ProfilePage;
