import React from "react";

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

const getValue = (car: Car, column: string): React.ReactNode => {
  switch (column) {
    case "MAKE":     return car.brandName;
    case "COLOR":    return car.color;
    case "MODEL":    return car.model;
    case "TYPE":     return car.typeOfCar;
    case "FUEL":     return car.fuelType;
    case "MILE":     return car.mileAge.toLocaleString();
    case "BOUGHT":   return `$${car.boughtPrice.toLocaleString()}`;
    case "REQUIRED": return car.requiredPrice ? `$${car.requiredPrice.toLocaleString()}` : "-";
    case "SOLD":     return car.soldPrice     ? `$${car.soldPrice.toLocaleString()}`     : "-";
    case "PROFIT": {
      if (!car.soldPrice || !car.boughtPrice) return "-";
      const profit = car.soldPrice - car.boughtPrice;
      return (
        <span className={profit >= 0 ? "text-emerald-400" : "text-red-400"}>
          {profit >= 0 ? "+" : ""}${profit.toLocaleString()}
        </span>
      );
    }
    default: return "-";
  }
};

const MyTable: React.FC<MyTableProps> = ({ title, data }) => {
  if (!data?.length) {
    return (
      <div className="flex items-center justify-center py-12 text-slate-400 text-sm">
        No records found.
      </div>
    );
  }

  return (
    // Outer wrapper clips the rounded corners on scroll
    <div className="my-4 rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden bg-slate-900/60 backdrop-blur-xl">
      {/* This div scrolls horizontally on small screens */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-slate-200 min-w-[640px]">
          <thead className="bg-slate-800/90 border-b border-slate-700/80">
            <tr>
              {title.map((t) => (
                <th
                  key={t}
                  className="border-r border-slate-700/50 last:border-r-0 px-3 py-3 text-cyan-400 font-bold text-xs uppercase tracking-wider whitespace-nowrap"
                >
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {data.map((car) => (
              <tr
                key={car._id}
                className="hover:bg-slate-800/40 transition-colors duration-150"
              >
                {title.map((col) => (
                  <td
                    key={col}
                    className="border-r border-slate-800/60 last:border-r-0 px-3 py-2.5 text-center text-slate-300 font-medium whitespace-nowrap"
                  >
                    {getValue(car, col)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;