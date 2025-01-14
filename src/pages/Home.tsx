// import stringLights from "../assets/indoorStringLights.png"
import lightVideo from "/img/home.mp4"
import data from "../data/index.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-8">
        <div className="grid mb-8 place-items-center relative">
          <video src={lightVideo} width="100%" autoPlay loop playsInline muted className="rounded-lg"/>
          <h1 className="absolute text-white text-center">Lighthouse Lighting</h1>
        </div>
        <div className="cardBox">
          {data?.home?.map((item, index) => (
            <button key={index} className="card" onClick={()=>navigate(item.redirect)}>
              <img src={item.src} alt="Product Chain"/>
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