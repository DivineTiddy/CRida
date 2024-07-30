import  './Rentals.css';
import Cars from './DisplayCars/Cars';
function Rentals() {
  return (
    <>
   <HeroSection/>
   <SearchBar/>
   <Cars/>
    </>
  )
}
 function HeroSection(){
  return(
    <section className="section section--1">
        <div className="text--container">
          <h1>Our Fleets</h1>
        </div>
        </section>
  )
}


function SearchBar(){
return(
  <section className="section section--2">
  <div className="search--bar">
    <h3>Sort by</h3>
    <div className="search">
    <input type="text"  placeholder='price' autoFocus />
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className='search--icon' xmlns="http://www.w3.org/2000/svg">
    <g>
    <path d="M5.11345 10.3181H20.3859C20.6814 10.3181 20.9372 10.2102 21.153 9.99426C21.3687 9.77838 21.477 9.52273 21.477 9.22727C21.477 8.9318 21.3688 8.67628 21.153 8.4601L13.5167 0.823823C13.301 0.60818 13.0454 0.5 12.7497 0.5C12.4541 0.5 12.1985 0.60818 11.9826 0.823823L4.34628 8.4601C4.13034 8.67604 4.02246 8.9318 4.02246 9.22727C4.02246 9.52267 4.13034 9.77838 4.34628 9.99426C4.56246 10.2102 4.81805 10.3181 5.11345 10.3181Z" fill="#939294"/>
    <path d="M20.3859 14.6821H5.11345C4.81781 14.6821 4.56222 14.7901 4.34628 15.0058C4.13034 15.2217 4.02246 15.4773 4.02246 15.7728C4.02246 16.0682 4.13034 16.324 4.34628 16.5398L11.9826 24.176C12.1987 24.3919 12.4543 24.5 12.7497 24.5C13.0451 24.5 13.301 24.3919 13.5167 24.176L21.153 16.5398C21.3687 16.324 21.477 16.0682 21.477 15.7727C21.477 15.4773 21.3688 15.2217 21.153 15.0057C20.9372 14.7898 20.6814 14.6821 20.3859 14.6821Z" fill="#939294"/>
    </g>
    <defs>
    <clipPath id="clip0_2682_399">
    <rect width="24" height="24" fill="white" transform="translate(0.75 0.5)"/>
    </clipPath>
    </defs>
  </svg>
    <button className='car--rentail--button' style={{width:"91px"}}>Search</button>
    </div>
  </div>
</section>
)
}

export default Rentals