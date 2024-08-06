import { generateClient } from "@aws-amplify/api";
import { useState, useEffect, useRef } from "react";
import type { Chat } from "../API";
import { createChat } from "../graphql/mutations";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { listChats } from "../graphql/queries";
import Moment from "moment";
import { Subscription } from 'rxjs';
import { onCreateChat } from "../graphql/subscriptions";

function ChatPage() {
    const initialState: Chat = {
        __typename: "Chat",
        id: "",
        message: "",
        username: "",
        createdAt: "",
        updatedAt: ""
    };
    const { user } = useAuthenticator();
    const [chat, setChat] = useState<Chat>(initialState);
    const [chats, setChats] = useState<Chat[]>([]);
    const [newChat, setNewChat] = useState<Chat | null>(null);
    const client = generateClient();
    const publicClient = generateClient({ authMode: 'apiKey' });
    const chatEndRef = useRef<HTMLDivElement>(null);
    let subOnCreate: Subscription;

    useEffect(() => {
        fetchChat();
    }, [newChat]);

    function setUpSubscription() {
        subOnCreate = publicClient.graphql({
            query: onCreateChat
        }).subscribe({
            next: ({ data }) => {
                const chatData = data.onCreateChat as Chat;
                setNewChat(chatData);
            }
        });
    }

    useEffect(() => {
        setUpSubscription();
        return () => {
            subOnCreate.unsubscribe();
        };
    }, []);

    async function fetchChat() {
        const chatList = await publicClient.graphql({
            query: listChats,
        });

        const sortedChats = chatList.data.listChats.items.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

        setChats(sortedChats);
    }

    async function writeChat() {
        if (!chat.message) return;

        try {
            await client.graphql({
                query: createChat,
                variables: {
                    input: {
                        message: chat.message,
                        username: user.username
                    }
                }
            });
            setChat({ ...chat, message: "" });
            fetchChat();
        } catch (error) {
            console.log('Error chat: ', error);
        }
    }

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView();
        }
    }, [chats]);

    return (
        <div className="relative flex flex-col h-screen">
            <div id="chat" className="overflow-y-auto h-4/5">
                {
                    chats && (
                        chats.map((chat) => (
                            <div key={chat.id} className="mb-6">
                                <h1>From: {chat.username}</h1>
                                <div className="gap-4 p-5 mt-4 shadow-md hover:bg-zinc-100 border border-cyan-500 rounded text-wrap break-words">
                                    <h1>{chat.message}</h1>
                                </div>
                                <h1>{Moment(chat.createdAt).format("yy : MMM : dddd HH:mm")}</h1>
                            </div>
                        ))
                    )
                }
                <div ref={chatEndRef} />
            </div>
            <div id="input-block" className="w-full h-1/5 bg-white">
                <input
                    name="message"
                    value={chat.message}
                    placeholder="Start a message"
                    onChange={(e) => setChat({ ...chat, message: e.target.value })}
                    className="ml-2 rounded pl-2 border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2">
                </input>
                <button onClick={writeChat} className="ml-2 mb-4 border border-cyan-500 text-cyan-500 font-semibold px-8 py-2 rounded-lg hover:bg-cyan-100">Send</button>
            </div>
        </div>
    );
}

export default ChatPage;
