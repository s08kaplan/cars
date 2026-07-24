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
        <div className="mb-4 flex items-center gap-2">
          <label className="text-sm font-medium text-slate-300">Select extra column: </label>
          <select
            onChange={(e) => setExtraColumn(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-100 p-1.5 rounded-lg text-sm focus:outline-none focus:border-cyan-500"
          >
            <option value="" className="bg-slate-900 text-slate-100">--None--</option>
            {hiddenColumns.map(col => (
              <option key={col} value={col} className="bg-slate-900 text-slate-100">{col}</option>
            ))}
          </select>
        </div>
      )}
      <div className="rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden bg-slate-900/60 backdrop-blur-xl">
        <table className="table-auto w-full text-sm text-slate-200">
          <thead className="bg-slate-800/90 border-b border-slate-700/80">
            <tr>
              {(isMobile ? visibleColumns : title).map((t) => (
                <th key={t} className="border-r border-slate-700/50 last:border-r-0 px-3 py-3 text-cyan-400 font-bold text-xs uppercase tracking-wider whitespace-nowrap">
                  {t}
                </th>
              ))}
              {isMobile && extraColumn && (
                <th className="border-r border-slate-700/50 last:border-r-0 px-3 py-3 text-cyan-400 font-bold text-xs uppercase tracking-wider whitespace-nowrap">
                  {extraColumn}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {data?.map((car) => (
              <tr key={car._id} className="hover:bg-slate-800/40 transition-colors duration-150">
                {(isMobile ? visibleColumns : title).map(col => (
                  <td key={col} className="border-r border-slate-800/60 last:border-r-0 px-3 py-2.5 text-center text-slate-300 font-medium whitespace-nowrap">
                    {getValue(car, col)}
                  </td>
                ))}
                {isMobile && extraColumn && (
                  <td className="border-r border-slate-800/60 last:border-r-0 px-3 py-2.5 text-center text-slate-300 font-medium whitespace-nowrap">
                    {getValue(car, extraColumn)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;