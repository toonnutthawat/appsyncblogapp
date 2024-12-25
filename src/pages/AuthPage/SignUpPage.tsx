import { signUp } from "aws-amplify/auth";
import { useState } from "react";
import ConfirmSignUpPage from "./ConfirmSignUpPage";


function SignUpPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [confirmSignUp, setConfirmSignUp] = useState(false)


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const { nextStep } = await signUp({
                username: username,
                password: password,
                options: {
                    userAttributes: {
                        email: email,
                    }
                },
            })
            console.log("SUCCESS");
            if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
                setConfirmSignUp(true)
            }


        }
        catch (e) {
            setErrorMessage((e as Error).message)
        }
    }

    return (
        <div className="flex justify-center bg-white min-h-screen relative">
            <div className="flex flex-col gap-5 items-center  bg-green-800 rounded p-8 absolute w-32 mt-8 shadow-2xl"
                style={{height: confirmSignUp ? "16rem" : "32rem", width: "28rem" }}>
                {confirmSignUp ? <ConfirmSignUpPage username={username}></ConfirmSignUpPage> :
                    <div>
                        <div className="flex flex-row space-x-6 items-center">
                            <img src="../../../src/img/kulogo.png" style={{width: "50px" , height: "50px"}}>
                            </img>
                            <div className="text-4xl py-4 text-white font-bold drop-shadow-lg">REGISTER</div>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <div>
                                <div className="text-white">Email</div>
                                <input
                                    value={email}
                                    type="text"
                                    name="email"
                                    className="border-2 pl-2 border-green-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div>
                                <div className="text-white">Username</div>
                                <input
                                    value={username}
                                    type="text"
                                    name="Username"
                                    className="border-2 pl-2 border-green-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required />
                            </div>
                            {/* <div>
                                <div className="text-white">StudentID</div>
                                <input
                                    value={studentID}
                                    type="text"
                                    name="studentID"
                                    className="border-2 pl-2 border-green-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setStudentID(e.target.value)}
                                    required />
                            </div> */}
                            <div>
                                <div className="text-white">Password</div>
                                <input
                                    value={password}
                                    type="password"
                                    name="Password"
                                    className="border-2 pl-2 border-green-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>            <div>
                                <div className="text-white">Confirm Password</div>
                                <input
                                    value={confirmPassword}
                                    type="password"
                                    name="Confirm Password"
                                    className="border-2 pl-2 border-green-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required />
                            </div>

                            {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                            <div className="mt-4">
                                <button
                                    className={`${((!username || !email || !password || !confirmPassword  ) || (confirmPassword !== password)) ? "bg-gray-500" : "bg-green-700"} 
                        text-white p-2 rounded w-full`}
                                    disabled={((!username || !email || !password || !confirmPassword  ) || (confirmPassword !== password))}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default SignUpPage;