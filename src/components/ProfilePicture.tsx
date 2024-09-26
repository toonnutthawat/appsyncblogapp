import { StorageImage } from "@aws-amplify/ui-react-storage"

function ProfilePicture({ src, size , onClick}: {
    src?: string | null
    size: string
    onClick?: () => void
}) {

    return (
        <div>
            {
                (src && (src !== "defaultProfile" ))? <StorageImage 
                    path={src} 
                    onClick={onClick} 
                    alt="profile" 
                    className={`object-cover ${onClick ? "cursor-pointer" : ""}`} 
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