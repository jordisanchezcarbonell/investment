"use client";

import { MoonIcon, SunIcon, TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslation } from "react-i18next";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          <span className="font-semibold">ETF Strategy</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}