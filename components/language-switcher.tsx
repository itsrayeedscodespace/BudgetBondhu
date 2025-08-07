"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-zinc-200 hover:text-orange-400 flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === "en" ? "বাংলা" : "English"}</span>
    </Button>
  )
}
