import React from 'react';
import { Link, useLocation } from 'react-router';
import useNavigation from 'src/hooks/navigation-hooks/useNavigation';
import { classNames } from './Navbar';

const MobileMenu = () => {
  const { navigation } = useNavigation();
  const location = useLocation();

  return (
    <div className="hidden peer-checked:block sm:hidden absolute top-16 inset-x-0 bg-gray-800 border-b border-gray-700/50 z-50">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            /* Label wrapper forces the checkbox to uncheck on click */
            <label key={item.id} htmlFor="mobile-menu-toggle" className="block">
              <Link
                to={item.to}
                className={classNames(
                  isActive
                    ? "bg-gray-900 text-white font-semibold"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors"
                )}
              >
                {item.name}
              </Link>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;