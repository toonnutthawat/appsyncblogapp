import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "aws-amplify/auth";
import { fetchUserAttributes } from "aws-amplify/auth";
import { UserInfoType } from "../slice/userSlice";

const fetchUser = createAsyncThunk("fetchUser", async () => {
    const response = await getCurrentUser()
    try{
        const responseAttributes = await fetchUserAttributes()
        const user: UserInfoType = {
            id: response.userId,
            username: response.username,
            img: responseAttributes.profile,
            email: responseAttributes.email,
            phoneNumber: responseAttributes.phone_number,
            address: responseAttributes.address,
            nickname: responseAttributes.nickname
        };

        return user
    }
    catch(error){
        console.log(error);
        
    }
})

export { fetchUser };