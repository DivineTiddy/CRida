import BgCar from "./BgCar";
import HerroBgPhoto from "./HerroBgPhoto";
import "./HerroSection.css";

const HerroSection = () => {
  return (
    <section className="herroSection">
      {
        // HERRO TEXT CONTAINER
      }
      <div className="herroText">
        <svg className="herroBg">
          <HerroBgPhoto />
        </svg>
        <div className="herroContent">
          <div className="contentContainer">
            <section className="content-1">
              <div>
                <svg
                  width="60"
                  height="3"
                  viewBox="0 0 60 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.5H60" stroke="#5810BF" strokeWidth="3" />
                </svg>
                <p>ENJOY YOUR RIDE</p>
              </div>
              <p className="feel">
                Feel the Difference <br /> With CRida Rentals
              </p>
            </section>
            <section className="content-2">
              <svg
                width="4"
                height="60"
                viewBox="0 0 4 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 0L2 60" stroke="#5810BF" strokeWidth="3" />
              </svg>
              <p>
                Safety measures for all tripsIn order to better protect our
                customers and our bus partners, we have implemented new measures
                in line with the guidelines from NCDC
              </p>
            </section>
          </div>
        </div>
      </div>
      {
        // HERRO PHOTO CONTAINER
      }
      <div className="herroText herroPhoto">
     <BgCar/>

        
        <div className="playIcon">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 0C16.119 0 0 16.119 0 36C0 55.881 16.119 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM22.5 54V18L54 36L22.5 54Z" fill="#F5F5F5"/>
</svg>


        </div>
      </div>
    </section>
  );
};

export default HerroSection;
