import data from "../data/index.json";

const Lights = () => {
  return (
    <section id="Lights" className="flex p-8 flex-col justify-self-center max-w-6xl">    
      <h1 className="text-center py-8 text-charcoal">Lights</h1>
      <h2 className="bg-yinmn-blue text-white mt-8 p-4 rounded-lg" id="indoorLights">Indoor Lights</h2>
      <div className="p-8 flex flex-row gap-8 flex-wrap justify-center">
        {data?.indoorLights?.map((item, index) => (
          <div key={index} className="tooltip rounded-lg p-8 flex flex-col gap-4 text-center">
            <img src={item.src} alt={item.description} className="rounded-lg w-64" />
            <span className="tooltiptext">{item.description}</span>
          </div>
        ))}
      </div>
      <h2 className="bg-yinmn-blue text-white mt-8 p-4 rounded-lg" id="outdoorLights">Outdoor Lights</h2>
      <div className="p-8 flex flex-row gap-8 flex-wrap justify-center">
        {data?.outdoorLights?.map((item, index) => (
          <div key={index} className="tooltip rounded-lg p-8 flex flex-col gap-4 text-center">
            <img src={item.src} alt={item.description} className="rounded-lg w-64" />
            <span className="tooltiptext">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Lights