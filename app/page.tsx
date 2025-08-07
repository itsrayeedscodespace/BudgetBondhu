"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, CreditCard, Lightbulb, PiggyBank, Wallet, Users, Calendar, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Background Video */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(1.5)" }}
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_L1nJni8MnbkSnvAQigLn4Tm7VCZE/6EoGpx41OhhPrAH1a1Pcm7/public/landing.mp4" type="video/mp4" />
              {/* Fallback image if video doesn't load */}
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Financial education background"
                fill
                className="object-cover"
              />
            </video>
            {/* Additional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg">
                    {t("heroTitle")}
                  </h1>
                  <p className="max-w-[600px] text-orange-300 md:text-xl drop-shadow-md">{t("heroSubtitle")}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/learn">
                    <Button className="bg-orange-400 text-black hover:bg-orange-300 shadow-lg">
                      {t("startLearning")}
                    </Button>
                  </Link>
                  <Link href="/games">
                    <Button
                      variant="outline"
                      className="border-orange-400 text-orange-400 hover:bg-orange-400/10 backdrop-blur-sm bg-transparent"
                    >
                      {t("playGames")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  {t("learnFinancialSkills")}
                </h2>
                <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("learnFinancialSkillsDesc")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <PiggyBank className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{t("savingBasics")}</h3>
                    <p className="text-zinc-300">{t("savingBasicsDesc")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Wallet className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{t("budgeting")}</h3>
                    <p className="text-zinc-300">{t("budgetingDesc")}</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <CreditCard className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{t("banking")}</h3>
                    <p className="text-zinc-300">{t("bankingDesc")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Lightbulb className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{t("smartSpending")}</h3>
                    <p className="text-zinc-300">{t("smartSpendingDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  {t("featuredArticles")}
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("featuredArticlesDesc")}</p>
              </div>
              <Link href="/articles" className="flex items-center gap-2 text-orange-400 hover:text-orange-300">
                {t("viewAllArticles")} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-orange-400">{t("whatIsMoney")}</CardTitle>
                  <CardDescription className="text-zinc-400">{t("whatIsMoneyDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/money-concept.jpg"
                    alt="Money illustration"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full mb-4"
                  />
                  <p className="text-zinc-300">
                    Learn about the history of money and how it works in our modern world.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/articles/what-is-money">
                    <Button variant="link" className="text-orange-400 hover:text-orange-300 p-0">
                      {t("readMore")} <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-orange-400">{t("savingVsSpending")}</CardTitle>
                  <CardDescription className="text-zinc-400">{t("savingVsSpendingDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/saving-spending.jpg"
                    alt="Saving illustration"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full mb-4"
                  />
                  <p className="text-zinc-300">
                    Discover how to balance saving for the future while enjoying life today.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/articles/saving-vs-spending">
                    <Button variant="link" className="text-orange-400 hover:text-orange-300 p-0">
                      {t("readMore")} <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-orange-400">{t("mobileBanking101")}</CardTitle>
                  <CardDescription className="text-zinc-400">{t("mobileBanking101Desc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/mobile-banking.jpg"
                    alt="Mobile banking illustration"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full mb-4"
                  />
                  <p className="text-zinc-300">
                    Learn how to safely use mobile banking apps and digital payment methods.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/articles/mobile-banking-101">
                    <Button variant="link" className="text-orange-400 hover:text-orange-300 p-0">
                      {t("readMore")} <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  {t("interactiveWorkshops")}
                </h2>
                <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("interactiveWorkshopsDesc")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Users className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{t("groupLearning")}</h3>
                    <p className="text-zinc-300">{t("groupLearningDesc")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Calendar className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{t("flexibleScheduling")}</h3>
                    <p className="text-zinc-300">{t("flexibleSchedulingDesc")}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-400 text-black hover:bg-orange-300">{t("workshopPackage")}</Button>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-orange-400 text-orange-400 hover:bg-orange-400/10 bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {t("contactUs")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-orange-400">
                <Image
                  src="/images/workshop-students.jpg"
                  alt="Students in workshop session"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Games Preview */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  {t("learnThroughPlay")}
                </h2>
                <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("learnThroughPlayDesc")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-orange-400">{t("budgetHero")}</h3>
                <p className="text-zinc-300">{t("budgetHeroDesc")}</p>
                <Link href="/games/budget-hero">
                  <Button className="bg-orange-400 text-black hover:bg-orange-300 w-full sm:w-auto">
                    {t("playNow")}
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-orange-400">
                <Image
                  src="/images/budget-hero-preview.jpg"
                  alt="Budget Hero game screenshot"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
