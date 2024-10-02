// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { generateClient } from "@aws-amplify/api";
// import { listChats } from "../../../graphql/queries";
// import { getCurrentUser } from "aws-amplify/auth";
// import { createChat } from "../../../graphql/mutations";

// const privateClient = generateClient()


// const createMessage = createAsyncThunk("createMessage", async (message: string ) => {
//   const user = await getCurrentUser()  
//   const response = await privateClient.graphql({
//       query: createChat,
//       variables: {
//         input: {
//           message: message,
//           username: user.username
//         }
//       }
//     })

//     return response.data.createChat
// })

// const fetchChats = createAsyncThunk("fetchChats", async () => {
//     const response = await privateClient.graphql({
//         query: listChats
//     })

//     return response.data.listChats
// })

// const fetchMyChats = createAsyncThunk("fetchMyChats", async () => {
//     const user = await getCurrentUser()
//     const response = await privateClient.graphql({
//         query: listChats,
//         variables: {
//           filter: {
//             username: { eq : user.username }
//           }
//         }
//       })

//       return response.data.listChats
// })

// export { fetchChats , fetchMyChats , createMessage}
