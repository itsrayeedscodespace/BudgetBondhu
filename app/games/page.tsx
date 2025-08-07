"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function GamesPage() {
  const { t } = useLanguage()

  // Games data
  const games = [
    {
      id: "budget-hero",
      title: t("budgetHero"),
      description: t("budgetHeroGameDesc"),
      image: "/images/budget-hero-game.jpg",
      skills: ["Budgeting", "Decision Making", "Planning"],
      rating: 4.8,
    },
    {
      id: "money-match",
      title: t("moneyMatch"),
      description: t("moneyMatchDesc"),
      image: "/images/money-match-game.jpg",
      skills: ["Currency Recognition", "Memory", "Math"],
      rating: 4.5,
    },
    {
      id: "investment-adventure",
      title: t("investmentAdventure"),
      description: t("investmentAdventureDesc"),
      image: "/images/investment-game.jpg",
      skills: ["Investing", "Risk Management", "Long-term Planning"],
      rating: 4.7,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section with Background Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/gamesland.jpg" alt="Gaming background" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400 drop-shadow-lg">
                  {t("playGamesTitle")}
                </h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-md">
                  {t("playGamesDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Games Grid Section */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container px-4 md:px-6">
            {/* Games Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {games.map((game) => (
                <Card key={game.id} className="bg-zinc-900 border-zinc-800 text-zinc-100 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={`${game.title} screenshot`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1">
                      <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
                      <span className="text-xs font-medium text-white">{game.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-orange-400">{game.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {game.skills.map((skill, index) => (
                        <span key={index} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-400 text-black hover:bg-orange-300" asChild>
                      <Link href={`/games/${game.id}`}>{t("playNow")}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
