import './Nav.css'

function Nav() {
  return (
    <div className="nav-container open">
        <ul className="nav-active">
          <li><a href="#home">Home</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about-us">About Us</a></li>
        </ul>
    </div>
  )
}

export default Nav;