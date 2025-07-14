import { create } from 'zustand';
import { Login as LoginApi ,ResetPassword,Signup as SignupApi } from '../services/authService';

export const useAuthStore = create((set) => ({
  email: '',
  password: '',confirmPassword: '',
  username: '',successMessage: '',
  errors: { emailError: '', passwordError: '', authError: '' },
  firstName:'',
  lastName:'',
  birthDate:'',
  user: null,
setUser: (user) => set({user, isAuthenticated: true }),
isAuthenticated: false,
isLoading: true,
setLoading: (value) => set({ isLoading: value }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setBirthDate: (birthDate) => set({ birthDate }),

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUsername: (username) => set({ username }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setSuccessMessage: (message) => set({ successMessage: message }),
  setError: (field, value) =>
    set((state) => ({
      errors: { ...state.errors, [field]: value }
    })),

  resetErrors: () =>
    set((state) => ({
      errors: { ...state.errors, emailError: '', passwordError: '', authError: '' }
    })),

  login: async () => {
    set((state) => ({
      errors: { ...state.errors, emailError: '', passwordError: '', authError: '', successMessage: '' }
    }));
const { setUser } = useAuthStore.getState();
    const { email, password } = useAuthStore.getState();
    let hasError = false;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      set((state) => ({
        errors: { ...state.errors, emailError: 'Please enter a valid email address' }
      }));
      hasError = true;
    }
    if (password.length < 6) {
      set((state) => ({
        errors: { ...state.errors, passwordError: 'Please enter correct password' }
      }));
      hasError = true;
    }
    if (hasError) return;

    try {
      const response = await LoginApi({ emailOrUsername: email, password });
      console.log('Login successful:', response);
      localStorage.setItem('token', response.data.accessToken);
      setUser({ token: response.data.accessToken });
      set({ successMessage: response.data.message || "Login successful!",
            isAuthenticated: true,
       }); 
    }catch (error) {
      console.log("API error response:", error.response?.data?.error?.name);
  const backendError = error.response?.data?.error?.name;
  const message =
    typeof backendError === "string"
      ? backendError
      : backendError?.error || backendError?.message || "Something went wrong";

  set((state) => ({
    errors: {
      ...state.errors,
      authError: message,
    },
  }));
}
  },

  signup: async () => {
  set((state)=>({
    errors: { ...state.errors, authError: '' }
  }));
    const { email, password, username } = useAuthStore.getState();

    let hasError = false;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      set((state) => ({
        errors: { ...state.errors, emailError: 'Please enter a valid email address' }
      }));
      hasError = true;
    }
    if (password.length < 6) {
      set((state) => ({
        errors: { ...state.errors, passwordError: 'Please enter correct password' }
      }));
      hasError = true;
    }
    if (hasError) return;

    try {
      const response = await SignupApi({ email: email,
    username: username,
    password: password });
    localStorage.setItem('token', response.token);
      console.log('Signup successful:', response);
    }catch (error) {
      console.log("API error response:", error.response?.data?.error?.name);
  const backendError = error.response?.data?.error?.name;
  const message =
    typeof backendError === "string"
      ? backendError
      : backendError?.error || backendError?.message || "Something went wrong";

  set((state) => ({
    errors: {
      ...state.errors,
      authError: message,
    },
  }));
}
  },
  resetPassword: async (email) => {
    try {
      const response = await ResetPassword(email);
      console.log('Password reset request successful:', response);
      set({ successMessage: 'Password reset link sent to your email.' });
    } catch (error) {
      const backendMessage = error.response?.data || "Password reset failed";
      set((state) => ({
        errors: { ...state.errors, authError: backendMessage }
      }));
      console.error('Password reset failed:', error);
    }
  },
  logout: () => {
  localStorage.removeItem('token');
  set({ user: null, isAuthenticated: false });
  
},
}));
