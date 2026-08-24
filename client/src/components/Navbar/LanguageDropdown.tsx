import { ChevronDown } from "lucide-react";
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
    <section className="ml-4.5 p-1">
      <details className="group relative inline-block text-left">
        {/* Trigger Button */}
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 transition-colors hover:bg-white/20 focus:outline-none">
          <SelectedFlagComponent width={width / 2} height={height / 2} />
          <ChevronDown
            aria-hidden="true"
            className="size-4 text-gray-400 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>

        {/* Dropdown Menu */}
        <div className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-white/10 rounded-lg bg-gray-800 p-1 shadow-xl outline-1 -outline-offset-1 outline-white/10">
          <h2 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Select Language
          </h2>
          <div className="py-1">
            {flagComponents.map(({ name, Component }) => (
              <button
                key={name}
                type="button"
                onClick={(e) => {
                  handleLanguage(name);
                  // Closes the menu on click without changing state logic
                  e.currentTarget.closest("details")?.removeAttribute("open");
                }}
                className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
              >
                <Component width={width} height={height} />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
};

export default LanguageDropdown;