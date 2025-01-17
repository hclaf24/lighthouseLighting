import { useState } from "react";
import Lights from "../img/contactLights.jpeg"
import Loader from "./components/Loader";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {loaded ? null : (
        <Loader />
      )}
      <div className="rounded-lg p-8 flex flex-col gap-4 justify-self-center">
        <h1 className="text-center py-8 text-charcoal">Contact Us</h1>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <img src={Lights} className={`imageDiv rounded-lg ${loaded ? {} : {display: 'none'}}`}  loading="lazy" onLoad={() => setLoaded(true)} />
          <div className="text-charcoal">
            <h2>Email</h2>
            <p>info@lighthouselighting.com</p>
            <h2>Phone</h2>
            <p>321.7890.5438</p>
            <h2>Address</h2>
            <p>121 Rock Street, New York, NY 92103-9000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact