import { useState } from "react";
import { confirmSignUp } from "aws-amplify/auth";



function ConfirmSignUpPage({username} : {username : string}){
    const [otp, setOtp] = useState("")
    const [errorMessage , setErrorMessage] = useState("")
    const [ signUpComplete , setSignUpComplete] = useState(false)

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const { nextStep } = await confirmSignUp({
                username: username,
                confirmationCode: otp
              }); 
            console.log("CONFIRM EMAIL SUCCESS");
            if(nextStep.signUpStep === "DONE"){
                setSignUpComplete(true)
            }
            
        }
        catch(error) {
            setErrorMessage((error as Error).message)
        }

    }

    return(
    <div>
        {signUpComplete ? <div>Complete SignUp</div> :
        <div className="flex flex-col">
            <div>Email Verification</div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2" style={{width: "24rem"}}>
                <input value={otp} onChange={(e) => setOtp(e.target.value)}  className="border-2 pl-2 border-cyan-500 rounded" />
                { errorMessage && (<div className="text-red-500 break-words" style={{width: "24rem"}}>{errorMessage}</div>)}
                <button className={`${otp === "" ? "bg-gray-500" : "bg-cyan-500"} text-white p-2 rounded mt-4`} disabled={otp===""}>confirm email</button>
            </form>
        </div>
}
    </div>)
}

export default ConfirmSignUpPage;