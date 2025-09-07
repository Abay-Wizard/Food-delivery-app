import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FoodAdd from "./pages/FoodAdd";
import FoodList from "./pages/FoodList";
import FoodOrder from "./pages/FoodOrder";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";
import FoodUpdate from "./pages/FoodUpdate";

function App() {
  return (
    <div className=" flex flex-col h-screen">
      <Navbar />
      <div className="flex gap-2 flex-1 overflow-hidden">
        <Sidebar  className="h-full overflow-y-auto" />
        <main className='flex-1 overflow-y-auto p-4'>
          <Routes>
            <Route path="/add" element={<FoodAdd />} />
            <Route path="/list" element={<FoodList />} />
            <Route path="/order" element={<FoodOrder />} />
            <Route path="/update" element={<FoodUpdate/>} />
          </Routes>
        </main>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
