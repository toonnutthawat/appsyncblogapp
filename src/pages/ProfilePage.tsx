import '@aws-amplify/ui-react/styles.css';
import ProfilePicture from "../components/ProfilePicture";
import { useEffect, useRef, useState } from "react";
import { fetchUserAttributes } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { v4 as uuid} from "uuid"
import { uploadData } from "aws-amplify/storage";
import { updateUserAttributes } from "aws-amplify/auth";


function ProfilePage(){
    const [image, setImage] = useState<File | null>(null)
    const [userInfo , setUserInfo] = useState<string>()
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const userAttributes = fetchUserAttributes()
    const [editImg , setEditImg] = useState(false)
    const navigate = useNavigate();
    const { user } = useAuthenticator(); // Destructure authStatus and user directly
    console.log(userAttributes);

    async function handleSignOut() {
        await signOut()
        navigate('/')
    }

    useEffect(() => {
        getUserInfo()
    }, [uploadIMG])

    async function getUserInfo(){
        const userAttributes = await fetchUserAttributes()
        setUserInfo(userAttributes.profile)
        console.log(await fetchUserAttributes());
        console.log(userInfo);
    }


    async function uploadIMG(){
        if(image){
            const filename = `public/${image.name}_${uuid()}`
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
              } catch (error) {
                console.log('Error : ', error);
              }
        }
        setEditImg(false)
    }

      function onImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if(!fileUploaded) return;
        setImage(fileUploaded)
    }

    async function uploadImage(){
        if(imageFileInput.current){
            imageFileInput.current.click()
        }
        setEditImg(true)
    }

    return(
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
            {
                (image && editImg) ? (
                        <><img src={URL.createObjectURL(image)} style={{ width: "94px", height: "94px", borderRadius: "50%" }}></img>
                        <div className="flex gap-x-2 mt-2">
                        <button className="px-2 bg-green-500 rounded text-white hover:bg-green-800" onClick={uploadIMG}>save</button>
                        <button className="px-2 bg-red-500 rounded text-white hover:bg-red-800"  onClick={() => setImage(null)}>cancel</button>
                        </div>
                        </>
                ) :
                <ProfilePicture size="94px" src={userInfo}></ProfilePicture>
            }
            <h1 className="font-medium text-gray-500 my-2">
                username : 
                {
                    user?.username
                }
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                userId :
                {
                    user?.userId
                }
            </p>
            <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0"/>
            <div className="gap-2">
                <button onClick={uploadImage} className="p-4 bg-cyan-500 rounded text-white hover:bg-cyan-800 mr-4">update profile</button>
                <button onClick={handleSignOut} className="mt-2 p-4 bg-cyan-500 rounded text-white hover:bg-cyan-800">Sign out</button>
            </div>
        </div>
    )
}

export default ProfilePage;
