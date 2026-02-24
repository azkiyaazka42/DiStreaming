import Nav from './Nav.jsx';
import './Header.css'


function Header({navbar, handleNavBarOpen}) {

  return (
    <div>
      <div className="container-fluid">
        <div className="nav-container-fluid">
          
          <div className="nav-menu">
            <div class="hamburger" onClick={handleNavBarOpen}>
              {navbar ? "✕" : "☰"}
            </div>
            <p>DiStreaming</p>
          </div>

          <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>

          <div className="btn-auth">
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>

        </div>

      </div>
      
      {navbar && <Nav/>}

    </div>
  )
}

export default Header;