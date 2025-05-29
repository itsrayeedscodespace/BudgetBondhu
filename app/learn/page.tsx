import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen, Play, CheckCircle } from "lucide-react"

export default function LearnPage() {
  // Course modules data
  const modules = [
    {
      id: "financial-basics",
      title: "Financial Basics",
      description: "Master the fundamentals of personal finance",
      duration: "4 weeks",
      lessons: 12,
      image: "/placeholder.svg?height=200&width=400",
      completed: false,
    },
    {
      id: "digital-money",
      title: "Digital Money & Banking",
      description: "Learn about modern banking and digital currencies",
      duration: "3 weeks",
      lessons: 9,
      image: "/placeholder.svg?height=200&width=400",
      completed: false,
    },
    {
      id: "investing-entrepreneurship",
      title: "Investing & Entrepreneurship",
      description: "Advanced concepts for growing and managing wealth",
      duration: "5 weeks",
      lessons: 15,
      image: "/placeholder.svg?height=200&width=400",
      completed: false,
    },
  ]

  // Sample lesson for the first module
  const sampleLessons = [
    {
      id: 1,
      title: "What is Money?",
      duration: "15 min",
      type: "video",
      completed: true,
    },
    {
      id: 2,
      title: "History of Currency",
      duration: "20 min",
      type: "reading",
      completed: true,
    },
    {
      id: 3,
      title: "Types of Money",
      duration: "18 min",
      type: "interactive",
      completed: false,
    },
    {
      id: 4,
      title: "Money Around the World",
      duration: "25 min",
      type: "video",
      completed: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400">
                  Financial Education Courses
                </h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive courses designed to build your financial knowledge step by step.
                </p>
              </div>
            </div>

            {/* Course Modules */}
            <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <Card key={module.id} className="bg-zinc-900 border-zinc-800 text-zinc-100">
                  <div className="relative">
                    <Image
                      src={module.image || "/placeholder.svg"}
                      alt={module.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-orange-400">{module.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-zinc-300">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-orange-400" />
                        {module.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-orange-400" />
                        {module.lessons} lessons
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-400 text-black hover:bg-orange-300" asChild>
                      <Link href={`/learn/${module.id}`}>{module.completed ? "Continue" : "Start Course"}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Sample Course Content */}
            <div className="mt-16">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-orange-400">
                    Course Preview: Financial Basics
                  </h2>
                  <p className="max-w-[700px] text-zinc-400 md:text-lg">
                    Take a look at what you'll learn in our foundational course.
                  </p>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                  <CardHeader>
                    <CardTitle className="text-orange-400">Module 1: Understanding Money</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Learn the fundamental concepts of money and currency
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sampleLessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-400/20">
                              {lesson.completed ? (
                                <CheckCircle className="h-4 w-4 text-orange-400" />
                              ) : (
                                <Play className="h-4 w-4 text-orange-400" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium text-zinc-200">{lesson.title}</h4>
                              <div className="flex items-center gap-2 text-sm text-zinc-400">
                                <span>{lesson.duration}</span>
                                <span>•</span>
                                <span className="capitalize">{lesson.type}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant={lesson.completed ? "outline" : "default"}
                            size="sm"
                            className={
                              lesson.completed
                                ? "border-orange-400 text-orange-400"
                                : "bg-orange-400 text-black hover:bg-orange-300"
                            }
                          >
                            {lesson.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-400 text-black hover:bg-orange-300">
                      Enroll in Full Course
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
