import imageOne from "./image/image 31.jpg"
import imageTwo from "./image/image 32.jpg"
import imageThree from "./image/image 33.jpg"
import imageFour from "./image/image 34.jpg"





const commentOne = [
  {
    id: 1,
    image:imageOne,
    name: "Benson Jonas",
    ceo: "CEO Benson Enterprise",
    contents:
      "I can't say enough good things about CRida. Their customer service is exceptional, and their drivers are courteous and professional. I wouldn't hesitate to recommend them to anyone in need of reliable transportation.",
  },
  {
    id: 2,
    image:imageTwo,
    name: "Benson Jonas",
    ceo: "CEO Benson Enterprise",
    contents:
      "I was pleasantly surprised by how affordable CRida's rates are, especially considering the level of service they provide. It's refreshing to find a transportation company that offers such great value for money.",
  },
  {
    id: 3,
    image:imageThree,
    name: "Benson Jonas",
    ceo: "CEO Benson Enterprise",
    contents:
      "I rely on CRida for all my transportation needs. Their vehicles are always clean and well-maintained, and their drivers are friendly and punctual. I feel safe and comfortable every time I ride with them.",
  },
  {
    id: 4,
    image:imageFour,
    name: "Benson Jonas",
    ceo: "CEO Benson Enterprise",
    contents:
"CRida exceeded my expectations in every way. From the ease of booking to the professionalism of the driver, everything was top-notch. Their vehicles are always clean and well-maintained  I'll definitely be using their services again!"  },
];

const Comments = () => {
  return (
    <ul className="flex justify-between w-full h-full">
      {commentOne.map((items) => (
        <li
          key={items.id}
          className="flex flex-col justify-between items-center bg-[#F5F5F5] w-[24.5%] h-auto "
        >
          <div className="w-[93%] h-auto flex ">
            <img className=" w-[71px] h-[68px] rounded-full" src={items.image}/>
            <span className="flex flex-col justify-between h-[85px]">
              <p>{items.name}</p>
              <p>{items.ceo}</p>
              <span className="flex">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#BF5B12"
                  />
                </svg>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#BF5B12"
                  />
                </svg>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#BF5B12"
                  />
                </svg>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                    fill="#BF5B12"
                  />
                </svg>
              </span>
            </span>
          </div>
          <p className="w-[93%] h-full my-5 text-[20px] text-Text leading-[27px] ">
            {items.contents}
          </p>
          <div className="w-full h-[44px] bg-[#070125] "></div>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
