// import { generateClient } from "@aws-amplify/api";
// import { useState, useEffect, useRef } from "react";
// // import type { Chat } from "../API";
// import Moment from "moment";
// import { Subscription } from 'rxjs';
// // import { onCreateChat } from "../graphql/subscriptions";
// import { useAppDispatch, useAppSelector } from "../hook";
// import { fetchUser } from "../store/slices/thunks/userThunk";
// import { createMessage, fetchChats } from "../store/slices/thunks/chatsThunk";
// import ProfilePicture from "../components/ProfilePicture";

// function ChatPage() {
//     const initialState: Chat = {
//         __typename: "Chat",
//         id: "",
//         message: "",
//         username: "",
//         createdAt: "",
//         updatedAt: ""
//     };

//     const [chat, setChat] = useState<Chat>(initialState);
//     const chatList = useAppSelector(state => state.chats.allChats.data || [])
//     const sortedChats = [...chatList].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
//     console.log("chatList :" , chatList);
//     const [newChat, setNewChat] = useState<Chat | null>(null);
//     const user = useAppSelector(state => state.user.userInfo)
//     const publicClient = generateClient();
//     const dispatch = useAppDispatch()
//     const chatEndRef = useRef<HTMLDivElement>(null);
//     let subOnCreate: Subscription;

//     useEffect(() => {
//         dispatch(fetchChats())
//     }, [newChat]);

//     useEffect(() => {
//         dispatch(fetchUser())
//         dispatch(fetchChats())
//     }, [])

//     function setUpSubscription() {
//         subOnCreate = publicClient.graphql({
//             query: onCreateChat
//         }).subscribe({
//             next: ({ data }) => {
//                 const chatData = data.onCreateChat as Chat;
//                 setNewChat(chatData);
//             }
//         });
//     }

//     useEffect(() => {
//         setUpSubscription();
//         return () => {
//             subOnCreate.unsubscribe();
//         };
//     }, []);

//     async function writeChat() {
//         if (!chat.message) return;
//         if (!user?.username) return;
//         dispatch(createMessage(chat.message))
//         dispatch(fetchChats())
//     }


//     useEffect(() => {
//         if (chatEndRef.current) {
//             chatEndRef.current.scrollIntoView();
//         }
//     }, [chatList]);

//     return (
//         <div className="relative flex flex-col px-10">
//             <div id="chat" className="overflow-y-auto" style={{height: "540px"}}>
//                 {
//                     sortedChats && (
//                         sortedChats.map((chat) => (
//                             <div key={chat.id} className="mb-6">
//                                 <div className="flex flex-row space-x-2 items-center">
//                                     <ProfilePicture src={`public/profile/${chat.username}`} size='32px'></ProfilePicture>
//                                     <p>{chat.username}</p>
//                                 </div>
//                                 <div className="gap-4 p-5 mt-4 shadow-md hover:bg-zinc-100 border border-cyan-500 rounded text-wrap break-words">
//                                     <h1>{chat.message}</h1>
//                                 </div>
//                                 <h1>{Moment(chat.createdAt).format("DD / MM / YYYY, hh:mm:ss a")}</h1>
//                             </div>
//                         ))
//                     )
//                 }
//                 <div ref={chatEndRef} />
//             </div>
//             <div id="input-block" className="w-full bg-white sticky space-y-2" style={{height: "96px"}}>
//                 <input
//                     name="message"
//                     value={chat.message}
//                     placeholder="Start a message"
//                     onChange={(e) => setChat({ ...chat, message: e.target.value })}
//                     className="ml-2 rounded pl-2 border-b py-2 pb-2 text-lg focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2">
//                 </input>
//                 <button onClick={writeChat} className="ml-2 mb-4 border border-cyan-500 text-cyan-500 font-semibold px-8 py-2 rounded-lg hover:bg-cyan-100">Send</button>
//             </div>
//         </div>
//     );
// }

// export default ChatPage;
