import { Loader } from "@aws-amplify/ui-react";
import { resetPassword, confirmResetPassword } from "aws-amplify/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ResetPassword() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [step, setStep] = useState<"first" | "second" | "final">("first")
    console.log(step);


    const handleSetOtp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const { nextStep } = await resetPassword({
                username: username
            })
            console.log("nextStep : ", nextStep);

            if (nextStep.resetPasswordStep === "CONFIRM_RESET_PASSWORD_WITH_CODE") {
                setErrorMessage("")
                setStep("second")
            }
        } catch (error) {
            console.log(error);
            setErrorMessage((error as Error).message)

        }
    }

    const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await confirmResetPassword({
                username: username,
                confirmationCode: otp,
                newPassword: newPassword
            })
            setStep("final")
            setTimeout(() => {
                navigate('/login'); // Replace '/next-page' with the route you want to navigate to
            }, 3000);


        }
        catch (error) {
            setErrorMessage((error as Error).message)
        }
    }

    return (
        <div className="flex flex-col items-center">
            {(step === "first") ? (
                <div className="bg-cyan-500 mt-8 p-8 rounded shadow-2xl">
                    <div className="text-4xl py-4 text-white font-bold drop-shadow-lg">Forgot Password</div>
                    <form onSubmit={handleSetOtp} className="flex flex-col space-y-2" style={{ width: "24rem" }}>
                        <div className="text-white">Username</div>
                        <input placeholder="enter your username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border-2 pl-2 border-cyan-500 rounded" />
                        {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                        <button className={`${username === "" ? "bg-gray-500" : "bg-cyan-700"} text-white p-2 rounded mt-4`} disabled={username === ""}>Reset Password</button>
                    </form>
                </div>
            )
                :
                (step === "second") ?
                    <div className="bg-cyan-500 mt-8 p-8 rounded shadow-2xl">
                        <div className="text-4xl py-4 text-white font-bold drop-shadow-lg">Confirm Reset Password</div>
                        <form onSubmit={handleResetPassword} className="flex flex-col gap-2">
                            <div>
                                <div className="text-white">OTP</div>
                                <input
                                    value={otp}
                                    type="text"
                                    name="otp"
                                    className="border-2 pl-2 border-cyan-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required />
                            </div>
                            <div>
                                <div className="text-white">New Password</div>
                                <input
                                    value={newPassword}
                                    type="password"
                                    name="Password"
                                    className="border-2 pl-2 border-cyan-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required />
                            </div>            <div>
                                <div className="text-white">New Confirm Password</div>
                                <input
                                    value={confirmNewPassword}
                                    type="password"
                                    name="Confirm Password"
                                    className="border-2 pl-2 border-cyan-500 rounded"
                                    style={{ width: "24rem" }}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    required />
                            </div>

                            {errorMessage && (<div className="text-red-500 break-words" style={{ width: "24rem" }}>{errorMessage}</div>)}
                            <div className="mt-4">
                                <button
                                    className={`${((newPassword !== confirmNewPassword) || (newPassword === "" || confirmNewPassword === "")) ? "bg-gray-500" : "bg-cyan-700"} 
                        text-white p-2 rounded`}
                                    disabled={(newPassword !== confirmNewPassword) || (newPassword === "" || confirmNewPassword === "")}>
                                    ResetPassword
                                </button>
                            </div>
                        </form>
                    </div>
                    :
                    <div className="flex flex-col items-center bg-cyan-500 mt-8 p-8 rounded shadow-2xl">
                        <div className="text-4xl py-4 text-white font-bold drop-shadow-lg">Complete Reset Password</div>
                        <Loader size="large"></Loader>
                    </div>
            }
        </div>)
}

export default ResetPassword;