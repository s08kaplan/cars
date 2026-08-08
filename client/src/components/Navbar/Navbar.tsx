"use client";

import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import Search from "../../Search-Bar/Search";
import { useAuthStore } from "src/store/useAuthStore";
import useLanguageStore from "src/store/useLanguageStore";
import LanguageDropdown from "./LanguageDropdown";
import ProfileDropdown from "./ProfileDropdown";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const user = useAuthStore((state) => state.user) || null;
  const lang = useLanguageStore((s) => s.lang);
  const setLang = useLanguageStore((s) => s.setLang);
  const t = useLanguageStore((s) => s.t);

  return (
    <nav className="bg-gray-800 border-b border-gray-700/50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* 1. Root-level Checkbox (Direct Sibling to Icon Container & MobileMenu) */}
          <input
            type="checkbox"
            id="mobile-menu-toggle"
            className="peer hidden"
          />

          {/* 2. Icon Container: Uses arbitrary peer selectors to target SVG children */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden 
            peer-checked:[&_.menu-icon]:opacity-0 peer-checked:[&_.menu-icon]:-rotate-90 peer-checked:[&_.menu-icon]:scale-75 
            peer-checked:[&_.close-icon]:opacity-100 peer-checked:[&_.close-icon]:rotate-0 peer-checked:[&_.close-icon]:scale-100"
          >
            <label
              htmlFor="mobile-menu-toggle"
              aria-label="Toggle main menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer transition-colors relative h-10 w-10"
            >
              <span className="sr-only">Open main menu</span>

              {/* Hamburger Icon */}
              <Menu className="menu-icon h-6 w-6 absolute transition-all duration-300 ease-in-out opacity-100 rotate-0 scale-100 pointer-events-none" />

              {/* Close (X) Icon */}
              <X className="close-icon h-6 w-6 absolute transition-all duration-300 ease-in-out opacity-0 rotate-90 scale-75 pointer-events-none" />
            </label>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/dashboard" className="flex shrink-0 items-center">
              <img
                alt="AutoDen Car Selling Company"
                src="/car.webp"
                className="h-8 w-8 object-contain"
              />
            </Link>

            <div className="hidden sm:ml-6 sm:flex items-center gap-4">
              <DesktopMenu />
              <Search />
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ProfileDropdown />
            <LanguageDropdown
              setLang={setLang}
              lang={lang}
              width={32}
              height={32}
            />
          </div>

          {/* 3. Mobile Dropdown Drawer */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;