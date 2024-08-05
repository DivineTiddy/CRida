import Image53 from './images/image 53.png';
import Image196 from './images/image 196.png';
import Image197 from './images/image 197.png';
import Image201 from './images/image 201.png';
import Image203 from './images/image 203.png';


const cars =[
{    id:1,
    carName:'Sedan',
    carImage:Image203,
},
{    id:2,
    carName:'Suv',
    carImage:Image53,
},
{    id:3,
    carName:'Crossover',
    carImage:Image196,
},
{    id:4,
    carName:'Hatchback',
    carImage:Image197,
},
{    id:5,
    carName:'Mini van',
    carImage:Image201,
},
]

function Cars() {
  return (
    <div className="w-[96%] h-[129px] flex flex-row justify-center items-center bg-inherit">
      {cars.map((car) => (
        <div className="w-[190px] h-[129px] flex flex-col items-center mx-4" key={car.id}>
          <img src={car.carImage} alt={car.carName} className="w-full h-auto" />
          <span className='text-[#363247] font-medium'>{car.carName}</span>
        </div>
      ))}
    </div>
  )
}

export default Cars