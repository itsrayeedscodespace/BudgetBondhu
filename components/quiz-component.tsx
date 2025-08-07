"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, HelpCircle } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

interface QuizComponentProps {
  lesson: {
    id: number
    title: string
    quiz?: {
      questions: QuizQuestion[]
    }
  }
  onComplete: () => void
}

export default function QuizComponent({ lesson, onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

  if (!lesson.quiz) {
    return (
      <div className="text-center">
        <HelpCircle className="h-16 w-16 text-orange-400 mx-auto mb-4" />
        <p className="text-zinc-300">Quiz content coming soon!</p>
      </div>
    )
  }

  const questions = lesson.quiz.questions
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return

    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    setShowResult(true)

    // Calculate score
    if (answerIndex === question.correct) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
      onComplete()
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResult(false)
    setQuizCompleted(false)
    setScore(0)
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
          <h3 className="text-2xl font-bold text-orange-400">Quiz Complete! 🎉</h3>
          <div className="bg-zinc-700 rounded-lg p-6">
            <div className="text-4xl font-bold text-white mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-zinc-300">Final Score: {percentage}%</div>
          </div>
          <div className="text-zinc-300">
            {percentage >= 80
              ? "Excellent work! You've mastered this topic! 🌟"
              : percentage >= 60
                ? "Good job! Keep practicing to improve! 👏"
                : "Keep studying and try again! You'll get better! 📚"}
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={handleRestart}
            variant="outline"
            className="border-orange-400 text-orange-400 bg-transparent"
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Quiz Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-orange-400">{lesson.title}</h3>
          <div className="text-sm text-zinc-400">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="bg-zinc-700 border-zinc-600">
        <CardHeader>
          <CardTitle className="text-zinc-200 text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left rounded-lg transition-all duration-200 border-2 "

            if (showResult) {
              if (index === question.correct) {
                buttonClass += "bg-green-600 border-green-500 text-white"
              } else if (index === selectedAnswers[currentQuestion]) {
                buttonClass += "bg-red-600 border-red-500 text-white"
              } else {
                buttonClass += "bg-zinc-600 border-zinc-500 text-zinc-400"
              }
            } else {
              buttonClass += "bg-zinc-600 border-zinc-500 text-zinc-200 hover:bg-zinc-500 hover:border-zinc-400"
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={buttonClass}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-zinc-500 flex items-center justify-center text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showResult && index === question.correct && (
                    <CheckCircle className="h-5 w-5 text-green-400 ml-auto" />
                  )}
                  {showResult && index === selectedAnswers[currentQuestion] && index !== question.correct && (
                    <XCircle className="h-5 w-5 text-red-400 ml-auto" />
                  )}
                </div>
              </button>
            )
          })}
        </CardContent>
      </Card>

      {/* Explanation */}
      {showResult && (
        <Card className="bg-zinc-700 border-zinc-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {selectedAnswers[currentQuestion] === question.correct ? (
                  <CheckCircle className="h-6 w-6 text-green-400" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-400" />
                )}
              </div>
              <div>
                <h4 className="font-semibold text-zinc-200 mb-2">
                  {selectedAnswers[currentQuestion] === question.correct ? "Correct!" : "Incorrect"}
                </h4>
                <p className="text-zinc-300">{question.explanation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      {showResult && (
        <div className="flex justify-end">
          <Button onClick={handleNext} className="bg-orange-400 text-black hover:bg-orange-300">
            {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
          </Button>
        </div>
      )}
    </div>
  )
}
