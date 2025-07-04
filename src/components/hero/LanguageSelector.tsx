import React, { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "sw", name: "Swahili", flag: "🇰🇪" },
    { code: "am", name: "Amharic", flag: "🇪🇹" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" }
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 text-api-cream hover:bg-white/20 transition-all duration-300"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{currentLanguage?.flag} {currentLanguage?.name}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 min-w-40">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language.code);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-api-terracotta/10 transition-colors duration-200 flex items-center space-x-2 text-api-charcoal"
            >
              <span>{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;