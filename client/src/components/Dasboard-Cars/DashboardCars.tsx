import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AddDashboardCarForm from "src/components/Form/AddDashboardCarForm";
import Swipe from "src/components/Swipe/Swipe";
import {
  getDashboardCars,
  deleteDashboardCar,
} from "src/functions/dashboardCarsApiCalls";
import { useAuth } from "src/hooks/auth-hooks/useAuth";

const DashboardCars: React.FC = () => {
  const queryClient = useQueryClient();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { data: cars = [], isLoading } = useQuery({
    queryKey: ["dashboard-cars"],
    queryFn: getDashboardCars,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteDashboardCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard-cars"] });
    },
  });

  const { user } = useAuth();
  const isAuthorized = Number(user?.role) === 1 ? true : false;
  //console.log("isAuthorized, user",isAuthorized,user)

  const swipeImages: string[] = cars.map((car) =>
    car.path.startsWith("http") ? car.path : `${baseUrl}${car.path}`,
  );
  //console.log("cars data in dashboard cars comp. :", cars);
  return (
    <div className={`${isAuthorized ? 'min-h-screen' : 'h-fit'} flex flex-col justify-start items-center py-12 px-4 space-y-10`}>
      <div className="w-full max-w-5xl}">
        <h3 className="text-lg font-semibold text-slate-200 mb-4 pl-1">
          Live Swipe Preview
        </h3>
        {isLoading ? (
          <div className="h-64 flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">Loading carousel...</p>
          </div>
        ) : swipeImages.length > 0 ? (
          <Swipe source={swipeImages} />
        ) : (
          <div className="h-64 flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-500 text-sm">No images uploaded yet.</p>
          </div>
        )}
      </div>

      <div className="w-full max-w-5xl">
        {isAuthorized && <AddDashboardCarForm />}
      </div>

      {isAuthorized && (
        <div className="w-full max-w-5xl">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 pl-1">
            Manage Dashboard Vehicle Images
          </h3>

          {isLoading ? (
            <p className="text-slate-400 text-sm">Loading images...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cars.map((car) => {
                /*  const imageSrc = car.path.startsWith("http")
                ? car.path
                : `${baseUrl}${car.path}`; */
                const imageSrc = `http://localhost:4040/${car.path}`;
                return (
                  <div
                    key={car._id}
                    className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden p-2 flex flex-col items-center"
                  >
                    <img
                      src={imageSrc}
                      alt={car.originalName || "Dashboard Car"}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <span className="text-[11px] text-slate-400 truncate w-full text-center mt-2 px-1">
                      {car.originalName}
                    </span>
                    <button
                      onClick={() => deleteMutation.mutate(car._id)}
                      disabled={deleteMutation.isPending}
                      className="mt-2 w-full py-1.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-semibold rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardCars;
