import "./Nav.css"
const Nav = () => {
  return (
    <section className="navSection">
      <nav>
        <p>CRida</p>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Car Rentals</li>
            <li>Car Sales</li>
            <li>Co-Ride</li>
            <li>Ride Hailing</li>
        </ul>
        <div className="nav_button_container">
            <button>Sign In</button>
            <button className="sign_up">Sign Up</button>

        </div>
    </nav>
    </section>
  )
}

export default Nav
