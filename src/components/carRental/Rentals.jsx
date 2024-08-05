import { useState } from 'react';
import  './Rentals.css';
import Cars from './Cars';
import Accordion from './Accordion';
import SearchBar from './SearchBar';
import HeroSection from './HeroSection';

function Rentals() {
  const [price, setPrice] = useState('');


  return (
    <div className='rental'>
   <HeroSection/>
   <SearchBar prices={price} onSetPrice={setPrice}/>
   <Cars prices={price} />
   <Accordion/>
    </div>
  )
}






export default Rentals