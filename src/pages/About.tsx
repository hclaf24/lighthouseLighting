import { useState } from "react";
import People from "../img/about.jpg"
import Loader from "./components/Loader"

const About = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {loaded ? null : (
        <Loader />
      )}
      <div className="p-8 flex justify-self-center items-center flex-col gap-4">
        <h1 className="text-center py-8 text-charcoal">About</h1>
        <img src={People} className={`rounded-lg imageDiv ${loaded ? {} : {display: 'none'}}`}  loading="lazy" onLoad={() => setLoaded(true)} />
        <div className="aboutContainer">
          <div className="bg-charcoal text-white p-8 rounded-lg max-w-2xl">
            <h2>Industry-Leading Designers</h2>
            <p>Our team of lighting designers is composed of some of the most talented and innovative professionals in the industry. Many have earned national recognition and prestigious awards for their outstanding contributions, consistently setting the benchmark for excellence in lighting design.</p>
          </div>
          <div className="bg-charcoal text-white p-8 rounded-lg max-w-2xl">
            <h2>Architectural & Landscape Lighting Installation</h2>
            <p>Our dedicated installation teams bring unmatched expertise to every project, ensuring your lighting system is installed to the highest industry standards. We take pride in leaving your property spotless, with no sign of our presence except the stunning illumination that enhances your home and landscape with warm, elegant charm.</p>
          </div>
          <div className="bg-charcoal text-white p-8 rounded-lg max-w-2xl">
            <h2>Outdoor Lighting Design</h2>
            <p>At Lighthouse, our lighting specialists are among the best-trained in the industry, excelling in creating custom-tailored designs that reflect your unique vision. Whether it’s for your home or property, we craft lighting solutions that combine functionality and artistry, enhancing your outdoor spaces with style and sophistication.</p>
          </div>
          <div className="bg-charcoal text-white p-8 rounded-lg max-w-2xl">
            <h2>Meticulous Installation</h2>
            <p>We approach every installation with precision and care, ensuring that your lighting system is seamlessly integrated with minimal disruption to your property or landscape. Our highly trained teams uphold the highest standards, delivering flawless results every time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About