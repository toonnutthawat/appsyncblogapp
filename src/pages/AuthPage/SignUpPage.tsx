import { signUp } from "aws-amplify/auth";
import { useState } from "react";
import ConfirmSignUpPage from "./ConfirmSignUpPage";


function SignUpPage(){
    const [email , setEmail] = useState("");
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [errorMessage , setErrorMessage] = useState("");
    const [confirmSignUp , setConfirmSignUp] = useState(false)


    const handleSubmit = async (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try{
            const { nextStep} = await signUp({
                username: username,
                password: password,
                options: {
                    userAttributes: {
                        email: email,
                        profile: 'defaultProfile'
                    }
                },
            })
            console.log("SUCCESS");
            if(nextStep.signUpStep === "CONFIRM_SIGN_UP"){
                setConfirmSignUp(true)
            }

                
        }
        catch(e){
            setErrorMessage((e as Error).message)
        }
    }

    return(
        <div className="flex flex-col mt-4 gap-5 items-center">
            { confirmSignUp ? <ConfirmSignUpPage username={username}></ConfirmSignUpPage> :
           
            <div>
                 <div>REGISTER PAGE</div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                    <div>Email</div>
                    <input 
                        value={email}
                        type="text" 
                        name="email" 
                        className="border-2 pl-2 border-cyan-500 rounded"
                        style={{width: "24rem"}}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
                <div>
                    <div>Username</div>
                    <input 
                        value={username}
                        type="text" 
                        name="Username" 
                        className="border-2 pl-2 border-cyan-500 rounded"
                        style={{width: "24rem"}}
                        onChange={(e) => setUsername(e.target.value)}
                        required/>
                </div>            
                <div>
                    <div>Password</div>
                    <input 
                        value={password}
                        type="password" 
                        name="Password" 
                        className="border-2 pl-2 border-cyan-500 rounded"
                        style={{width: "24rem"}}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </div>            <div>
                    <div>Confirm Password</div>
                    <input 
                        value={confirmPassword}
                        type="password" 
                        name="Confirm Password" 
                        className="border-2 pl-2 border-cyan-500 rounded"
                        style={{width: "24rem"}}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required/>
                </div>
                
                { errorMessage && (<div className="text-red-500 break-words" style={{width: "24rem"}}>{errorMessage}</div>)}
                <div className="mt-4">
                    <button 
                        className={`${((username && email  && password && confirmPassword) === "")? "bg-gray-500" : "bg-cyan-500"} 
                        text-white p-2 rounded`} 
                        disabled={((username || email  || password || confirmPassword) === "")}>
                        Sign Up
                    </button>
                </div>
                </form>
            </div>
}
        </div>
    )
}

export default SignUpPage;