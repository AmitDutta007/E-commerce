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


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/allproducts" element={<Allproducts />} /> */}
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path="/*" element={<NoPage />} />

        </Routes>
      </Router>
  )
}

export default App