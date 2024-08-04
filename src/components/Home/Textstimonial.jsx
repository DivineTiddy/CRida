import Comments from "./Comments";

const Textstimonial = () => {
  return (
    <div className="w-[90%] h-auto flex flex-col justify-between items-center max-[900px]:w-[95%]  max-[800px]:w-[98%]">
      <section className="flex flex-col justify-between items-center w-[549px] h-[128px] ">
        <p className="text-Accent">TESTIMONIAL</p>
        <p className="font-bold text-[32px] leading-[44px] text-[#070125]">
          What Our Customers Are Saying
        </p>
        <p className="text-Text text-[20px] leading-[27px]">
          Here are some of our customers saying about our services.
        </p>
      </section>
      <section className="flex items-center w-full h-auto my-10 ">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12.5" fill="#070125" />
          <path
            d="M10.9998 7L9.58984 8.41L14.1698 13L9.58984 17.59L10.9998 19L16.9998 13L10.9998 7Z"
            fill="#F5F5F5"
          />
        </svg>

        <Comments />
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12.5" fill="#070125" />
          <path
            d="M10.9998 7L9.58984 8.41L14.1698 13L9.58984 17.59L10.9998 19L16.9998 13L10.9998 7Z"
            fill="#F5F5F5"
          />
        </svg>
      </section>
      <section className="flex justify-between items-center w-[80px] h-[10px] ">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#070125" />
        </svg>

        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#939294" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#939294" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#939294" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#939294" />
        </svg>
      </section>
    </div>
  );
};

export default Textstimonial;
