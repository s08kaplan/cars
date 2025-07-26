import "../../animations/definitions.css"
const Banner = () => {
  return (
    <header className='relative'>
        
        <img src="https://cdn.pixabay.com/photo/2024/01/29/07/16/ai-generated-8538997_1280.jpg" alt="car image" width={"100%"} />
        <div className='absolute top-1/2 left-1/2 text-white font-bold text-3xl -translate-1/2'>
        <h1 className='fade-in-up'>Drive home happy</h1>
        <h3 className='slide-in-right'>Satisfaction guaranteed</h3>
        </div>
    </header>
  )
}

export default Banner