import "src/animations/definitions.css";

const TEXT = "Loading Cars";
const CarSpinner = () => {
  return (
    <section className="relative flex justify-center items-center h-[400px]">
      {Array.from(TEXT).map((letter, i) => (
        <span
          key={i}
          className="inline-block letter-drop text-white text-2xl"
          style={{
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${0.9 + (i % 3) * 0.06}s`,
          }}
        >{letter === " " ? <span className="mx-1">&nbsp;</span> : letter}</span>
      ))}
    </section>
  );
};

export default CarSpinner;
