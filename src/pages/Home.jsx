
import Accordion from "../components/carRental/Accordion";
import About from "../components/Home/About";
import Choose from "../components/Home/Choose";
import CountClient from "../components/Home/CountClient";
import EXplore from "../components/Home/EXplore";
import HerroSection from "../components/Home/HerroSection";
import Location from "../components/Home/Location";
import Service from "../components/Home/Service";
import Subscription from "../components/Home/Subscription";
import Textstimonial from "../components/Home/Textstimonial";
import "./Home.css";


const Home = () => {
  return (
    <div className="home_container">
      <HerroSection/>
      <CountClient/>
      <About/> 
      <Choose/>
      <Service/>
      <EXplore /> 
      <Location/>
      <Subscription/>  
      <Textstimonial/>
      <Accordion/>
    </div>
  );
};

export default Home;
