import  { create } from "zustand"
import { persist } from "zustand/middleware"
import English from "src/languages/en.json"
import Turkish from "src/languages/tr.json"
import Arabic from "src/languages/ar.json"
import French from "src/languages/fr.json"
import Spanish from "src/languages/esp.json"
import German from "src/languages/de.json"


type Locale = "English" | "Turkish" | "Arabic" | "French" | "Spanish" | "German";
type Translations = typeof English;

interface LanguageState {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const translations: Record<Locale, Translations> = { English, Turkish, Arabic, French, Spanish, German };
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: "English",
      setLang: (lang) => set({ lang }),

      t: (key, vars) => {
        const { lang } = get();
        const keys = key.split(".");
        let text: any = translations[lang];
        for (const k of keys) text = text?.[k];
        if (!text) return key;

        if (vars) {
          Object.entries(vars).forEach(([k, v]) => {
            text = text.replace(`{{${k}}}`, String(v));
          });
        }

        return text;
      },
    }),
    { name: "language-preference" }
  )
);

export default useLanguageStore