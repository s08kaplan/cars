import "../../animations/definitions.css"
import EngineSound from "../Effects/EngineSound"


const CarModel = () => {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fade-in-up'>
      <img src="/car.webp" alt="car" className="w-full h-auto"/>
      <EngineSound/>
    </div>
  )
}

export default CarModel