import { withAuthenticator , WithAuthenticatorProps} from "@aws-amplify/ui-react"
// import { signIn } from "aws-amplify/auth"
// import { useState , useEffect } from "react"
// import { Hub } from 'aws-amplify/utils';
// import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

interface Props extends WithAuthenticatorProps {
    isPassedToWithAuthenticator: boolean;
}


function ProfilePage({ isPassedToWithAuthenticator, signOut , user} : Props){

    if (!isPassedToWithAuthenticator) {
        throw new Error(`isPassedToWithAuthenticator was not provided`);
      }

    return(
        
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
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
            <button onClick={signOut} className="w-80 bg-cyan-500 rounded text-white h-10 hover:bg-cyan-800">Sign out</button>
        </div>
    )
}

export default withAuthenticator(ProfilePage);

export async function getStaticProps() {
    return {
      props: {
        isPassedToWithAuthenticator: true,
      },
};
}