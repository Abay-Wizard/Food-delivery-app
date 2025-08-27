import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";

function App() {
  return (
    <div className="p-4">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/cart" element = {<Cart/>} />
        <Route path="/order" element = {<PlaceOrder/>} />
      </Routes>
    </div>
  );
}

export default App;
