import herroBgOne from "./image/image 11.jpg";
import herroBgTwo from "./image/image 48.jpg";

import "./HerroSection.css";

const HerroSection = () => {
  return (
    <section className="flex  w-[100%] h-[800px]  ">
      <div className="w-[50%] h-full relative  ">
        <img src={herroBgOne} className="w-full h-full absolute" />
        <div className="flex justify-center items-center w-full h-full bg-Bg relative ">
          <section className=" flex flex-col justify-between w-[525px] h-auto">
            <span>
              <span className="flex items-center">
                <svg
                  width="60"
                  height="3"
                  viewBox="0 0 60 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.5H60" stroke="#5810BF" strokeWidth="3" />
                </svg>
                <p className="text-[24px] leading-[33px] text-[#F5F5F5]">
                  ENJOY YOUR RIDE
                </p>
              </span>
              <p className="font-bold text-[48px] leading-[65px] text-[#F5F5F5]">
                Feel the Difference <br /> With CRida Rentals
              </p>
            </span>
            <span className="w-full h-auto mt-10 flex justify-around items-center">
              <svg
                width="4"
                height="60"
                viewBox="0 0 4 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 0L2 60" stroke="#5810BF" strokeWidth="3" />
              </svg>
              <p className="text-[#939294] text-[20px] leading-[27px] w-[95%]">
                Safety measures for all tripsIn order to better protect our
                customers and our bus partners, we have implemented new measures
                in line with the guidelines from NCDC{" "}
              </p>
            </span>
          </section>
        </div>
      </div>
      <div className="w-[50%] h-full relative max-[770px]:w-[100%] ">
        <img src={herroBgTwo} className="w-full h-full absolute" />
        <div className="flex justify-center items-center w-full h-full bg-SecondBg relative ">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 0C16.119 0 0 16.119 0 36C0 55.881 16.119 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM22.5 54V18L54 36L22.5 54Z"
              fill="#F5F5F5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HerroSection;
