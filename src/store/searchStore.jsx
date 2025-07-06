import { create } from 'zustand';
import { Login as LoginApi ,ResetPassword,Signup as SignupApi } from '../services/authService';

export const useSearchStore = create((set) => ({
    query:'',
  results:'',
  loading:'',
  error:'',
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
  setLoading: (loading) => set({loading }),
  setError:(error)=>set({error})
 }
));
