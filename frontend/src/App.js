import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {Toaster} from 'react-hot-toast'
import Verify from "./pages/Verify";
import MyOrder from "./pages/MyOrder";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/myorders" element={<MyOrder/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </main>
      <Footer />
      <Toaster/>
    </div>
  );
}

export default App;
