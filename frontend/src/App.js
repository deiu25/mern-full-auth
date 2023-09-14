import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Leyout } from './components/layout/Leyaout';
import { Auth } from './pages/auth/Auth';
import { Forgot } from './pages/auth/Forgot';
import { Reset } from './pages/auth/Reset';
import { LoginWithCode } from './pages/auth/LoginWithCode';
import { Verify } from './pages/auth/Verify';
import { Profile } from './pages/profile/Profile';
import { ChangePassword } from './pages/changePassword/ChangePassword';
import { UserList } from './pages/userList/UserList';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus, getUser, selectIsLoggedIn, selectUser } from './redux/features/auth/authSlice';
import { GoogleOAuthProvider } from "@react-oauth/google";

axios.defaults.withCredentials = true;

function App() {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
  dispatch(getLoginStatus());
  if(isLoggedIn && user === null){
    dispatch(getUser());
  }
  }, [dispatch, isLoggedIn, user]);

  return (
    <>
    <BrowserRouter>
      <ToastContainer />
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <Routes>
            <Route path="/" element={<Leyout>
              <Home />
            </Leyout>} />

            <Route path="/auth" element={<Auth />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/resetPassword/:resetToken" element={<Reset />} />
            <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
          
            <Route path="/verify/:verificationToken" element={<Leyout>
              <Verify />
            </Leyout>} />

            <Route path="/profile" element={<Leyout>
              <Profile />
            </Leyout>} />
            <Route path="/changePassword" element={<Leyout>
              <ChangePassword />
            </Leyout>} />
            <Route path="/users" element={<Leyout>
              <UserList />
            </Leyout>} />
          </Routes>
        </GoogleOAuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
