import { create } from "zustand";

export const useMessageStore = create ((set)=>({

    selectedChat:'',
    setSelectedChat:(messageId)=>set({selectedChat:messageId}),
}))