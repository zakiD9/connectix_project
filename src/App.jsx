import { Routes, Route } from 'react-router-dom';
import {lazy , Suspense} from 'react';
import NotFound from './pages/NotFound';
import ResetPass from './pages/auth/ResetPassrequest.jsx';
import Login from './pages/auth/Login.jsx';
import ConfirmEmail from './pages/auth/ConfirmEmail.jsx';
import NewPassword from './pages/auth/resetPassword.jsx';
import SupportPage from './pages/SupportPage.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import { useAuthStore } from './store/authStore.jsx';
import { useEffect } from 'react';
import Signup from './pages/auth/SignUp.jsx';


const Feed = lazy(()=> import('./pages/feed/Feed.jsx'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage.jsx'));
const Messages = lazy(() => import('./pages/messages/Messages.jsx'));
const SettingsPage = lazy(() => import('./pages/Settings.jsx'));

function App() { 
  
 const setUser = useAuthStore((state) => state.setUser);
const logout = useAuthStore((state) => state.logout);
const setLoading = useAuthStore((state) => state.setLoading);
const isLoading = useAuthStore((state) => state.isLoading);

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    setUser({ token });
  } else {
    logout();
  }
  setLoading(false);
}, []);

if (isLoading) {
  return <div>Loading...</div>;
}
return (
  <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<Signup />} />
      <Route path="/ForgetPassword" element={<ResetPass/>}/>
      <Route path="/resetnewpassword" element={<NewPassword/>}/>
      <Route path="/" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
      <Route path="/profile/:id" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="/Messages" element={<ProtectedRoute><Messages/></ProtectedRoute>} />
      <Route path="/Settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      <Route path="/Support" element={<ProtectedRoute><SupportPage /></ProtectedRoute>} />
    </Routes>
    </Suspense>
  );
}

export default App;
