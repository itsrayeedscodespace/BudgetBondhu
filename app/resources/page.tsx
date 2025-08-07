"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ResourcesPage() {
  const { t } = useLanguage()

  // Bank resources data
  const banks = [
    {
      id: "brac-bank",
      name: "BRAC Bank",
      description: "Resources and programs for young savers",
      logo: "/images/bank-logo.jpg",
      features: [
        "Youth savings accounts with no minimum balance",
        "Educational materials on financial literacy",
        "Mobile banking app with parental controls",
        "School banking programs",
      ],
      website: "https://www.bracbank.com",
    },
    {
      id: "prime-bank",
      name: "Prime Bank",
      description: "Financial education initiatives for children",
      logo: "/images/bank-logo.jpg",
      features: [
        "Special savings accounts for minors",
        "Financial literacy workshops",
        "Educational comics and games",
        "Student banking services",
      ],
      website: "https://www.primebank.com",
    },
    {
      id: "city-bank",
      name: "City Bank",
      description: "Youth-focused banking solutions",
      logo: "/images/bank-logo.jpg",
      features: [
        "Junior savings accounts",
        "Financial education resources",
        "School banking initiatives",
        "Digital banking for teens",
      ],
      website: "https://www.thecitybank.com",
    },
  ]

  // Tools data
  const tools = [
    {
      id: "savings-calculator",
      title: t("savingsCalculator"),
      description: t("savingsCalculatorDesc"),
      image: "/images/savings-calculator.jpg",
      link: "/tools/savings-calculator",
    },
    {
      id: "budget-template",
      title: t("budgetTemplate"),
      description: t("budgetTemplateDesc"),
      image: "/images/budget-template.jpg",
      link: "/tools/budget-template",
    },
    {
      id: "goal-tracker",
      title: t("goalTracker"),
      description: t("goalTrackerDesc"),
      image: "/images/goal-tracker.jpg",
      link: "/tools/goal-tracker",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section with Background Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/resources.jpg" alt="Resources background" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400 drop-shadow-lg">
                  {t("financialResources")}
                </h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-md">
                  {t("financialResourcesDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Content Section */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="banks" className="mt-6">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
                <TabsTrigger value="banks" className="data-[state=active]:bg-orange-400 data-[state=active]:text-black">
                  {t("bankResources")}
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-orange-400 data-[state=active]:text-black">
                  {t("financialTools")}
                </TabsTrigger>
              </TabsList>

              {/* Bank Resources Tab */}
              <TabsContent value="banks" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {banks.map((bank) => (
                    <Card key={bank.id} className="bg-zinc-900 border-zinc-800 text-zinc-100">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <Image
                            src={bank.logo || "/images/bank-logo.jpg"}
                            alt={`${bank.name} logo`}
                            width={200}
                            height={100}
                            className="h-16 object-contain"
                          />
                        </div>
                        <CardTitle className="text-orange-400">{bank.name}</CardTitle>
                        <CardDescription className="text-zinc-400">{bank.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-zinc-300">
                          {bank.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-orange-400 mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-orange-400 text-orange-400 hover:bg-orange-400/10 bg-transparent"
                          asChild
                        >
                          <Link href={bank.website} target="_blank" rel="noopener noreferrer">
                            {t("visitWebsite")} <ExternalLink className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Financial Tools Tab */}
              <TabsContent value="tools" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {tools.map((tool) => (
                    <Card key={tool.id} className="bg-zinc-900 border-zinc-800 text-zinc-100">
                      <CardHeader>
                        <CardTitle className="text-orange-400">{tool.title}</CardTitle>
                        <CardDescription className="text-zinc-400">{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={tool.image || "/images/savings-calculator.jpg"}
                          alt={tool.title}
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-full"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-orange-400 text-black hover:bg-orange-300" asChild>
                          <Link href={tool.link}>{t("useTools")}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
