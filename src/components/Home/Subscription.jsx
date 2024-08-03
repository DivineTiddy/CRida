import emailPhoto from "./image/image 129.jpg"

const Subscription = () => {
  return (
    <div className="flex flex-col justify-around items-center bg-[#CBC3F3] h-[462px] w-[70%] ">
        <p className="w-[90%] text-[#070125] font-bold text-[32px] leadding-[44px]">Subscribe for exclusive offers and deals!</p>
        <section className="flex flex-col justify-between items-end  w-full h-[278px] ">
            <div className="w-[135px] h-[132px] ">
                <img src={emailPhoto} className="mix-blend-multiply"/>
            </div>
            <form className="w-full h-[122px] flex flex-col justify-between ">
                <input type="text" placeholder="Email Address" className="w-full h-[49px] text-Text outline-none bg-inherit border-solid border-[1px] border-[#363247] rounded-[4px] "/>
                <button type="submit" className=" w-full h-[33px] bg-Button text-[#F5F5F5] text-[24px] ">Sign Me Up</button>

            </form>
        </section>
    </div>
  )
}

export default Subscription