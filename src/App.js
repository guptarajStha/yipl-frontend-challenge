import "./App.css";
import Carousel from "./Section/Carousel/Carousel";
import Contact from "./Section/Contact Us/Contact";
import Feature1 from "./Section/Feature1/Feature1";
import Feature2 from "./Section/Feature2/Feature2";
import Footer from "./Section/Footer/Footer";
import Hero from "./Section/Hero/Hero";
import News from "./Section/News/News";
import Resources from "./Section/Resources/Resources";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="not-white-bg-section">
        <div className="not-white-bg-section-inner">
          <Feature1 />
        </div>
      </div>
      <div className="white-bg-section">
        <div className="white-bg-section-inner">
          <Feature2 />
        </div>
      </div>
      <div className="not-white-bg-section">
        <div className="not-white-bg-section-inner">
          <Carousel/>
        </div>
      </div>
      <div className="white-bg-section">
        <div className="white-bg-section-inner">
          <News />
        </div>
      </div>
      <div className="not-white-bg-section">
        <div className="not-white-bg-section-inner">
          <Resources />
        </div>
      </div>
      <div className="white-bg-section">
        <div className="white-bg-section-inner">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
