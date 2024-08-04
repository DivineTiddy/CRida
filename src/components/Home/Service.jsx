import ServicePhoto from "./image/ServicePhoto";

const Service = () => {
  return (
    <div className="w-[100%] h-auto flex flex-col items-center">
      <section className="w-[100%] ">
        <svg
          width="149"
          height="108"
          viewBox="0 0 149 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M77.5 55L0 0V108H149L77.5 55Z" fill="#070125" />
        </svg>
      </section>
      <div className="w-full  h-[362px] flex flex-col items-center ">
        <ServicePhoto />
        <div className="relative bg-Bg w-[100%] h-[100%] flex justify-center items-center">
          <section className="flex-col  flex items-center w-[411px] h-[115px] ">
            <div className=" flex items-center justify-center w-[272px] h-[53px] ">
              <svg
                width="61"
                height="3"
                viewBox="0 0 61 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 1.5H60.5" stroke="#BF5B12" strokeWidth="3" />
              </svg>
              <p className="text-Accent text-[24px]">OUR SERVICES</p>
            </div>
            <p className="text-[20px] text-[#F5F5F5] text-center">
              Explore the diverse range of transportation solutions offered by
              CRida
            </p>
          </section>
        </div>
      </div>
      <ul className="mt-[-70px] w-[80%] h-auto relative flex justify-between">
        <li className="bg-[#F5F5F5]    h-auto w-[24%] flex items-center flex-col">
          <div className="text-[24px] text-[#F5F5F5] font-bold h-[49px] flex justify-center items-center bg-[#5810BF] w-[100%]">
            Car Rentals
          </div>
          <p className="text-[20px] my-5 text-[#363247] w-[90%] m-0 leading-[27px]">
            Experience the freedom of exploring your destination at your own
            pace with CRida&apos;s car rental service. Choose from a variety of
            vehicles to suit your preferences and enjoy
          </p>
        </li>
        <li className="bg-[#F5F5F5]    h-auto  w-[24%] flex items-center flex-col">
          <div className="text-[24px] text-[#F5F5F5] font-bold h-[49px] flex justify-center items-center bg-[#5810BF] w-[100%]">
            Car Sales
          </div>
          <p className="text-[20px] my-5 text-[#363247] w-[90%] leading-[27px]">
            Experience the freedom of exploring your destination at your own
            pace with CRida&apos;s car rental service. Choose from a variety of
            vehicles to suit your preferences and enjoy{" "}
          </p>
        </li>
        <li className="bg-[#F5F5F5]    h-auto  w-[24%] flex items-center flex-col">
          <div className="text-[24px] text-[#F5F5F5] font-bold h-[49px] flex justify-center items-center bg-[#5810BF] w-[100%]">
            Car Sharing
          </div>
          <p className="text-[20px] my-5 text-[#363247] w-[90%] leading-[27px]">
            Planning a group trip or corporate event? CRida&apos;s bus rental
            service has you covered. From spacious coaches to comfortable mini
            busses, we provide reliable transportation{" "}
          </p>
        </li>
        <li className="bg-[#F5F5F5]    h-auto  w-[24%] flex items-center flex-col">
          <div className="text-[24px] text-[#F5F5F5] font-bold h-[49px] flex justify-center items-center bg-[#5810BF] w-[100%]">
            Car Hailing
          </div>
          <p className="text-[20px] my-5 text-[#363247]  w-[90%] leading-[27px]">
            Take control of your travel itinerary with CRida&apos;s rent and
            self-drive options. Whether you&apos;re traveling for business or
            leisure, our fleet of well-maintained vehicles is available for{" "}
          </p>
        </li>
      </ul>
      </div>
  );
};

export default Service;
