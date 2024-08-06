import { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage , setErrorMessage] = useState("")
    const navigate = useNavigate();

    const handleSignIn =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            await signIn({
                username: username,
                password: password
            })
            navigate('/')
            console.log("LOGIN SUCCESS");
            
        }
        catch(error){
            setErrorMessage((error as Error).message)
        }
    }

    return (
        <div className="flex justify-center">
            <div className="space-y-2">
                <div>
                    Login Page
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
                    {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                    <div className="mt-4">
                        <button className={`${(username && password) === ""  ? "bg-gray-500" : "bg-cyan-500"} text-white p-2 rounded`} disabled={(username && password) ===  ""}>Sign Up</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;