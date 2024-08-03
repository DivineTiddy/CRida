import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarRental from "./pages/CarRental";
import Nav from "./components/NavComp/Nav";
import Footer from "./components/FooterComponent/Footer";
import CarSale from "./components/CarSales/CarSale";


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rental" element={<CarRental/>}></Route>
        <Route path="/car/sales" element={<CarSale/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
