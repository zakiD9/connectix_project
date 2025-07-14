import { createPost, deletePost, getPostById, updatePost } from "../services/postService";
import { create } from "zustand";
import { getPosts } from '../services/postService';
import { getCommentsByPostId } from "../services/commentService";


export const usePostStore = create((set) => ({
    text: '',
    postbyID: null,
    activeMenu: 'feed',
    onEdit:'',
    comments: [],
    selectedPost:null,
    setOnEdit:(edit)=>set({onEdit:edit}),
    setSelectedPost:(postId)=>set({selectedPost:postId}),
    onMenuSelect: (menu) => set({ activeMenu: menu }),
    clearSelectedPostId: () => set({ selectedPostId: null }),
    images: [],
    posts: [],
    setPostById: (post) => set({ postbyID: post }),
  setPosts: (posts) => set({ posts }),
    setImages: (images) => set({ images }),
    setText: (text) => set({ text }),
    createPost: async () => {
        const { text, images } = usePostStore.getState();
        const formData = new FormData();
        formData.append('Title', text);
        images.forEach((image) => {
            formData.append('Files', image);
        });
        if (!text.trim()) {
            alert("Post content cannot be empty");
            return;
        }

        try {
            const response = await createPost(formData);
            console.log("Post created successfully:", response);
            set({ text: "", images: [] });
        } catch (error) {
            console.error("Error creating post:", error.message);
            alert(error.message || "Failed to create post");
        }
    },
  fetchPosts: async () => {
    try {
      const response = await getPosts();
      console.log("successful fetching :",response);
      set({ posts: response });
      return response;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },

  fetchComments:async (selectedPost)=> {
      try {
        const response = await getCommentsByPostId(selectedPost);
        set({comments:response.data});
      } catch {
        set({comments:[]});
      }
    },

  getPostById: async (postId) => {
    try {
      const response = await getPostById(postId);
      set({ postbyID: response.data });
      return response;
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  },
  deletePost: async (postId) => {
    try {
      const response = await deletePost(postId);
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== postId)
      }));
      return response;
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
    }
  },
  updatePost: async (postId, updatedData) => {
    try {
      const response = await updatePost(postId, updatedData);
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId ? { ...post, ...updatedData } : post
        )
      }));
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw new Error(error.response?.data?.message || 'Error updating post');
    }
  }
}));