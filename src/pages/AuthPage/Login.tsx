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
        <div className="flex justify-center">
            <div className="space-y-2 relative">
                <div className="text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg">
                    Login
                </div>
                <form onSubmit={handleSignIn}>
                    <div>
                        <div>Username</div>
                        <input
                            value={username}
                            type="text"
                            name="Username"
                            className="border-2 pl-2 border-cyan-500 rounded"
                            style={{ width: "24rem" }}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>
                    <div>
                        <div>Password</div>
                        <input
                            value={password}
                            type="password"
                            name="Password"
                            className="border-2 pl-2 border-cyan-500 rounded"
                            style={{ width: "24rem" }}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div className="space-y-6 mt-4">
                        <div className="absolute right-0 cursor-pointer" onClick={toSignUpPage}>Don't have an account? sign up</div>
                        <div className="absolute right-0 cursor-pointer" onClick={toResetPasswordPage}>Forgot password?</div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-row items-center space-x-2">
                            <button className={`${(username && password) === "" ? "bg-gray-500" : "bg-cyan-500"} text-white p-2 rounded`} disabled={(username && password) === ""}>Login</button>
                            <button onClick={() => signInWithRedirect({ provider: "Facebook" })} className="">
                                <FaFacebookSquare size="34px" color="#0866ff"></FaFacebookSquare>
                            </button>
                        </div>
                        {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;