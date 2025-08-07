"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function LearnPage() {
  const { t } = useLanguage()

  // Course modules data
  const modules = [
    {
      id: "financial-basics",
      title: t("financialBasics"),
      description: t("financialBasicsDesc"),
      duration: `4 ${t("weeks")}`,
      lessons: 12,
      image: "/images/financial-basics.jpg",
      completed: false,
    },
    {
      id: "digital-money",
      title: t("digitalMoneyBanking"),
      description: t("digitalMoneyBankingDesc"),
      duration: `3 ${t("weeks")}`,
      lessons: 9,
      image: "/images/digital-banking.jpg",
      completed: false,
    },
    {
      id: "investing-entrepreneurship",
      title: t("investingEntrepreneurship"),
      description: t("investingEntrepreneurshipDesc"),
      duration: `5 ${t("weeks")}`,
      lessons: 15,
      image: "/images/investing-course.jpg",
      completed: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section with Background Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/learn.jpg" alt="Learning background" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400 drop-shadow-lg">
                  {t("financialEducationCourses")}
                </h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-md">
                  {t("financialEducationCoursesDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content Section */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container px-4 md:px-6">
            {/* Course Modules */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        {module.lessons} {t("lessons")}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-400 text-black hover:bg-orange-300" asChild>
                      <Link href={`/learn/${module.id}`}>{module.completed ? t("continue") : t("startCourse")}</Link>
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
