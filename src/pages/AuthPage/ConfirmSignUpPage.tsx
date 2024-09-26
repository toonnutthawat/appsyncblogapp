import { useState } from "react";
import { confirmSignUp } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { Loader } from "@aws-amplify/ui-react";


function ConfirmSignUpPage({username} : {username : string}){
    const [otp, setOtp] = useState("")
    const [errorMessage , setErrorMessage] = useState("")
    const [ signUpComplete , setSignUpComplete] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const { nextStep } = await confirmSignUp({
                username: username,
                confirmationCode: otp
              }); 
            console.log("CONFIRM EMAIL SUCCESS");
            if(nextStep.signUpStep === "DONE"){
                // const image = '../../img/profile.jpeg'
                // const filename = `public/profile/${username}`
    
                // try {
                //     const result = await uploadData({
                //         path: filename,
                //         data: image,
                //     }).result;
                //     console.log('Succeeded: ', result);
                // } catch (error) {
                //     console.log('Error : ', error);
                // }
                setSignUpComplete(true)
                setTimeout( () => {
                    navigate('/login'); // Replace '/next-page' with the route you want to navigate to
                  }, 3000);
            }
            
        }
        catch(error) {
            setErrorMessage((error as Error).message)
        }

    }

    return(
    <div className="flex flex-col justify-center">
        {signUpComplete ? <div className="flex flex-col items-center"><div className="text-4xl py-4 text-white font-bold drop-shadow-lg">Complete SignUp</div><Loader size="large"></Loader></div>
        :
        <div className="flex flex-col">
            <div className="text-4xl pb-4 text-white font-bold drop-shadow-lg">Email Verification</div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2" style={{width: "24rem"}}>
                <input value={otp} onChange={(e) => setOtp(e.target.value)}  className="border-2 pl-2 border-cyan-500 rounded" />
                { errorMessage && (<div className="text-red-500 break-words" style={{width: "24rem"}}>{errorMessage}</div>)}
                <button className={`${otp === "" ? "bg-gray-500" : "bg-cyan-700"} text-white p-2 rounded mt-4`} disabled={otp===""}>confirm email</button>
            </form>
        </div>
}
    </div>)
}

export default ConfirmSignUpPage;