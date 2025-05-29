import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  // Bank resources data
  const banks = [
    {
      id: "brac-bank",
      name: "BRAC Bank",
      description: "Resources and programs for young savers",
      logo: "/placeholder.svg?height=100&width=200",
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
      logo: "/placeholder.svg?height=100&width=200",
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
      logo: "/placeholder.svg?height=100&width=200",
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
      title: "Savings Calculator",
      description: "See how your savings can grow over time",
      image: "/placeholder.svg?height=200&width=300",
      link: "/tools/savings-calculator",
    },
    {
      id: "budget-template",
      title: "Budget Template",
      description: "Create your own personal budget",
      image: "/placeholder.svg?height=200&width=300",
      link: "/tools/budget-template",
    },
    {
      id: "goal-tracker",
      title: "Goal Tracker",
      description: "Track your progress toward savings goals",
      image: "/placeholder.svg?height=200&width=300",
      link: "/tools/goal-tracker",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400">Financial Resources</h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our collection of resources to help you learn about money and develop good financial habits.
                </p>
              </div>
            </div>

            <Tabs defaultValue="banks" className="mt-12">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
                <TabsTrigger value="banks" className="data-[state=active]:bg-orange-400 data-[state=active]:text-black">
                  Bank Resources
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-orange-400 data-[state=active]:text-black">
                  Financial Tools
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
                            src={bank.logo || "/placeholder.svg"}
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
                          className="w-full border-orange-400 text-orange-400 hover:bg-orange-400/10"
                          asChild
                        >
                          <Link href={bank.website} target="_blank" rel="noopener noreferrer">
                            Visit Website <ExternalLink className="h-4 w-4 ml-2" />
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
                          src={tool.image || "/placeholder.svg"}
                          alt={tool.title}
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-full"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-orange-400 text-black hover:bg-orange-300" asChild>
                          <Link href={tool.link}>Use Tool</Link>
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
