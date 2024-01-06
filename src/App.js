
import './App.css';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup.jsx';
import Bucket from './Pages/Bucket.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory Category="mens" />} />
          <Route path='/womens' element={<ShopCategory Category="womens" />} />
          <Route path='/kids' element={<ShopCategory Category="kids" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=':ProductId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Bucket/>} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
