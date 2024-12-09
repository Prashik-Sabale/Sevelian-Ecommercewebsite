import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./features/ProductDetails";
import Cart from "./components/CartTab";
import Login from './features/Auth/Login';
import SignUp from './features/Auth/SignUp';
import CategoryCards from './components/CategoryCards';
import ShirtCollection from './components/ShirtCollection';
import TShirtCollection from './components/TShirtCollection';
import ProductDetailTShirt from './features/ProductDetailTShirt';
// import Search from './components/SerachBox';
import { Toaster } from 'react-hot-toast';
import Checkout from './components/Checkout';
import CheckoutPage from './components/CheckoutPage';


function App() {

  return (
    <div className="App">
      <Router>
        <div className="App">
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Navbar />
          {/* <Home />  */}

          {/* Routes for the application */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<CategoryCards />} />
            <Route path="/Shirts" element={<ShirtCollection />} />
            <Route path="/TShirts" element={<TShirtCollection />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/NotFound" element={<NotFound />} />
            {/* <Route path="/Search" element={<Search />} /> */}



            {/* ***Unique** */}
            <Route path='/products/:slug' element={<ProductDetails />} />
            <Route path="/Shirts/:slug" element={<ProductDetails />} />
            <Route path="/TShirts/:slug" element={<ProductDetailTShirt />} />
            <Route path='/Home/:slug' element={<ProductDetails />} />
            <Route path='/:slug' element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>


          {/* Footer Component */}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
