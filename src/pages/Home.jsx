
import About from "../components/Home/About";
import Choose from "../components/Home/Choose";
import CountClient from "../components/Home/CountClient";
import EXplore from "../components/Home/EXplore";
import Location from "../components/Home/Location";
import Service from "../components/Home/Service";
import Subscription from "../components/Home/Subscription";
import Textstimonial from "../components/Home/Textstimonial";
import "./Home.css";


const Home = () => {
  return (
    <div className="home_container">
      
      <CountClient/>
      <About/> 
      <Choose/>
      <Service/>
      <EXplore/> 
      <Location/>
      <Subscription/>  
      <Textstimonial/>
    </div>
  );
};

export default Home;
