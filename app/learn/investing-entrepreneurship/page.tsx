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

export default function InvestingEntrepreneurshipPage() {
  const { t } = useLanguage()
  const courseId = "investing-entrepreneurship"
  const [completedLessonsCount, setCompletedLessonsCount] = useState(0)
  const [completionPercentage, setCompletionPercentage] = useState(0)

  const courseInfo = {
    title: t("investingEntrepreneurship"),
    description: "Advanced concepts for growing and managing wealth through investments and business ventures.",
    duration: `5 ${t("weeks")}`,
    totalLessons: 15,
    difficulty: t("advanced"),
    rating: 4.9,
  }

  const modules = [
    {
      id: 1,
      title: "Introduction to Investing",
      lessons: [
        {
          id: 1,
          title: "What is Investing?",
          type: "video",
          duration: `20 ${t("min")}`,
          description: "Understanding the basics of investing and why it matters.",
        },
        {
          id: 2,
          title: "Risk vs Reward",
          type: "reading",
          duration: `18 ${t("min")}`,
          description: "Learning about investment risks and potential returns.",
        },
        {
          id: 3,
          title: "Investment Types",
          type: "video",
          duration: `25 ${t("min")}`,
          description: "Overview of stocks, bonds, and other investment options.",
        },
        {
          id: 4,
          title: "Investment Basics Quiz",
          type: "quiz",
          duration: `15 ${t("min")}`,
          description: "Test your understanding of investment fundamentals.",
        },
      ],
    },
    {
      id: 2,
      title: "Stock Market Fundamentals",
      lessons: [
        {
          id: 5,
          title: "How the Stock Market Works",
          type: "video",
          duration: `22 ${t("min")}`,
          description: "Understanding stock exchanges and how trading works.",
        },
        {
          id: 6,
          title: "Reading Stock Charts",
          type: "reading",
          duration: `20 ${t("min")}`,
          description: "Learning to interpret stock price movements and trends.",
        },
        {
          id: 7,
          title: "Company Analysis",
          type: "video",
          duration: `28 ${t("min")}`,
          description: "How to research and evaluate companies before investing.",
        },
        {
          id: 8,
          title: "Stock Market Quiz",
          type: "quiz",
          duration: `12 ${t("min")}`,
          description: "Assessment of stock market knowledge.",
        },
      ],
    },
    {
      id: 3,
      title: "Entrepreneurship Basics",
      lessons: [
        {
          id: 9,
          title: "What is Entrepreneurship?",
          type: "video",
          duration: `19 ${t("min")}`,
          description: "Introduction to starting and running your own business.",
        },
        {
          id: 10,
          title: "Business Ideas for Teens",
          type: "reading",
          duration: `16 ${t("min")}`,
          description: "Practical business ideas suitable for young entrepreneurs.",
        },
        {
          id: 11,
          title: "Creating a Business Plan",
          type: "video",
          duration: `30 ${t("min")}`,
          description: "Step-by-step guide to writing a simple business plan.",
        },
        {
          id: 12,
          title: "Marketing Your Business",
          type: "reading",
          duration: `22 ${t("min")}`,
          description: "Basic marketing strategies for young entrepreneurs.",
        },
      ],
    },
    {
      id: 4,
      title: "Advanced Financial Concepts",
      lessons: [
        {
          id: 13,
          title: "Compound Interest Power",
          type: "video",
          duration: `24 ${t("min")}`,
          description: "Understanding how compound interest can grow your wealth.",
        },
        {
          id: 14,
          title: "Portfolio Diversification",
          type: "reading",
          duration: `18 ${t("min")}`,
          description: "Learning to spread risk across different investments.",
        },
        {
          id: 15,
          title: "Final Comprehensive Assessment",
          type: "quiz",
          duration: `35 ${t("min")}`,
          description: "Complete evaluation of all course concepts.",
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
