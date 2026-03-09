import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Order from './pages/Order';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
