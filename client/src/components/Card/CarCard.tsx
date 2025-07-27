"use client";
import Button1 from "../Buttons/Button-1";
import { useNavigate } from "react-router";

const CarCard = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3 md:flex-row lg:flex-row xl:flex-row border border-gray-300 h-auto rounded-3xl mx-auto my-2">
      <div className="overflow-hidden border border-gray-200 transition-all flex place-content-center rounded-l-3xl">
        <img
          src={props.image[0]}
          alt="car"
          className="fancy-hover rounded-md object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-between w-1/2 p-2 ">
        {/* header */}
        <div>
          <h3>
            {props.brandName} {props.model} used | new (car info)
          </h3>
          <p>{props.year} model</p>
        </div>
        {/* body */}
        <div className="flex flex-col justify-between">
          <h4>${props.requiredPrice}</h4>
          <h4 className="place-content-end">features summary</h4>
          <p>{props.mileAge}</p>
          <p>{props.fuelType}</p>
        </div>
        {/* footer */}
        <div className="flex flex-col  lg:flex-row xl:flwex-row justify-between items-center ">
          <p>
            Sale Status: <span>{props.available ? "On Sale" : "Sold"}</span>{" "}
          </p>
          <Button1
            message="Details"
            onClick={() =>
              navigate(`/car-detail/${props._id}`, {
                state: { carData: props },
              })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CarCard;
