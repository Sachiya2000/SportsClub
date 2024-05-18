

import About from './components/About/About';
import AnimatedImg from './components/AnimatedImg/AnimatedImg';
import Slider from './components/Card/Slider';
import CardSlider from './components/CardSlider/CardSlider';
import Club from './components/Club/Club';
import HeroImage from './components/Hero/Hero';
import Listcard from './components/listcard/Listcard';
import NavBar from './components/NavBar/NavBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App" style={{backgroundColor: `#C6DBEA`}}>
    <NavBar />
    <HeroImage />
    <CardSlider />
    <Listcard />
    <About />
    <Club />
    <AnimatedImg />
    <Footer />
    </div>
  );
}

export default App;
