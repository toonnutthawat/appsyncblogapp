import '@aws-amplify/ui-react/styles.css';
import ProfilePicture from "../../components/ProfilePicture";
import { useEffect, useRef, useState } from "react";
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { uploadData } from "aws-amplify/storage";
import { updateUserAttributes } from "aws-amplify/auth";
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchUser } from '../../store/slices/thunks/userThunk';
import { FaCamera } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

function ProfilePage() {
    const [image, setImage] = useState<File | null>(null)
    const dispatch = useAppDispatch()
    const imageFileInput = useRef<HTMLInputElement | null>(null)
    const userInfo = useAppSelector(state => state.user.userInfo)
    const [editImg, setEditImg] = useState(false)
    const [editProfile , setEditProfile] = useState(false)
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber)
    const [address , setAddress] = useState(userInfo?.address)
    const [errorMessage , setErrorMessage] = useState("")


    async function handleSignOut() {
        await signOut()
        navigate('/')
    }

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    async function updateProfileAtrributes(){
        if(!editProfile){ setEditProfile(true)}
        else{
            setErrorMessage("")

            if (!phoneNumber || !address) {
                setErrorMessage("Both phone number and address must be provided.");
                return;  // Stop execution if validation fails
            }

            try{{
            await updateUserAttributes({
                userAttributes: {
                    address: address,
                    phone_number: phoneNumber
                }
            })
            setEditProfile(false)
            dispatch(fetchUser())
        }
            }
            catch(error){
                setErrorMessage((error as Error).message)
            }
        }
    }

    async function uploadIMG() {
        if (image) {
            const filename = `public/profile/${userInfo?.username}`
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
        dispatch(fetchUser())
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

    const toMyPurchase = () => {
        navigate('/profile-page/myPurchase')
    }

    return (
        <div className='bg-white min-h-screen px-20 flex flex-col items-center'>
            <div className='bg-cyan-500 p-8  mt-8 flex flex-col items-center rounded space-y-2 relative' style={{ height: "36rem" }}>
                <IoDocumentText onClick={toMyPurchase} color='white' size="32px" className='absolute right-4 cursor-pointer'></IoDocumentText>
                <h1 className="text-4xl py-4 text-white font-bold drop-shadow-lg">Profile</h1>
                <div className='relative'>
                    {
                        (image && editImg) ? (
                            <><img src={URL.createObjectURL(image)} style={{ width: "128px", height: "128px", borderRadius: "50%" }} className='object-cover'></img>
                                <div className="flex gap-x-2 mt-2">
                                    <button className="px-2 bg-green-500 rounded text-white hover:bg-green-800" onClick={uploadIMG}>save</button>
                                    <button className="px-2 bg-red-500 rounded text-white hover:bg-red-800" onClick={() => setImage(null)}>cancel</button>
                                </div>
                            </>
                        ) :
                            <div>
                                <ProfilePicture size="128px" src={userInfo?.img}></ProfilePicture>
                                <input type="file" ref={imageFileInput} onChange={onImageChange} className="abolute w-0 h-0" />
                                <div className='cursor-pointer absolute bg-white p-2 rounded-full' onClick={uploadImage} style={{ bottom: "2rem", right: "10px" }}>
                                    <FaCamera className='text-cyan-500'></FaCamera>
                                </div>
                            </div>
                    }
                </div>
                { !editProfile ?
                <div className='flex flex-col items-center' style={{width: "24rem"}}>
                    <div className='flex flex-col items-center space-y-4' style={{width: "14rem"}}>
                    <div className="font-medium text-white text-ellipse overflow-hidden break-all">
                        username :
                        {
                            " " + userInfo?.username
                        }
                    </div>
                    <div className="text-sm text-white">
                        email :
                        {
                            " " + userInfo?.email
                        }
                    </div>
                    <div className="text-sm text-white">
                        phone_number :
                        {
                            " " + userInfo?.phoneNumber
                        }
                    </div>
                    <div className="text-sm text-white" >
                        address :
                        {
                            " " + userInfo?.address
                        }
                    </div>
                    </div>
                </div>

                :

                <div className='space-y-4 mb-4 flex flex-col items-center justify-center' style={{width: "24rem"}}>
                    <div> 
                        <label className='text-white'>phone_number : </label>
                        <input value={phoneNumber || undefined} onChange={e => setPhoneNumber(e.target.value)} className='rounded-md' required></input>
                    </div>
                    <div>
                        <label className='text-white'>address : </label>
                        <textarea 
                            value={address || undefined} 
                            onChange={e => setAddress(e.target.value)}
                            className='rounded-md'
                            style={{resize: "none", width: "200px",height: "100px"}}
                            required
                            >
                        </textarea>
                    </div>
                    {errorMessage && (<div className="text-red-500 break-words" >{errorMessage}</div>)}
                </div>
                
                }

                <div className="gap-2">
                    <button onClick={updateProfileAtrributes} className="p-4 bg-cyan-700 rounded text-white hover:bg-cyan-800 mr-4">update address</button>
                    <button onClick={handleSignOut} className="mt-2 p-4 bg-red-500 rounded text-white hover:bg-red-800">Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
