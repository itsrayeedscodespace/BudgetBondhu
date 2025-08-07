"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, FileText, HelpCircle, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getCourseProgress, isLessonCompleted, getCompletionPercentage, isModuleCompleted } from "@/lib/course-progress"

export default function FinancialBasicsPage() {
  const { t } = useLanguage()
  const courseId = "financial-basics"
  const [completedLessonsCount, setCompletedLessonsCount] = useState(0)
  const [completionPercentage, setCompletionPercentage] = useState(0)

  const courseInfo = {
    title: t("financialBasics"),
    description: "Master the fundamentals of personal finance and build a strong foundation for your financial future.",
    duration: `4 ${t("weeks")}`,
    totalLessons: 12,
    difficulty: t("beginner"),
    rating: 4.8,
  }

  const modules = [
    {
      id: 1,
      title: "Understanding Money",
      lessons: [
        {
          id: 1,
          title: "What is Money?",
          type: "video",
          duration: `15 ${t("min")}`,
          description: "Learn the basic definition and functions of money in our economy.",
        },
        {
          id: 2,
          title: "History of Currency",
          type: "reading",
          duration: `20 ${t("min")}`,
          description: "Explore how money evolved from bartering to modern digital currencies.",
        },
        {
          id: 3,
          title: "Types of Money Quiz",
          type: "quiz",
          duration: `10 ${t("min")}`,
          description: "Test your knowledge about different forms of money.",
        },
      ],
    },
    {
      id: 2,
      title: "Earning Money",
      lessons: [
        {
          id: 4,
          title: "Jobs and Careers",
          type: "video",
          duration: `18 ${t("min")}`,
          description: "Understanding different ways people earn money through work.",
        },
        {
          id: 5,
          title: "Allowances and Chores",
          type: "reading",
          duration: `12 ${t("min")}`,
          description: "How to earn money at home and manage your allowance.",
        },
        {
          id: 6,
          title: "Entrepreneurship for Kids",
          type: "video",
          duration: `22 ${t("min")}`,
          description: "Simple business ideas for young entrepreneurs.",
        },
      ],
    },
    {
      id: 3,
      title: "Saving Money",
      lessons: [
        {
          id: 7,
          title: "Why Save Money?",
          type: "video",
          duration: `16 ${t("min")}`,
          description: "Understanding the importance of saving for the future.",
        },
        {
          id: 8,
          title: "Setting Savings Goals",
          type: "reading",
          duration: `14 ${t("min")}`,
          description: "How to set realistic and achievable savings goals.",
        },
        {
          id: 9,
          title: "Savings Strategies Quiz",
          type: "quiz",
          duration: `8 ${t("min")}`,
          description: "Test your understanding of different saving strategies.",
        },
      ],
    },
    {
      id: 4,
      title: "Smart Spending",
      lessons: [
        {
          id: 10,
          title: "Needs vs Wants",
          type: "video",
          duration: `19 ${t("min")}`,
          description: "Learn to distinguish between essential needs and optional wants.",
        },
        {
          id: 11,
          title: "Making Smart Purchases",
          type: "reading",
          duration: `17 ${t("min")}`,
          description: "Tips for making informed buying decisions.",
        },
        {
          id: 12,
          title: "Final Assessment",
          type: "quiz",
          duration: `25 ${t("min")}`,
          description: "Comprehensive quiz covering all course topics.",
        },
      ],
    },
  ]

  useEffect(() => {
    const progress = getCourseProgress(courseId)
    setCompletedLessonsCount(progress.completedLessons.length)
    setCompletionPercentage(getCompletionPercentage(courseId, courseInfo.totalLessons))
  }, [courseInfo.totalLessons])

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />
      case "reading":
        return <BookOpen className="h-4 w-4" />
      case "quiz":
        return <HelpCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-blue-500/20 text-blue-400"
      case "reading":
        return "bg-green-500/20 text-green-400"
      case "quiz":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const isLessonDone = (lessonId: number) => isLessonCompleted(courseId, lessonId)
  const isModuleDone = (moduleLessons: { id: number }[]) =>
    isModuleCompleted(
      courseId,
      moduleLessons.map((lesson) => lesson.id),
    )

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full py-8 md:py-12 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/learn">
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-orange-400">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("backToCourses")}
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-orange-400/20 text-orange-400">
                      {courseInfo.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
                      <span className="text-sm text-zinc-400">{courseInfo.rating}</span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-orange-400">{courseInfo.title}</h1>
                  <p className="text-zinc-300 text-lg">{courseInfo.description}</p>

                  <div className="flex items-center gap-6 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {courseInfo.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {courseInfo.totalLessons} {t("lessons")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-orange-400">{t("courseProgress")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-zinc-300">{t("completed")}</span>
                        <span className="text-zinc-300">
                          {completedLessonsCount}/{courseInfo.totalLessons}
                        </span>
                      </div>
                      <Progress value={completionPercentage} className="h-2" />
                    </div>
                    <Link href={`/learn/${courseId}/lesson/1`}>
                      <Button className="w-full bg-orange-400 text-black hover:bg-orange-300 mt-4">
                        {completedLessonsCount > 0 ? t("continueLearning") : t("startLearningBtn")}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="w-full py-8 md:py-12 bg-black">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              {modules.map((module) => (
                <Card key={module.id} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-orange-400 flex items-center gap-2">
                      {t("module")} {module.id}: {module.title}
                      {isModuleDone(module.lessons) && (
                        <Badge className="bg-green-500/20 text-green-400 ml-2">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {t("completed")}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-400/20">
                              {isLessonDone(lesson.id) ? (
                                <CheckCircle className="h-4 w-4 text-orange-400" />
                              ) : (
                                getIcon(lesson.type)
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-medium text-zinc-200">{lesson.title}</h4>
                                <Badge className={`text-xs ${getTypeColor(lesson.type)}`}>
                                  {t(lesson.type as any)}
                                </Badge>
                              </div>
                              <p className="text-sm text-zinc-400 mb-1">{lesson.description}</p>
                              <div className="flex items-center gap-2 text-xs text-zinc-500">
                                <Clock className="h-3 w-3" />
                                {lesson.duration}
                              </div>
                            </div>
                          </div>
                          <Link href={`/learn/${courseId}/lesson/${lesson.id}`}>
                            <Button
                              variant={isLessonDone(lesson.id) ? "outline" : "default"}
                              size="sm"
                              className={
                                isLessonDone(lesson.id)
                                  ? "border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400/10"
                                  : "bg-orange-400 text-black hover:bg-orange-300"
                              }
                            >
                              {isLessonDone(lesson.id) ? t("review") : t("start")}
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
