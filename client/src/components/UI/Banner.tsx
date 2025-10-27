import "../../animations/definitions.css";
const Banner = () => {
  return (
    <header className="relative">
      <div className="h-64 md:h-80 lg:h-[30rem] overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2024/01/29/07/16/ai-generated-8538997_1280.jpg"
          alt="car image"
          /* width={"100%"} */
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl fade-in-up">Drive home happy</h1>
        <h3 className="text-lg md:text-2xl slide-in-right">Satisfaction guaranteed</h3>
      </div>
    </header>
  );
};

export default Banner;
