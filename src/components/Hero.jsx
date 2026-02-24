import Header from './Header.jsx';
import './Hero.css'

function Hero({navbar, handleNavBarOpen}) {
  return (
    <div id="home" className="hero">
      <section className="hero-bg">
        
        <Header
          navbar={navbar}
          handleNavBarOpen={handleNavBarOpen}
        />

        <div className="hero-text">
          <div>
            <h1 className="text-large">Your Gateway to
              <br/>Every Epic Trailer</h1>
            <p className="p-large">Stream upcoming movie previews, save your
              <br/>favorites, and never miss a premiere again</p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero;