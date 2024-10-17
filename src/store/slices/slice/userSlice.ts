import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/userThunk";

export interface UserInfoType {
    id: string,
    username: string,
    img: string | undefined
    email: string | undefined,
    phoneNumber: string | undefined,
    address: string | undefined,
    nickname: string | undefined
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null as UserInfoType | null | undefined,
        error: ""
    },
    extraReducers(builder) {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.userInfo = action.payload
        })
        builder.addCase(fetchUser.rejected , (state) => {
            state.error = "fail to fetch User"
        })
    },
    reducers:{

    }
})

export const userReducer = userSlice.reducer;