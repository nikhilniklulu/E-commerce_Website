
import './App.css';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup.jsx';
import Bucket from './Pages/Bucket.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assests/banner_mens.png';
import kid_banner from './Components/Assests/banner_kids.png';
import women_banner from './Components/Assests/banner_women.png'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} Category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} Category="womens" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} Category="kids" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=':ProductId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Bucket/>} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
