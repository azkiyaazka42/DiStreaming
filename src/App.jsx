import Page from './components/Page.jsx';
import { useState } from "react";

function App() {
  const [navbar, setNavbar] = useState(false);

  function handleNavBarOpen() {
    setNavbar(!navbar);
  }

  const [slideIndex, setSlideIndex] = useState(0);

  const totalCard = 10;
  const visibleCard = 5;

  const maxSlide = totalCard - visibleCard

  function handleNext() {
    if (slideIndex < maxSlide) {
      setSlideIndex(slideIndex + 2)
    }
  }

  function handlePrev() {
    setSlideIndex(slideIndex - 2)
  }

  return (
    <div>
      <Page
          navbar={navbar}
          handleNavBarOpen={handleNavBarOpen}
          slideIndex={slideIndex}
          onNext={handleNext}
          onPrev={handlePrev}
      />
    </div>
  )
}

export default App;
