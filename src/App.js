
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
