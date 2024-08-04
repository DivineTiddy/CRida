import Charts from "./Charts";
import Accura from "./image/image 171.jpg";
import Kia from "./image/image 134.jpg";
import Mercedes from "./image/image 166.jpg";
import Dodge from "./image/image 169.jpg";
import Toyota from "./image/image 177.jpg";
import Lexus from "./image/image 179.jpg";

const items = [
  {
    name: " Accura ILX 2020",
    image: Accura,
    price: 250000.0,
    booked: 4,
    available: 5,
  },
  {
    name: "Dodge Charger 2023",
    image: Dodge,
    price: 200000.0,
    booked: 4,
    available: 5,
  },
  {
    name: " Kia Sportage",
    image: Kia,
    price: 250000.0,
    booked: 4,
    available: 5,
  },
  {
    name: " Mercedes Benz V Cl 2020",
    image: Mercedes,
    price: 250000.0,
    booked: 3,
    available: 7,
  },
  {
    name: "Lexus RX 350",
    image: Lexus,
    price: 210000.0,
    booked: 3,
    available: 5,
  },
  {
    name: " Toyota Corolla 2018",
    image: Toyota,
    price: 200000.0,
    booked: 3,
    available: 5,
  },
];

const EXplore = () => {


  return (
    <div className=" w-[90%] h-auto ">
      <section className="flex justify-between items-end w-[100%] h-auto ">
        <div className="w-[25%] h-auto">
          <p className="m-0 text-bold text-[32px] text-Bg leading-[44px]">
            Explore Our Vehicles
          </p>
          <p className="text-Text text-[20px] leading-[27px]">
            Discover your ideal ride with CRida&apos;s diverse fleet. From sleek
            sedans to spacious SUVs and luxurious vans.{" "}
          </p>
        </div>
        <button className="text-[24px] leading-[33px] w-[186px] h-[49px] text-[white] bg-Button">
          See All Cars
        </button>
      </section>
      <ul className="grid  grid-cols-3 gap-8  my-10  w-[100%] h-auto ">
        {items.map((item) => (
          <Charts
            key={item.name}
           price={item.price}
          />
        ))}

        {/* <li className="w-[400px] h-[100%] border-solid border-2 border-sky-800"></li>
        <li className="w-[400px] h-[100%] border-solid border-2 border-sky-800"></li> */}
      </ul>
    </div>
  );
};

export default EXplore;
