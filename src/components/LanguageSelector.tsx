
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "sw", name: "Kiswahili", flag: "🇹🇿" },
  { code: "ar", name: "العربية", flag: "🇪🇬" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
];

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    // Here you would typically implement the actual language change logic
    // For now, we'll just update the state and show a console message
    console.log(`Language changed to ${language.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1 border-none bg-transparent hover:bg-api-cream/20"
        >
          <Globe className="h-4 w-4 text-api-midnight/70" />
          <span className="text-api-midnight/80 text-sm">
            {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`flex items-center gap-2 cursor-pointer ${
              currentLanguage.code === language.code ? "bg-api-cream/20" : ""
            }`}
            onClick={() => handleLanguageChange(language)}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
