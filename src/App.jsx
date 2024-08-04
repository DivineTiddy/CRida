import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarRental from "./pages/CarRental";
import Nav from "./components/NavComp/Nav";
import Footer from "./components/FooterComponent/Footer";
import CarSales from "./pages/CarSales";


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/rental" element={<CarRental/>}></Route>
        <Route path="/sales" element={<CarSales/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
