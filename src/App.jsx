import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
// import Allproducts from './pages/allproducts/AllProducts';
import NoPage from './pages/nopage/NoPage';
import Dashboard from './pages/admin/Dashboard';
import Order from "./pages/order/Order";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/allproducts" element={<Allproducts />} /> */}
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/updateproduct' element={<UpdateProduct/>}/>
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  )
}

export default App