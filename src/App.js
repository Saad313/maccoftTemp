import './App.css';
import { AboutUs } from './components/AboutUs/AboutUs';
import { ContactUs } from './components/ContactUs/ContactUs';
import { DemoSlider } from './components/DemoSlider/DemoSlider';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HerroBanner';
import { LetsDiscussProject } from './components/LetsDiscussProject/LetsDiscussProject';

function App() {
  return (
    <div className="App">
    <Header />
    <HeroBanner />
    <AboutUs />
    <DemoSlider/>
    <ContactUs/>
    <LetsDiscussProject/>
    <Footer />
   
   </div>
  );
}

export default App;
