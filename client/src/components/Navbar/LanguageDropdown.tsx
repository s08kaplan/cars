import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cloneElement } from "react";
import {
  TurkishFlag,
  ArabicFlag,
  EnglishFlag,
  FrenchFlag,
  GermanFlag,
  SpanishFlag,
} from "./Flags";

const LanguageDropdown = ({
  setLang,
  lang,
  width,
  height,
}: {
  setLang: any;
  lang: string;
  width: number;
  height: number;
}) => {
  const flagComponents = [
    { name: "Turkish", Component: TurkishFlag },
    { name: "Arabic", Component: ArabicFlag },
    { name: "English", Component: EnglishFlag },
    { name: "French", Component: FrenchFlag },
    { name: "German", Component: GermanFlag },
    { name: "Spanish", Component: SpanishFlag },
  ];

  const handleLanguage = (languageName: string) => {
    setLang(languageName);
  };

  const selectedFlag = flagComponents.find((flag) => flag.name === lang);

  if (!selectedFlag) return null;

  const { Component: SelectedFlagComponent } = selectedFlag;

  return (
    <section className="ml-0.5">
      <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex items-center gap-1 justify-center rounded-md bg-white/10 px-2 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
          <SelectedFlagComponent width={width / 2} height={height / 2} />
          <ChevronDownIcon
            aria-hidden="true"
            className="size-5 text-gray-400"
          />
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-26 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <h2 className="text-white p-2">Select Language</h2>
          <div className="py-1">
            {flagComponents.map(({ name, Component }) => (
              <MenuItem key={name}>
                <button
                  onClick={() => handleLanguage(name)}
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  <Component width={width} height={height} />
                  {name}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </section>
  );
};

export default LanguageDropdown;
