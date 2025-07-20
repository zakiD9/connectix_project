import { create } from "zustand";

export const useMessageStore = create ((set)=>({
    selectedChat:null,
    setSelectedChat:(messageId)=>set({selectedChat:messageId}),
}))