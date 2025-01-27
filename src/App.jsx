import './App.css';
import Available from './components/available/Available';
import Footer from './components/footer/footer';
import Frame from './components/frame/Frame';
import Hero from './components/hero/Hero';
import ItCards from './components/itCards/ItCards';
import LearningModel from './components/learningmodal/LearningModel';
import OurLurrels from './components/lurrels/OurLurrels';
import MentorshipSection from './components/mentorship/MentorshipData';
import Navbar from './components/navbar/Navbar';
import Spotlight from './components/spotLight/Spotlight';
import AdvantageSection from './components/swiper/AdvantageSection';
import WhyUs from './components/whyus/WhyUs';

function App() {
 

  return (
    <>
       <Navbar/>
       <Hero/>
       <Frame/>
       <ItCards/>
       <OurLurrels/>
       <WhyUs/>
       <AdvantageSection/>
        {/* <LearningModel/> */}
        


       <Available/>
       <MentorshipSection/>
       <Spotlight/>
       <Footer/>
    </>
  )
}

export default App
