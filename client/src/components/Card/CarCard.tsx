"use client"
import React from "react";
import Button1 from "../Buttons/Button-1";
import { useNavigate } from "react-router";

const CarCard = ({...props}) => {
const navigate = useNavigate()

  return (
    <section className="flex flex-col sm:flex-row gap-3 md:flex-row lg:flex-row xl:flex-row w-[680px] border border-gray-300 h-80 rounded-3xl ml-2">
    
      <div className="overflow-hidden border border-gray-200 transition-all flex place-content-center">
        
           <img src={props.image[0]} alt="car" className="w-96  fancy-hover"  loading="lazy"/>
      
       
      </div>
      <div className="flex flex-col justify-between w-1/2 p-2">
        {/* header */}
        <div>
            <h3> {props.model} used | new (car info)</h3>
        </div>
        {/* body */}
        <div className="flex justify-between">
            <h4>${props.price}</h4>
            <p className="place-content-end">features summary</p>
        </div>
        {/* footer */}
        <div className="flex justify-between items-center">
          <p>sold or not info</p>
          <Button1 message="Details" 
           onClick={()=> navigate(`/car-detail/${props._id}`, {
            state: { carData: props }
           })}
          
          /*  onClick={()=> console.log("clicked")}*/

/>
          </div>
      </div>
    </section>
  );
};

export default CarCard;
