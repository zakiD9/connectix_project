import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ResetPass from './pages/auth/ResetPassrequest.jsx';
import Feed from './pages/feed/Feed.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import Register from './pages/auth/Register.jsx';
import Login from './pages/auth/Login.jsx';
import ConfirmEmail from './pages/auth/ConfirmEmail.jsx';
import NewPassword from './pages/auth/resetPassword.jsx';
import Messages from './pages/messages/Messages.jsx';
import SettingsPage from './pages/Settings.jsx';
import SupportPage from './pages/SupportPage.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import { useAuthStore } from './store/authStore.jsx';
import { useEffect } from 'react';

function App() { 
  
 const setUser = useAuthStore((state) => state.setUser);
const logout = useAuthStore((state) => state.logout);
const setLoading = useAuthStore((state) => state.setLoading);
const isLoading = useAuthStore((state) => state.isLoading);

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    setUser({ token }); // or fetch real user
  } else {
    logout();
  }
  setLoading(false);
}, []);


if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgetPassword" element={<ResetPass/>}/>
      <Route path="/resetnewpassword" element={<NewPassword/>}/>
      <Route path="/" element={<ProtectedRoute><Feed /></ProtectedRoute>} /> 
      <Route path="/profile/:id" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="/Messages" element={<ProtectedRoute><Messages/></ProtectedRoute>} />
      <Route path="/Settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      <Route path="/Support" element={<ProtectedRoute><SupportPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
