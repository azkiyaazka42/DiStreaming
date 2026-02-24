import './Footer.css'

function Footer() {
  return (
    <div id="about-us" className="footer">

      <div className="footer-up">

        <div className="footer-leftSide">
          <h1>DiStreaming</h1>
          <p>Follow us</p>

          <div className="logos">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffff" d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffff" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffff" d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffff" d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>
          </div>

          <p>Available on</p>

          <div className="store">
            <img className="play-store" src="./images/playstore.png"/>
            <img className="app-store" src="./images/appstore.png"/>
          </div>
        </div>

        <div className="footer-rightSide">
          <div className="nav-foot">
            <h1>Company</h1>
            <ul className="nav-footer">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our Culture</a></li>
              <li><a href="#">Press Room</a></li>
              <li><a href="#">Advertise with Us</a></li>
            </ul>
          </div>

          <div className="nav-foot">
            <h1>Plex Pass</h1>
            <ul className="nav-footer">
              <li><a href="#">Go Premium</a></li>
              <li><a href="#">Plexamp</a></li>
              <li><a href="#">Plex Labs</a></li>
              <li><a href="#">Go Perks</a></li>
            </ul>
          </div>

          <div className="nav-foot">
            <h1>Downloads</h1>
            <ul className="nav-footer">
              <li><a href="#">Plex Media Server</a></li>
              <li><a href="#">Apps & Devices</a></li>
              <li><a href="#">Plexamp</a></li>
              <li><a href="#">Where to Watch</a></li>
            </ul>
          </div>

          <div className="nav-foot">
            <h1>Support</h1>
            <ul className="nav-footer">
              <li><a href="#">Finding Help</a></li>
              <li><a href="#">Support Library</a></li>
              <li><a href="#">Community Forums</a></li>
              <li><a href="#">Billing Questions</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>

          <div className="nav-foot">
            <h1>Watch Free</h1>
            <ul className="nav-footer">
              <li><a href="#">Tv Channel Finder</a></li>
              <li><a href="#">What to Watch</a></li>
              <li><a href="#">What to Watch on Hulu</a></li>
              <li><a href="#">A24 Collection</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-down">
      </div>

    </div>
  )
}

export default Footer;