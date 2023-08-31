import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Leyout } from './components/layout/Leyaout';
import { Auth } from './pages/auth/Auth';
import { Forgot } from './pages/auth/Forgot';
import { Reset } from './pages/auth/Reset';
import { LoginWithCode } from './pages/auth/LoginWithCode';
import { Verify } from './pages/auth/Verify';

function App() {
  return (
    <>
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
