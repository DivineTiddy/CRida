
import Image86 from './images/image86.png';


function Hero() {
  return (
    <div
      style={{ backgroundImage: `linear-gradient(to top, rgba(4, 0, 31, 0.5)50%, rgba(4, 0, 31, 0.5)50%), url(${Image86})` }}
      className="bg-cover bg-center h-[608px] flex items-center justify-center"
    >
        <div className='w-[1030px] h-[181px] flex justify-center items-center flex-col'>
      <h1 className="text-white mb-8 text-4xl font-bold">Find the Car of Your Choice</h1>
        <FindCar />
        </div>
    </div>
  );
}


function FindCar(){
    return(
<div className="w-[100%] h-[76px] flex flex-row justify-center items-center">
    <div className='relative w-[900px] h-[60px] flex items-center'>
  <svg 
    className="absolute left-3"
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2788_722)">
      <path 
        d="M9.68198 0C4.54933 0 0.387695 4.16168 0.387695 9.29429C0.387695 14.4269 4.54933 18.5886 9.68198 18.5886C11.6556 18.5886 13.4861 17.9729 14.9906 16.9243L22.0193 23.9519C22.0827 24.0153 22.1855 24.0153 22.2456 23.9562L23.5698 22.6321C23.631 22.5709 23.6256 22.4659 23.5655 22.4057L16.6286 15.4689C18.0894 13.8277 18.9762 11.6648 18.9762 9.29425C18.9763 4.16168 14.8146 0 9.68198 0ZM9.68198 17.4951C5.15294 17.4951 1.48113 13.8233 1.48113 9.29429C1.48113 4.76525 5.1529 1.09347 9.68198 1.09347C14.2111 1.09347 17.8828 4.76525 17.8828 9.29429C17.8828 13.8233 14.211 17.4951 9.68198 17.4951Z" 
        fill="#939294"
      />
    </g>
    <defs>
      <clipPath id="clip0_2788_722">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  <input 
    type="text" 
    className="pl-10 w-full h-full  border border-gray-300 rounded-lg focus:outline-none focus:border- bg-transparent text-white placeholder:font-light"
    placeholder="Find a car by model and year..."
  />
    <button className='bg-[#5810BF] absolute right-3 border-none text-white py-2 px-2 rounded-md w-[106px] tracking-wide hover:bg-[#5810BF] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#5810BF] focus:ring-offset-2'>Search</button>
</div>
    </div>
    )
    
}
export default Hero;
