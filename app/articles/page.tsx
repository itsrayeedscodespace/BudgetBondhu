import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function ArticlesPage() {
  // Sample articles data
  const articles = [
    {
      id: "what-is-money",
      title: "What is Money?",
      description: "Understanding the basics of currency",
      excerpt: "Learn about the history of money and how it works in our modern world.",
      date: "May 10, 2023",
    },
    {
      id: "saving-vs-spending",
      title: "Saving vs. Spending",
      description: "Finding the right balance",
      excerpt: "Discover how to balance saving for the future while enjoying life today.",
      date: "June 15, 2023",
    },
    {
      id: "mobile-banking-101",
      title: "Mobile Banking 101",
      description: "Banking in the digital age",
      excerpt: "Learn how to safely use mobile banking apps and digital payment methods.",
      date: "July 22, 2023",
    },
    {
      id: "understanding-interest",
      title: "Understanding Interest",
      description: "How your money can grow",
      excerpt: "Learn how interest works and why it's important for saving and borrowing.",
      date: "August 5, 2023",
    },
    {
      id: "allowance-management",
      title: "Managing Your Allowance",
      description: "Making the most of your money",
      excerpt: "Tips and tricks for making your allowance last and grow over time.",
      date: "September 12, 2023",
    },
    {
      id: "crypto-for-kids",
      title: "Cryptocurrency Explained",
      description: "Digital money simplified",
      excerpt: "A kid-friendly explanation of what cryptocurrency is and how it works.",
      date: "October 18, 2023",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400">Financial Articles</h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our collection of articles to learn about money, saving, and smart financial decisions.
                </p>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.id} className="bg-zinc-900 border-zinc-800 text-zinc-100">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-zinc-400">{article.date}</span>
                    </div>
                    <CardTitle className="text-orange-400 mt-2">{article.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt={`${article.title} illustration`}
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full mb-4"
                    />
                    <p className="text-zinc-300">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/articles/${article.id}`}>
                      <Button variant="link" className="text-orange-400 hover:text-orange-300 p-0">
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
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
