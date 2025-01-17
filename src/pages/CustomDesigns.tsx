import { useState } from "react";
import data from "../data/index.json";
import Loader from "./components/Loader";

const CustomDesigns = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {loaded ? null : (
        <Loader />
      )}
      <div className="flex p-8 flex-col justify-self-center items-center">
        <h1 className="text-center pt-8 text-charcoal">Custom Designs</h1>
        <div className="m-8 flex flex-row gap-8 flex-wrap justify-center">
          {data?.customLights?.map((item, index) => (
            <div key={index} className="tooltip rounded-lg p-8 flex flex-col gap-4 text-center">
              <img src={item.src} alt={item.description} className={`rounded-lg w-64 ${loaded ? {} : {display: 'none'}}`}  loading="lazy" onLoad={() => setLoaded(true)} />
              <span className="tooltiptext">{item.description}</span>
            </div>
          ))}
        </div>
        <div className="bg-yinmn-blue p-8 rounded-lg text-white flex flex-col gap-4 max-w-2xl">
          <p>Lighthouse Lighting designs and manufactures our own fixtures and equipment to ensure superior quality.</p>
          <p>Lighthouse Lighting is the leader in testing and implementing new and innovative technologies in automation and lighting control.</p>
          <p>We believe in building long term, satisfying relationships with our clients. The lighting we install for you today should look just as good 10-15 years from now.</p>
          <p>We also provide full service and repair for clients who have had their system installed by another company but are not receiving the level of service required. We are more than happy to step into this role, solve the problem, and establish a long term working relationship.</p>
        </div>
      </div>
    </div>
  )
}

export default CustomDesigns