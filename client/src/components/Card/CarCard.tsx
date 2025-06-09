import React from "react";

const CarCard = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-3 md:flex-row lg:flex-row xl:flex-row">
      <div className="overflow-hidden border border-gray-200 transition-all">
        <img src="/car.webp" alt="car" className="w-96  fancy-hover"/>
      </div>
      <div className="flex flex-col justify-between">
        {/* header */}
        <div>
            <h3>used | new (car info)</h3>
        </div>
        {/* body */}
        <div>
            <h4>price</h4>
            <p>features summary</p>
        </div>
        {/* footer */}
        <div>sold or not info</div>
      </div>
    </section>
  );
};

export default CarCard;
