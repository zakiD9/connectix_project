import { create } from 'zustand';
import { getUsers } from '../services/userService';

export const useUserStore = create((set) => ({
  users: [],
  user: null,
  showEmailDialog: false,
  
  showBioDialog:false,
    profileUser: null, 
  setProfileUser: (profileUser) => set({ profileUser }),
  setshowBioDialog:(open)=>set({showBioDialog:open}),
  setShowEmailDialog: (open) => set({ showEmailDialog: open }),
  setUser: (user) => set({ user }),
  setUsers: (users) => set({ users }),
  updateBio: (bio) => set((state) => ({
    user: { ...state.user, bio }
  })),
  updateProfileImage: (profileImage) => set((state) => ({
    user: { ...state.user, profileImage }
  })),
  
  fetchUsers: async () => {
    try {
      const users = await getUsers();
      set({ users });
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  },
}));