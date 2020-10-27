import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import ProductInfo from './ProductInfo';
import Sponsors from './Sponsors';
import Testimonial from './Testimonial';
import TextContent from './TextContent';
import VideoContent from './VideoContent';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* Sponsors */}
      <Sponsors/>
      {/* VideoContent */}
      <VideoContent/>
      {/* TextContent */}
      <TextContent/>
      {/* Testimonial */}
      <Testimonial/>
      {/* ProductInfo */}
      <ProductInfo/>
      {/* Testimonial */}
      {/* FreeTrial */}
      {/* Footer */}
    </div>
  );
}

export default App;
