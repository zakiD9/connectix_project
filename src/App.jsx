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
import Signup from './pages/auth/Signup.jsx';

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
