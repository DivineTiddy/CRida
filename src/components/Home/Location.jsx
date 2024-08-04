import locationBg from "./image/image 181.png"


const Location = () => {
  return (
    <div className="w-full h-[638px] flex flex-col justify-between">
      <img  className="w-full h-[496px] bg-Text" src={locationBg} />
        <p className="h-auto w-auto mx-20 font-bold text-[40px] leading-[55px] ">
        CRida Services<br/>
        Available all over Abuja F.C.T, Nigeria
        </p>
    </div>
  )
}

export default Location