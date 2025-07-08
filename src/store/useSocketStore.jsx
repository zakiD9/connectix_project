import { create } from 'zustand';
import socket from '../utils/socket';

export const useSocketStore = create((set) => ({
  messages: [],
  isConnected: false,

  addMessage: (msg) => set((state) => ({
    messages: [...state.messages, msg],
  })),
sendMessage: (msgContent) => {
    const message = {
      content: msgContent,
      timestamp: Date.now(),
      sender: 'Me',
    };
    socket.emit('send_message', message);      
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  setConnection: (status) => set({ isConnected: status }),

  resetMessages: () => set({ messages: [] }),
}));
