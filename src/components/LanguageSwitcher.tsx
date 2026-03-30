"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const languages = [
  { code: "en", name: "EN", flag: "https://flagcdn.com/w40/gb.png" }, // UK flag for English
  { code: "fr", name: "FR", flag: "https://flagcdn.com/w40/fr.png" }, // France flag
  { code: "nl", name: "NL", flag: "https://flagcdn.com/w40/nl.png" }, // Netherlands flag
];

export default function LanguageSwitcher() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Get current language from URL (default to English if not found)
  const currentLang =
    languages.find((lang) => pathname.startsWith(`/${lang.code}`)) ||
    languages[2];

  const changeLanguage = (lang: string) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
    router.push(newPathname);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Toggle Button with Selected Language */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center font-semibold text-lg px-4 py-2 text-[#062035] bg-white"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.name}
          className="w-6 h-4"
        />
        {/* <ChevronDownIcon className="w-4 h-4" /> */}
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-15 bg-white border rounded-md shadow-lg">
          {languages.map(({ code, flag, name }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="flex items-center w-full px-2 justify-center py-2 hover:bg-[#c34e1b] hover:text-white"
            >
              {/* <span className="text-sm">{name}</span> */}
              <img src={flag} alt={name} className="w-6 h-4 " />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
