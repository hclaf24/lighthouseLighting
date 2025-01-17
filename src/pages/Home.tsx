// import stringLights from "../assets/indoorStringLights.png"
import lightVideo from "/img/home.mp4"
import data from "../data/index.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "./components/Loader";

const Home = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div>
        {loaded ? null : (
          <Loader />
        )}
      </div>
      <div className="p-8">
        <div className="grid mb-8 place-items-center relative">
          <video src={lightVideo} width="100%" autoPlay loop playsInline muted className={`rounded-lg ${loaded ? {} : {display: 'none'}}`}  onLoad={() => setLoaded(true)} />
          <h1 className="absolute text-white text-center videoText m-8">Lighthouse Lighting</h1>
        </div>
        <div className="cardBox">
          {data?.home?.map((item, index) => (
            <button key={index} className="card" onClick={()=>navigate(item.redirect)}>
              <img src={item.src} alt="Product Chain" className={` ${loaded ? {} : {display: 'none'}}`}  loading="lazy" onLoad={() => setLoaded(true)} />
              <div className="cardContent">
                <h3 className="m-4 text-white">{item.title}</h3>
                <p className="m-4 text-white">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home