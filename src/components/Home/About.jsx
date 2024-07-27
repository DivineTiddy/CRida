import "./About.css";
import AboutPhoto from "./AboutPhoto";
const About = () => {
  return (
    <div className="about">
      <section className="aboutPhoto">
        <AboutPhoto/>
      </section>
      <section className="aboutContent">
        <div>
          <section>
            <div className="aboutIcon">
              <svg
                width="60"
                height="3"
                viewBox="0 0 60 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5H60" stroke="#BF5B12" strokeWidth="3" />
              </svg>
              <h2>WHO WE ARE</h2>
            </div>
            <p className="aboutContentDetails">
              CRida is your reliable transportation partner, dedicated to
              ensuring safe and comfortable journeys. We create value by being
              proactive in maintaining quality fleet at reduced costs in order
              to provide efficient services by making sure we are at your
              service when needed. Meet our team and discover our commitment to
              excellence.
            </p>
            <button className="aboutBtn">More About Us</button>
          </section>
        </div>
        <svg
          width="149"
          height="108"
          viewBox="0 0 149 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M71.5 55L149 0V108H0L71.5 55Z" fill="#070125" />
        </svg>
      </section>
    </div>
  );
};

export default About;
