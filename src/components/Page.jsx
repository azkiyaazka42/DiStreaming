import Hero from './Hero.jsx';
import ContentRows from './ContentRows.jsx';
import Features from './Features.jsx';
import Discover from './Discover.jsx';
import Footer from './Footer.jsx';

function Page({navbar, handleNavBarOpen, slideIndex, onNext, onPrev}) {
  return (
    <div>
      <Hero
        navbar={navbar}
        handleNavBarOpen={handleNavBarOpen}
      />
          
      <ContentRows
        slideIndex={slideIndex}
        onNext={onNext}
        onPrev={onPrev}
      />
    
      <Features/>

      <Discover/>

      <Footer/>
    </div>
  )
};

export default Page;