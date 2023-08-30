import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Leyout } from './components/layout/Leyaout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leyout>
          <Home />
        </Leyout>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
