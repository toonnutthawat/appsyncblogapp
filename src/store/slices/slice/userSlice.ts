import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/userThunk";

export interface UserInfoType {
    id: string,
    username: string,
    img: string | undefined
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
    },
    reducers:{

    }
})

export const userReducer = userSlice.reducer;