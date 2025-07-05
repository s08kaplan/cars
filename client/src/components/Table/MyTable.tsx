import React from "react";

interface MyTableProps {
  title: string[];
  data: [
    {
      _id: string;
      brandName: string;
      color: string;
      typeOfCar: string;
      model: string;
      fuelType: string;
      mileAge: number;
      boughtPrice: number;
      sellPrice: number;
    }
  ];
}

const MyTable: React.FC<MyTableProps> = ({ title, data }) => {
 /*  console.log(data); */
  return (
    <div className="overflow-x-auto my-4">
      <table className="table-auto border border-gray-300 w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {title?.map((t) => (
              <th className="border px-2 py-1">{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((car) => (
            <tr key={car._id}>
              <td className="border px-2 py-1 text-center">{car.brandName}</td>
              <td className="border px-2 py-1 text-center">{car.color}</td>
              <td className="border px-2 py-1 text-center">{car.model}</td>
              <td className="border px-2 py-1 text-center">{car.typeOfCar}</td>
              <td className="border px-2 py-1 text-center">{car.fuelType}</td>
              <td className="border px-2 py-1 text-center">{car.mileAge}</td>
              <td className="border px-2 py-1 text-center">
                {car.boughtPrice}
              </td>
              <td className="border px-2 py-1 text-center">{car.sellPrice}</td>
              <td className="border px-2 py-1 text-center">
                ${car.sellPrice - car.boughtPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
