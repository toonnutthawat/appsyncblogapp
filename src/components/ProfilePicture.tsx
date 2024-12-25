import { StorageImage } from "@aws-amplify/ui-react-storage"
import { useAppDispatch, useAppSelector } from "../hook"
import { useEffect, useState } from "react"
import { fetchUser } from "../store/slices/thunks/userThunk"

function ProfilePicture({ src, size , onClick, className}: {
    src?: string | null
    size: string
    className?: string | null,
    onClick?: () => void
}) {
    const [loadError , setLoadError] = useState(false)
    const user = useAppSelector(state => state.user.userInfo)
    console.log("loadError", loadError);
    const dispatch = useAppDispatch()
    console.log(user);

    useEffect(() => {
        dispatch(fetchUser())
    },[])

    return (
        <div className={`${className}`}>
            {
                (src)? <StorageImage 
                    path={src} 
                    onClick={onClick} 
                    alt="profile" 
                    className={`object-cover ${onClick ? "cursor-pointer" : ""}`} 
                    onError={() => setLoadError(true)} // Handle image load failure
                    style={
                    {
                        width: size,
                        height: size,
                        minWidth: size,
                        minHeight: size,
                        borderRadius: '50%',
                    }
                }/>
                :
                <img 
                    className={`object-cover ${onClick ? "cursor-pointer" : ""}`} 
                    src="../../src/img/profile.jpeg"
                    alt={'Profile'} 
                    onClick={onClick}
                    style={{
                        width: size,
                        height: size,
                        minWidth: size,
                        minHeight: size,
                        borderRadius: '50%',
                    }}
            ></img>
            }
        </div>
    )
}

export default ProfilePicture;