import { useState } from "react"

const freq = [
    {
        id:1,
        question:"Can I get my Car delivered to me?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit exercitationem incidunt, iure autem hic suscipit est et enim reiciendis. Quisquam molestiae magni aut in est veritatis recusandae numquam deleniti voluptates?"
    },
    {
        id:2,
        question:"What Is the cancellation policy on CRida",
        answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere repellendus aliquid unde nulla, quisquam deleniti quasi modi, cupiditate adipisci, maxime corrupti illum quos recusandae accusamus labore a enim. Quasi. Error adipisci fugiat impedit quod nulla repudiandae quibusdam culpa modi dolores sapiente quae porro aspernatur ratione aut, odio dolorum asperiores reprehenderit cumque blanditiis. Aut numquam nihil perferendis, dicta ut magnam!"
    },
    {
        id:3,
        question:"Can I get my Car delivered to me?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus veniam, repellendus sit consequatur dolorum? Quia atque aliquid quaerat corporis totam aspernatur, enim laudantium tempora excepturi commodi, similique dolorum quo.Earum architecto nesciunt quod repellat ipsam ducimus dolorum. Exercitationem molestias soluta aspernatur beatae. Quasi iusto perspiciatis distinctio nostrum officiis blanditiis debitis esse ducimus odio similique magnam, eaque et doloribus nesciunt. Excepturi aut accusantium consequuntur iste distinctio, repudiandae minus rem atque culpa a praesentium rerum cum quaerat repellendus enim fugiat, debitis veritatis vitae qui eum? Quam facilis laudantium adipisci ut labore. Pariatur dolorem reprehenderit a, beatae, nisi quae et consectetur saepe praesentium natus perferendis amet. Illum, dignissimos quis. Dolorem praesentium architecto optio deserunt libero soluta magnam veniam necessitatibus dolore, error autem."
    },
    {
        id:4,
        question:"What happens if I have an accident?",
        answer:"    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ab modi omnis harum facere esse reiciendis autem maxime, est accusantium suscipit, ad optio eum quaerat exercitationem fuga perspiciatis ut quis!Officia quod, rem architecto vero molestiae aliquam. Necessitatibus, alias quos nihil omnis vero ea eius optio, expedita aliquid, dicta possimus consequatur soluta voluptas consequuntur molestiae quia. Quasi error ducimus voluptates!Officiis nobis aliquam a harum voluptatibus, quod, repudiandae eligendi iusto dolores corrupti quidem! Optio eius animi rerum, sapiente maxime numquam cupiditate adipisci beatae hic reiciendis enim! Soluta quia labore atque.Culpa minus quam unde libero, assumenda cupiditate totam maxime ut fugiat atque eligendi dolore dolores nulla possimus, magnam sit excepturi reprehenderit iste, alias nihil harum aliquam suscipit. Recusandae, perspiciatis quaerat! Debitis accusantium ea alias magni sequi eligendi cumque eos saepe eveniet nostrum, voluptatum voluptatem cupiditate? Provident libero, voluptas distinctio quia ut recusandae laboriosam, delectus voluptates, fugiat vitae error quos sapiente?"
    },
    {
        id:5,
        question:"When can payment be made?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit exercitationem incidunt, iure autem hic suscipit est et enim reiciendis. Quisquam molestiae magni aut in est veritatis recusandae numquam deleniti voluptates?"
    },
    {
        id:6,
        question:"Can the vehicle be rented for 24hrs?",
        answer:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a fugit minima illum ducimus velit necessitatibus aliquam veritatis soluta corporis, tempora numquam provident quos esse reiciendis unde porro nostrum placeat.Voluptatum dicta ex fugiat eum vero labore tempore excepturi qui vitae veritatis odit placeat sapiente, fuga impedit nisi nesciunt eligendi quam? Aliquam, aspernatur soluta hic ipsum quis dolorem possimus sapiente?"
    },
]

function Accordion(){
    const [selectedId, setselectedId] = useState(null);

    function handClickQuestion(id){
        setselectedId(id !== selectedId ? id : null);
    }
    return(
      <section className="section section--4">
      <h1 className='title--heading'>Frequently Asked Questions</h1>
      {freq.map((freq) => (<div className="each--section" key={freq.id}>
      <div className="freq--question" onClick={() =>handClickQuestion(freq.id)}>
        <h3 className="question--h3">{freq.question}</h3>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8125 8.09375L12 16.9061" stroke="#939294" stroke-miterlimit="10" stroke-linecap="square"/>
        <path d="M12 16.9061L3.1875 8.09375" stroke="#939294" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
      </div>
      <div className={freq.id === selectedId ? 'freq-answer' : ""}>
        {freq.id === selectedId ? freq.answer : null }
      </div>
      </div>))}
    </section> 
    )
  }

export default Accordion