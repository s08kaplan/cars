import useLanguageStore from "src/store/useLanguageStore";
import { profileMenu, profileWithLogoutMenu } from "./navbar-navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "src/hooks/auth-hooks/useAuth";
import { useLogout } from "src/hooks/auth-hooks/useLogout";

const ProfileDropdown = () => {
  const lang = useLanguageStore((s) => s.lang);
  const setLang = useLanguageStore((s) => s.setLang);
  const t = useLanguageStore((s) => s.t);
  const { user } = useAuth() 
  const { mutateAsync: logout } = useLogout()

  const navigate = useNavigate()
  
const NAVIGATION = user ? profileWithLogoutMenu : profileMenu
  return (
    <Menu as="div" className="relative ml-1">
      <div className="flex gap-2">
        <MenuButton className="relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2015/05/30/19/32/ferrari-790611_640.jpg"
            className="size-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white/10 py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {NAVIGATION.map((p) => (
          <MenuItem key={p.name}>
            <button
            onClick={() => p.name === "Sign out" ? logout() : navigate(p.to)}
              className="block w-full px-4 py-2 text-sm text-cyan-400 data-focus:bg-slate-900 data-focus:outline-hidden"
            >
              {p.name }
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default ProfileDropdown;
