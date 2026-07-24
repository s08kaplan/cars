import { Link, useLocation } from "react-router";
import useNavigation from "src/hooks/navigation-hooks/useNavigation";
import { classNames } from "./Navbar";


const DesktopMenu = () => {
  const { navigation } = useNavigation();
  const location = useLocation()
  return (
    <div className="flex items-center space-x-2">
      {navigation.map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <Link
            key={item.id}
            to={item.to}
            className={classNames(
              isActive
                ? "bg-gray-900 text-white font-semibold"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopMenu;
