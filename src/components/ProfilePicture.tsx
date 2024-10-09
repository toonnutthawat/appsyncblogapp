import { StorageImage } from "@aws-amplify/ui-react-storage"

function ProfilePicture({ src, size , onClick, className}: {
    src?: string | null
    size: string
    className?: string | null,
    onClick?: () => void
}) {

    return (
        <div className={`${className}`}>
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