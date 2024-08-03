import Accura from "./image/image 171.jpg"
import Kia from "./image/image 134.jpg"
import Mercedes from "./image/image 166.jpg"
import Dodge from "./image/image 169.jpg"
import Toyota from "./image/image 177.jpg"
import Lexus from "./image/image 179.jpg"





const items = [
    {
        name: " Accura ILX 2020",
        image: Accura ,
        price: 250000.00 ,
        booked: 4,
        available: 5
    },
    {
        name: "Dodge Charger 2023",
        image: Dodge ,
        price: 200000.00 ,
        booked: 4,
        available: 5
    },
    {
        name: " Kia Sportage",
        image: Kia ,
        price: 250000.00,
        booked: 4,
        available: 5
    },
    {
      name: " Mercedes Benz V Cl 2020",
      image: Mercedes ,
      price: 250000.00 ,
      booked: 3,
      available: 7
  },
  {
      name: "Lexus RX 350",
      image: Lexus ,
      price: 210000.00 ,
      booked: 3,
      available: 5
  },
  {
      name: " Toyota Corolla 2018",
      image: Toyota ,
      price: 200000.00,
      booked: 3,
      available: 5
  },
]



const EXplore = () => {
  return (
    <div className="mt-[100px] w-[90%] h-auto ">
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
       
       {
        items.map((item )=> 
          <li key={item.name}  className="flex flex-col justify-between  items-center bg-[#F5F5F5] w-[100%] h-[100%] ">
        <section className=" w-[100%] h-[272px]  relative">
          {
            <img
              className="  w-full h-full  absolute"
              src={item.image}
              width="100%"
              alt="explorer cars"
            />
          }

          <div className=" flex justify-between items-center w-full h-full  relative">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66688 0L10.5469 1.88L4.44021 8L10.5469 14.12L8.66688 16L0.666877 8L8.66688 0Z"
                fill="#F5F5F5"
              />
            </svg>

            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.33312 0L0.453125 1.88L6.55979 8L0.453125 14.12L2.33312 16L10.3331 8L2.33312 0Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </section>
        

        <section className="flex items-center my-3 justify-between w-[40px] h-[8px] ">
            
        <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.00098" cy="4" r="4" fill="#363247" />
            </svg>

            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#939294" />
            </svg>
          
          
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#939294" />
            </svg>
          
          
            
          
        </section>

      
        <section className="flex flex-col justify-around items-center w-[100%] h-[316px] ">
          <div className="w-[95%] h-[179px] ">
            <ul className="flex flex-col justify-between m-0 p-0 h-full list-none ">
              <li className="w-full h-auto">
                <p className="font-bold text-[24px] leading-[33px]">
                 {
                    item.name
                 }
                </p>
                <p className="font-semibold text-[24px] leading-[33px]">
                  ₦{item.price}/ day
                </p>
              </li>
              <li>
              
                <ul className="flex justify-between items-center w-[170px] h-[44px] m-0 p-0 list-none ">
                  <li className="flex flex-col items-center w-[18px] ">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.98813 8.34668C3.40796 8.35343 0.446284 11.1879 0.267423 14.77C0.262662 14.8717 0.278636 14.9732 0.314373 15.0685C0.350111 15.1638 0.404863 15.2508 0.475299 15.3243C0.545735 15.3977 0.630381 15.4561 0.724084 15.4958C0.817787 15.5355 0.918589 15.5557 1.02035 15.5552H12.9852C13.0865 15.5549 13.1866 15.5341 13.2796 15.494C13.3727 15.454 13.4566 15.3955 13.5264 15.3221C13.5962 15.2488 13.6504 15.162 13.6858 15.0671C13.7212 14.9723 13.737 14.8712 13.7323 14.77C13.5532 11.1834 10.5846 8.34708 6.99985 8.34668H6.98813Z"
                        fill="#5810BF"
                      />
                      <path
                        d="M7.00021 0.444336C5.1024 0.444336 3.55519 1.99883 3.55518 3.89875C3.55517 5.79867 5.10239 7.35852 7.00021 7.35852C8.89803 7.35852 10.4506 5.79867 10.4506 3.89875C10.4506 1.99883 8.89802 0.444336 7.00021 0.444336Z"
                        fill="#5810BF"
                      />
                    </svg>
                    <span>{item.available}</span>
                  </li>
                
                  <li className="w-[18px] flex flex-col items-center">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.69334 7.31156V6.99769C8.69334 6.61491 8.38312 6.30469 8.00062 6.30469C7.61784 6.30469 7.30762 6.61491 7.30762 6.99769V7.31156C7.30762 7.69434 7.61784 8.00456 8.00062 8.00456C8.38284 8.00456 8.69334 7.69434 8.69334 7.31156Z"
                        fill="#5810BF"
                      />
                      <path
                        d="M9.16835 7.69446C9.01479 8.19705 8.55214 8.56605 8.00032 8.56605C7.44823 8.56605 6.98557 8.19705 6.83201 7.69446H2.05948C1.75826 7.69446 1.47364 7.62443 1.21826 7.50293V10.6718C1.21826 11.2905 1.72451 11.7968 2.34326 11.7968H13.6568C14.2756 11.7968 14.7818 11.2905 14.7818 10.6718V7.50321C14.5262 7.62471 14.2418 7.69474 13.9406 7.69474L9.16835 7.69446Z"
                        fill="#5810BF"
                      />
                      <path
                        d="M13.8937 2.0044H11.1934C11.0303 0.984586 10.1469 0.202148 9.08182 0.202148H6.91816C5.85307 0.202148 4.96995 0.984586 4.80654 2.0044H2.10654C1.46191 2.0044 0.93457 2.51065 0.93457 3.1294V5.72618C0.93457 6.34746 1.43829 6.85118 2.05957 6.85118H6.77895C6.79498 6.52746 6.93391 6.23665 7.15357 6.02627C7.16032 6.0198 7.1682 6.01474 7.17523 6.00855C7.22388 5.96384 7.27451 5.92165 7.32991 5.88509C7.3496 5.87187 7.3721 5.86287 7.39263 5.85105C7.4382 5.8249 7.4832 5.79762 7.53241 5.77737C7.57095 5.76134 7.61257 5.75205 7.65307 5.73996C7.68795 5.72955 7.72113 5.71577 7.75741 5.70846C7.83588 5.69243 7.91716 5.68399 8.00013 5.68399C8.08338 5.68399 8.16438 5.69271 8.24285 5.70846C8.27885 5.71577 8.31204 5.72955 8.34691 5.73996C8.38741 5.75205 8.42904 5.76134 8.46757 5.77765C8.51651 5.7979 8.56123 5.8249 8.60679 5.85105C8.6276 5.86315 8.6501 5.87215 8.67007 5.88537C8.72548 5.92165 8.77582 5.96384 8.82448 6.00855C8.83151 6.01502 8.83966 6.02009 8.84641 6.02684C9.06635 6.23721 9.20501 6.52802 9.22104 6.85174H13.9404C14.5617 6.85174 15.0654 6.34802 15.0654 5.72674V3.12996C15.0657 2.51065 14.5384 2.0044 13.8937 2.0044ZM5.88963 2.0044C6.03307 1.57099 6.43723 1.25515 6.91816 1.25515H9.08182C9.56276 1.25515 9.96691 1.57099 10.1104 2.0044H5.88963Z"
                        fill="#5810BF"
                      />
                    </svg>

                    <span>{item.booked}</span>
                  </li>
                
                  <li className="w-[18px] flex flex-col items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25H13.3725L15.8025 5.82L14.745 4.755L11.25 8.25H9.75V6.75L13.245 3.255L12.18 2.1975L9.75 4.6275V1.5H8.25V4.6275L5.82 2.1975L4.755 3.255L8.25 6.75V8.25H6.75L3.255 4.755L2.1975 5.82L4.6275 8.25H1.5V9.75H4.6275L2.1975 12.18L3.255 13.245L6.75 9.75H8.25V11.25L4.755 14.745L5.82 15.8025L8.25 13.3725V16.5H9.75V13.3725L12.18 15.8025L13.245 14.745L9.75 11.25V9.75H11.25L14.745 13.245L15.8025 12.18L13.3725 9.75H16.5V8.25Z"
                        fill="#5810BF"
                      />
                    </svg>

                    <span>A/C</span>
                  </li>
                 
                  <li className="w-[18px] flex flex-col items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00024 5.63603V7.22752L10.62 10.5552H6.58792L7.07553 11.1599H10.9172L11.3508 12.0284H12.9423L11.8436 11.3915V11.4172L9.00024 5.63603ZM15.1089 4.53987L9.81078 1.47912C9.36498 1.2218 8.6355 1.2218 8.1897 1.47912L2.8916 4.53987C2.4458 4.7959 2.08105 5.42761 2.08105 5.94352V12.0592C2.08105 12.5752 2.4458 13.2056 2.8916 13.4616L8.1897 16.5217C8.6355 16.779 9.36434 16.779 9.81078 16.5217L15.1082 13.4545C15.5534 13.2036 15.9188 12.5668 15.9188 12.056V5.94224C15.9188 5.42761 15.5547 4.79719 15.1089 4.53987ZM11.2067 12.2915L10.7648 11.4012H7.2267L6.79377 12.2915H4.68186L8.15303 5.19409C8.34923 4.80362 8.65286 4.61514 9.00024 4.61514C9.34761 4.61514 9.6654 4.82614 9.8468 5.18766L13.318 12.2915H11.2067ZM6.57698 10.5546L6.58792 10.5552L6.58149 10.5462M9.00024 5.63475V5.63603V4.84029C8.68825 4.86152 8.5152 5.02877 8.36339 5.29702L5.0569 12.0367H6.64195L6.15756 11.4192L6.57827 10.5424L6.58149 10.5462L9.00024 5.6386L9.00024 5.63475ZM8.05204 9.72283L9.94781 9.72283L9.00024 7.76273"
                        fill="#5810BF"
                      />
                    </svg>

                    <span>Auto</span>
                  </li>
                </ul>
              </li>
             
              <li className=" flex items-center justify-between w-full h-auto ">
                <p className="text-[24px] text-Text">More details</p>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4133_446)">
                    <path
                      d="M8.99988 18.2351C7.27231 18.2351 5.58354 17.7228 4.14712 16.763C2.7107 15.8032 1.59114 14.4391 0.930033 12.843C0.268921 11.2469 0.0959444 9.49068 0.432976 7.7963C0.770008 6.10193 1.60191 4.54555 2.82349 3.32397C4.04506 2.1024 5.60144 1.2705 7.29581 0.933464C8.99019 0.596433 10.7465 0.76941 12.3425 1.43052C13.9386 2.09163 15.3028 3.21119 16.2625 4.64761C17.2223 6.08403 17.7346 7.7728 17.7346 9.50037C17.732 11.8162 16.8109 14.0363 15.1734 15.6738C13.5359 17.3114 11.3157 18.2325 8.99988 18.2351Z"
                      fill="#BF5B12"
                    />
                    <path
                      d="M8.99993 6.7147C9.49123 6.7147 9.88951 6.31643 9.88951 5.82513C9.88951 5.33382 9.49123 4.93555 8.99993 4.93555C8.50863 4.93555 8.11035 5.33382 8.11035 5.82513C8.11035 6.31643 8.50863 6.7147 8.99993 6.7147Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M9.86862 13.0897C9.66565 13.0197 9.4928 12.8823 9.37883 12.7003L9.79141 9.08563C9.79141 9.0771 9.79141 9.06858 9.79141 9.06005C9.79141 9.05152 9.7952 9.04631 9.79614 9.03873C9.82134 8.82145 9.77204 8.60205 9.6563 8.41643C9.54056 8.23082 9.36524 8.08999 9.15904 8.017C9.08964 7.99395 9.01805 7.97807 8.94541 7.96963C8.75261 7.94668 8.55738 7.98264 8.38541 8.07277C8.21343 8.1629 8.07277 8.30298 7.98193 8.47458C8.03242 8.48164 8.08209 8.4937 8.1302 8.51058C8.33216 8.58214 8.50451 8.71898 8.61999 8.89947L8.20172 12.5615C8.17619 12.7781 8.22481 12.997 8.33966 13.1823C8.45451 13.3677 8.6288 13.5087 8.83409 13.5823C8.83835 13.5875 8.83883 13.5823 8.83883 13.5823C8.90823 13.6054 8.97982 13.6212 9.05246 13.6297C9.24526 13.6526 9.44049 13.6167 9.61246 13.5265C9.78443 13.4364 9.92509 13.2963 10.0159 13.1247C9.9658 13.1179 9.91645 13.1062 9.86862 13.0897Z"
                      fill="#F5F5F5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4133_446">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            </ul>
          </div>
          <div className="w-[95%] h-auto ">
            <button className="w-[189px] h-[49px] rounded-[8px] bg-Button text-white">
              Book Now
            </button>
          </div>
        </section>
      </li>
         
        )
    }
  
                 
       
        {/* <li className="w-[400px] h-[100%] border-solid border-2 border-sky-800"></li>
        <li className="w-[400px] h-[100%] border-solid border-2 border-sky-800"></li> */}
      </ul>
    </div>
  );
};

export default EXplore;
