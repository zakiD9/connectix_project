// store/commentStore.js
import { create } from 'zustand';

export const useCommentStore = create((set) => ({
  isCommentModalOpen: false,
  openCommentModal: () => set({ isCommentModalOpen: true}),
  closeCommentModal: () => set({ isCommentModalOpen: false }),
}));
