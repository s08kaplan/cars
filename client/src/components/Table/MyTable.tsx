import React, { useEffect, useState } from "react";

interface Car {
  _id: string;
  brandName: string;
  color: string;
  typeOfCar: string;
  model: string;
  fuelType: string;
  mileAge: number;
  boughtPrice: number;
  requiredPrice?: number;
  soldPrice?: number;
}

interface MyTableProps {
  title: string[];
  data: Car[];
}

const MyTable: React.FC<MyTableProps> = ({ title, data }) => {
  /*  console.log(data); */
const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [extraColumn, setExtraColumn] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 640; 

  const visibleColumns = title.slice(0, 3); 
  const hiddenColumns = title.slice(3); 

  const isSoldData = data?.some(car => car.soldPrice);

  const getValue = (car: Car, column: string) => {
    switch (column) {
      case "MAKE": return car.brandName;
      case "COLOR": return car.color;
      case "MODEL": return car.model;
      case "TYPE": return car.typeOfCar;
      case "FUEL": return car.fuelType;
      case "MILE": return car.mileAge;
      case "BOUGHT": return `$${car.boughtPrice}`;
      case "REQUIRED": return car.requiredPrice ? `$${car.requiredPrice}` : "-" ;
      case "SOLD": return car.soldPrice ? `$${car.soldPrice}` : "-";
      case "PROFIT":
        return (car.soldPrice && car.boughtPrice)
          ? `$${car.soldPrice - car.boughtPrice}`
          : "-";
      default: return "-";
    }
  };

  return (
      <div className="overflow-x-auto my-4">
      {isMobile && (
        <div className="mb-4">
          <label className="text-sm mr-2">Select extra column: </label>
          <select
            onChange={(e) => setExtraColumn(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="">--None--</option>
            {hiddenColumns.map(col => (
              <option key={col} value={col}>{col}</option>
            ))}
          </select>
        </div>
      )}
      <table className="table-auto border border-gray-300 w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {(isMobile ? visibleColumns : title).map((t) => (
              <th key={t} className="border px-2 py-1">{t}</th>
            ))}
            {isMobile && extraColumn && <th className="border px-2 py-1">{extraColumn}</th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((car) => (
            <tr key={car._id}>
              {(isMobile ? visibleColumns : title).map(col => (
                <td key={col} className="border px-2 py-1 text-center">
                  {getValue(car, col)}
                </td>
              ))}
              {isMobile && extraColumn && (
                <td className="border px-2 py-1 text-center">
                  {getValue(car, extraColumn)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
