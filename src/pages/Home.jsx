
import About from "../components/Home/About";
import Choose from "../components/Home/Choose";
import CountClient from "../components/Home/CountClient";
import HerroSection from "../components/Home/HerroSection";
import Nav from "../components/NavComp/Nav";
import "./Home.css";


const Home = () => {
  return (
    <div className="home_container">
      <Nav/>
      <HerroSection/>
      <CountClient/>
      <About/> 
      <Choose/>    
    </div>
  );
};

export default Home;
