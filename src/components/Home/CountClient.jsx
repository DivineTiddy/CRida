import "./CountClient.css"

const CountClient = () => {
  return (
    <ul className="countContainer max-[700px]:w-[95%]">
        <li>
            <h2>150+</h2>
            <p>Cars</p>
        </li>
        <li>
            <h2>1000+</h2>
            <p>Happy clients</p>
        </li>
        <li>
            <h2>5</h2>
            <p>Branches</p>
        </li>
        <li>
            <h2>50+</h2>
            <p className="max-[700px]:text-center">Professional drivers</p>
        </li>

    </ul>
  )
}

export default CountClient