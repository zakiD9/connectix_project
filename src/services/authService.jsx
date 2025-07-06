// api service for authentication
import axios from 'axios';
const API_URL = 'http://socialmedidfdf.runasp.net/api/auth/';
// Function to handle user registration
export const Signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register`, userData);
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Function to handle user login
export const Login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}login`, 
      {emailOrUsername: credentials.emailOrUsername, // use this key
      password: credentials.password});
    return response;
    
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Function to handle password reset
export const ResetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}reset-password/request`, { email });
    return response;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};
export const confirmEmail = async (userId,token) => {
try{
  const response = await axios.get(`${API_URL}confirm-email`, { userId,token });
  return response.data
} catch (error) {
    console.error('Error resetting password:', error);
    throw error;
}
}
