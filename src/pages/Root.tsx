import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Authenticator } from "@aws-amplify/ui-react";


export default function Root(){
    return(
            <Authenticator.Provider>
                <Navbar></Navbar>
                <div className="container m-auto px-20">
                    <Outlet></Outlet>
                </div>
            </Authenticator.Provider>


    )
}