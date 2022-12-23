import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";

function App() {
  return (
    <>
     <BrowserRouter>
     <CartProvider>
     <Nav/>
       <div className="container">
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
        <Footer/>
       </div>
       </CartProvider>
     </BrowserRouter>
    </>
  );
}

export default App;