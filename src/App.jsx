import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Signup from './pages/auth/SignUp';
import ResetPass from './pages/auth/ResetPassrequest';
import Feed from './pages/feed/Feed';
import ProfilePage from './pages/profile/ProfilePage';
import Register from './pages/auth/Register';
import Login from './pages/auth/LogIn'
import ConfirmEmail from './pages/auth/ConfirmEmail';
import NewPassword from './pages/auth/resetPassword';
import Messages from './pages/messages/Messages';
import SettingsPage from './pages/Settings';
import SupportPage from './pages/SupportPage';

function App() { 
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<Signup />} />
      <Route path="/ForgetPassword" element={<ResetPass/>}/>
      <Route path="/resetnewpassword" element={<NewPassword/>}/>
      <Route path="/" element={<Feed />} /> 
      <Route path="/profile/:id" element={<ProfilePage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="/Messages" element={<Messages/>} />
      <Route path="/Settings" element={<SettingsPage />} />
      <Route path="/Support" element={<SupportPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
