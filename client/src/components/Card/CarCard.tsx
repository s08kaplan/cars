"use client";
import Button1 from "../Buttons/Button-1";
import { useNavigate } from "react-router";

const CarCard = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white max-w-5xl mx-auto my-4 group overflow-hidden">
      {/* Image Section */}
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img
          src={props.image[0]}
          alt="car"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between p-6 md:w-1/2 gap-4">
        {/* Title & Year */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {props.brandName} {props.model}
          </h3>
          <p className="text-sm text-gray-500">{props.year} model</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>
            <p>Mileage:</p>
            <p className="font-medium">{props.mileAge} km</p>
          </div>
          <div>
            <p>Fuel Type:</p>
            <p className="font-medium">{props.fuelType}</p>
          </div>
          <div>
            <p>Price:</p>
            <p className="font-semibold text-purple-600">${props.requiredPrice}</p>
          </div>
          <div>
            <p>Status:</p>
            <p className={`font-medium ${props.available ? "text-green-600" : "text-red-500"}`}>
              {props.available ? "On Sale" : "Sold"}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Button1
            message="Details"
            onClick={() =>
              navigate(`/car-detail/${props._id}`, {
                state: { carData: props },
              })
            }
            className="w-32"
          />
        </div>
      </div>
    </section>
  );
};

export default CarCard;
