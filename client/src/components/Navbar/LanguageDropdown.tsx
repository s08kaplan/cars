import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  TurkishFlag,
  ArabicFlag,
  EnglishFlag,
  FrenchFlag,
  GermanFlag,
  SpanishFlag,
} from "./Flags";
import type { ReactHTMLElement } from "react";

const flags = [
  { name: "Turkish", comp: <TurkishFlag /> },
  { name: "Arabic", comp: <ArabicFlag /> },
  { name: "English", comp: <EnglishFlag /> },
  { name: "French", comp: <FrenchFlag /> },
  { name: "German", comp: <GermanFlag /> },
  { name: "Spanish", comp: <SpanishFlag /> },
];

const LanguageDropdown = ({ setLang }) => {

  const handleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
    setLang(e.currentTarget.textContent);
  };

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
        {/*         Languages
         */}{" "}
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-400"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-22 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {/*         <h2>Languages</h2>
         */}{" "}
        <div className="py-1">
          {flags.map(({ name, comp }) => (
            <MenuItem key={name}>
              <button
                onClick={(e) => handleLanguage(e)}
                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              >
                {comp}{name}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default LanguageDropdown;
