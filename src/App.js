import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import ContactUs from './ContactUs';
import Menu from './Menu';
import Cart from './Cart';
import Error from './Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path='cart' element ={<Cart />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
