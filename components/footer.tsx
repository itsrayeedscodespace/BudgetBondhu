"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t border-zinc-800 bg-black py-8">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-xl font-bold text-orange-400">Budget Bondhu</span>
          </Link>
          <p className="text-sm text-zinc-400">{t("footerDesc")}</p>
          <div className="flex gap-4">
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400">{t("quickLinks")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles" className="text-zinc-400 hover:text-orange-400">
                {t("articles")}
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-zinc-400 hover:text-orange-400">
                {t("resources")}
              </Link>
            </li>
            <li>
              <Link href="/games" className="text-zinc-400 hover:text-orange-400">
                {t("games")}
              </Link>
            </li>
            <li>
              <Link href="/learn" className="text-zinc-400 hover:text-orange-400">
                {t("learn")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400">{t("about")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-zinc-400 hover:text-orange-400">
                {t("ourMission")}
              </Link>
            </li>
            <li>
              <Link href="/about#vision" className="text-zinc-400 hover:text-orange-400">
                {t("ourVision")}
              </Link>
            </li>
            <li>
              <Link href="/about#team" className="text-zinc-400 hover:text-orange-400">
                {t("ourTeam")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-400 hover:text-orange-400">
                {t("contactUs")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400">{t("legal")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-zinc-400 hover:text-orange-400">
                {t("privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-zinc-400 hover:text-orange-400">
                {t("termsOfUse")}
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-zinc-400 hover:text-orange-400">
                {t("cookiePolicy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t border-zinc-800 pt-8 px-4 md:px-6">
        <p className="text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Budget Bondhu. {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  )
}
