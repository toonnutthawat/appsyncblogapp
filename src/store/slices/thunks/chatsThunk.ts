import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "@aws-amplify/api";
import { listChats } from "../../../graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient({authMode:"apiKey"});

const fetchChats = createAsyncThunk("fetchChats", async () => {
    const response = await client.graphql({
        query: listChats
    })

    return response.data.listChats
})

const fetchMyChats = createAsyncThunk("fetchMyChats", async () => {
    const user = await getCurrentUser()
    const response = await client.graphql({
        query: listChats,
        variables: {
          filter: {
            username: { eq : user.username }
          }
        }
      })

      return response.data.listChats
})

export { fetchChats , fetchMyChats }
