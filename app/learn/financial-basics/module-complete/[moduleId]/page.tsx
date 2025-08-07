"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ModuleCompletePage() {
  const { t } = useLanguage()
  const params = useParams()
  const moduleId = Number.parseInt(params.moduleId as string)

  // This data would ideally come from a centralized course data source
  const courseModules = {
    "financial-basics": [
      { id: 1, title: "Understanding Money", nextModuleId: 2 },
      { id: 2, title: "Earning Money", nextModuleId: 3 },
      { id: 3, title: "Saving Money", nextModuleId: 4 },
      { id: 4, title: "Smart Spending", nextModuleId: null }, // Last module
    ],
    "digital-money": [
      { id: 1, title: "Introduction to Digital Banking", nextModuleId: 2 },
      { id: 2, title: "Mobile Payment Systems", nextModuleId: 3 },
      { id: 3, title: "Cryptocurrency Basics", nextModuleId: null },
    ],
    "investing-entrepreneurship": [
      { id: 1, title: "Introduction to Investing", nextModuleId: 2 },
      { id: 2, title: "Stock Market Fundamentals", nextModuleId: 3 },
      { id: 3, title: "Entrepreneurship Basics", nextModuleId: 4 },
      { id: 4, title: "Advanced Financial Concepts", nextModuleId: null },
    ],
  }

  // Assuming this page is always for 'financial-basics' for now, adjust if needed for other courses
  const currentCourseId = "financial-basics" // This needs to be dynamic based on the route
  const moduleData = courseModules[currentCourseId as keyof typeof courseModules]?.find((m) => m.id === moduleId)

  const nextModuleData = moduleData?.nextModuleId
    ? courseModules[currentCourseId as keyof typeof courseModules]?.find((m) => m.id === moduleData.nextModuleId)
    : null

  if (!moduleData) {
    return (
      <div className="flex flex-col min-h-screen bg-black items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-orange-400 mb-4">Module Not Found</h1>
        <Link href={`/learn/${currentCourseId}`}>
          <Button className="bg-orange-400 text-black hover:bg-orange-300">{t("backToCourses")}</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center p-4">
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-100 max-w-md w-full text-center p-8">
        <CardContent className="space-y-6">
          <CheckCircle className="h-20 w-20 text-green-400 mx-auto" />
          <h1 className="text-3xl font-bold text-orange-400">
            {t("module")} {moduleId}: {moduleData.title} {t("completed")}! 🎉
          </h1>
          <p className="text-zinc-300 text-lg">You've successfully completed all lessons in this module. Great job!</p>

          <div className="flex flex-col gap-4">
            {nextModuleData ? (
              <Link href={`/learn/${currentCourseId}`}>
                <Button className="w-full bg-orange-400 text-black hover:bg-orange-300">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Continue to {t("module")} {nextModuleData.id}: {nextModuleData.title}
                </Button>
              </Link>
            ) : (
              <Link href={`/learn/${currentCourseId}`}>
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Course Completed! Back to Overview
                </Button>
              </Link>
            )}
            <Link href={`/learn/${currentCourseId}`}>
              <Button
                variant="outline"
                className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400 bg-transparent"
              >
                Back to Course Overview
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
