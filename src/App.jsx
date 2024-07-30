import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarRental from "./pages/CarRental";
import Nav from "./components/NavComp/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rental" element={<CarRental/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
