import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, CreditCard, Lightbulb, PiggyBank, Wallet, Users, Calendar, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Financial education background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Content */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Making Money Make Sense
                  </h1>
                  <p className="max-w-[600px] text-orange-300 md:text-xl">
                    Fun and easy financial education for young minds. Learn about saving, spending, and growing your
                    money.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/learn">
                    <Button className="bg-orange-400 text-black hover:bg-orange-300">Start Learning</Button>
                  </Link>
                  <Link href="/games">
                    <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400/10">
                      Play Games
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  Learn Financial Skills for Life
                </h2>
                <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the tools and knowledge you need to make smart money decisions now and in the future.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <PiggyBank className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Saving Basics</h3>
                    <p className="text-zinc-300">Learn how to save money and why it's important.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Wallet className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Budgeting</h3>
                    <p className="text-zinc-300">Create your own budget and track your spending.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <CreditCard className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Banking</h3>
                    <p className="text-zinc-300">Understand how banks work and different account types.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Lightbulb className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Smart Spending</h3>
                    <p className="text-zinc-300">Learn to make wise choices with your money.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  Featured Articles
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">Read our featured content on financial topics.</p>
              </div>
              <Link href="/articles" className="flex items-center gap-2 text-orange-400 hover:text-orange-300">
                View all articles <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-orange-400">What is Money?</CardTitle>
                  <CardDescription className="text-zinc-400">Understanding the basics of currency</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
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
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-orange-400">Saving vs. Spending</CardTitle>
                  <CardDescription className="text-zinc-400">Finding the right balance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
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
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-orange-400">Mobile Banking 101</CardTitle>
                  <CardDescription className="text-zinc-400">Banking in the digital age</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
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
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  Interactive Workshops
                </h2>
                <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our engaging workshops designed specifically for high school students to build practical
                  financial skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Users className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Group Learning</h3>
                    <p className="text-zinc-300">Interactive sessions with peers and expert facilitators.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
                  <Calendar className="h-10 w-10 text-orange-400" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">Flexible Scheduling</h3>
                    <p className="text-zinc-300">Weekend and after-school sessions to fit your schedule.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-400 text-black hover:bg-orange-300">Workshop Package</Button>
                  <Link href="/contact">
                    <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400/10">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-orange-400">
                <Image
                  src="/placeholder.svg?height=300&width=500"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
                  Learn Through Play
                </h2>
                <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our fun financial games make learning about money exciting!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-orange-400">Budget Hero</h3>
                <p className="text-zinc-300">
                  Create a budget, make spending decisions, and see if you can meet your financial goals in this
                  interactive game.
                </p>
                <Link href="/games/budget-hero">
                  <Button className="bg-orange-400 text-black hover:bg-orange-300 w-full sm:w-auto">Play Now</Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-orange-400">
                <Image
                  src="/placeholder.svg?height=300&width=500"
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
