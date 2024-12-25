import { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { signInWithRedirect } from "aws-amplify/auth";
import { FaFacebookSquare } from "react-icons/fa";


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();

    const toSignUpPage = () => {
        navigate('/sign-up')
    }
    const toResetPasswordPage = () => {
        navigate('/reset-password')
    }

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await signIn({
                username: username,
                password: password
            })
            if (response.isSignedIn) {
                console.log(response);
                navigate('/', { state: { isSignIn: true } })
                console.log("LOGIN SUCCESS");
            }
            else {
                setErrorMessage("try again")
            }

        }
        catch (error) {
            setErrorMessage((error as Error).message)
        }
    }

    return (
        <div className="flex justify-center bg-white min-h-screen px-20">
            <div className="space-y-2 relative bg-green-800 p-8 mt-8 shadow-2xl rounded" style={{ height: "32rem" }}>
                <div className="flex flex-row space-x-6 items-center">
                    <img src="../../../src/img/kulogo.png" style={{width: "50px", height: "50px"}}></img>
                    <div className="text-4xl py-4 text-white font-bold drop-shadow-lg">
                    Login
                </div>
                </div>
                <form onSubmit={handleSignIn}>
                    <div>
                        <div className="text-white">studentID</div>
                        <input
                            value={username}
                            type="text"
                            name="Username"
                            className="border-2 pl-2 border-green-500 rounded"
                            style={{ width: "24rem" }}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>
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
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center space-y-2">
                            <button className={`${(username && password) === "" ? "bg-gray-500" : "bg-green-700"} text-white p-2 rounded w-full`} disabled={(username && password) === ""}>Login</button>

                            <button onClick={() => signInWithRedirect({ provider: "Facebook" })} className="flex flex-row items-center justify-center w-full rounded p-2 space-x-2" style={{ backgroundColor: "#0866ff" }}>
                                <FaFacebookSquare size="22px" color="white"></FaFacebookSquare>
                                <p className="text-white">facebook</p>
                            </button>

                        </div>
                        {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                    </div>
                    <div className="space-y-6 mt-4 relative">
                        <div className="absolute right-0 cursor-pointer text-white" onClick={toSignUpPage}>Don't have an account? sign up</div>
                        <div className="absolute right-0 cursor-pointer text-white" onClick={toResetPasswordPage}>Forgot password?</div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;