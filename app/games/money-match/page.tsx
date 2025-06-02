"use client"

import { useState, useEffect, useCallback, SetStateAction, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react"
import { Clock, Trophy, RotateCcw, Play } from "lucide-react"

const CurrencyGame = () => {
  // Extensive currency data
  const currencyData = [
    { country: "United States", currency: "US Dollar" },
    { country: "United Kingdom", currency: "British Pound" },
    { country: "Japan", currency: "Japanese Yen" },
    { country: "Germany", currency: "Euro" },
    { country: "France", currency: "Euro" },
    { country: "China", currency: "Chinese Yuan" },
    { country: "India", currency: "Indian Rupee" },
    { country: "Canada", currency: "Canadian Dollar" },
    { country: "Australia", currency: "Australian Dollar" },
    { country: "Brazil", currency: "Brazilian Real" },
    { country: "Russia", currency: "Russian Ruble" },
    { country: "South Korea", currency: "South Korean Won" },
    { country: "Mexico", currency: "Mexican Peso" },
    { country: "Switzerland", currency: "Swiss Franc" },
    { country: "Sweden", currency: "Swedish Krona" },
    { country: "Norway", currency: "Norwegian Krone" },
    { country: "Denmark", currency: "Danish Krone" },
    { country: "Poland", currency: "Polish Zloty" },
    { country: "Turkey", currency: "Turkish Lira" },
    { country: "South Africa", currency: "South African Rand" },
    { country: "Argentina", currency: "Argentine Peso" },
    { country: "Chile", currency: "Chilean Peso" },
    { country: "Colombia", currency: "Colombian Peso" },
    { country: "Peru", currency: "Peruvian Sol" },
    { country: "Venezuela", currency: "Venezuelan Bolívar" },
    { country: "Egypt", currency: "Egyptian Pound" },
    { country: "Saudi Arabia", currency: "Saudi Riyal" },
    { country: "UAE", currency: "UAE Dirham" },
    { country: "Israel", currency: "Israeli Shekel" },
    { country: "Iran", currency: "Iranian Rial" },
    { country: "Iraq", currency: "Iraqi Dinar" },
    { country: "Jordan", currency: "Jordanian Dinar" },
    { country: "Lebanon", currency: "Lebanese Pound" },
    { country: "Kuwait", currency: "Kuwaiti Dinar" },
    { country: "Qatar", currency: "Qatari Riyal" },
    { country: "Bahrain", currency: "Bahraini Dinar" },
    { country: "Oman", currency: "Omani Rial" },
    { country: "Thailand", currency: "Thai Baht" },
    { country: "Malaysia", currency: "Malaysian Ringgit" },
    { country: "Singapore", currency: "Singapore Dollar" },
    { country: "Indonesia", currency: "Indonesian Rupiah" },
    { country: "Philippines", currency: "Philippine Peso" },
    { country: "Vietnam", currency: "Vietnamese Dong" },
    { country: "Cambodia", currency: "Cambodian Riel" },
    { country: "Myanmar", currency: "Myanmar Kyat" },
    { country: "Bangladesh", currency: "Bangladeshi Taka" },
    { country: "Pakistan", currency: "Pakistani Rupee" },
    { country: "Sri Lanka", currency: "Sri Lankan Rupee" },
    { country: "Nepal", currency: "Nepalese Rupee" },
    { country: "Bhutan", currency: "Bhutanese Ngultrum" },
    { country: "Maldives", currency: "Maldivian Rufiyaa" },
    { country: "Afghanistan", currency: "Afghan Afghani" },
    { country: "Kazakhstan", currency: "Kazakhstani Tenge" },
    { country: "Uzbekistan", currency: "Uzbekistani Som" },
    { country: "Kyrgyzstan", currency: "Kyrgyzstani Som" },
    { country: "Tajikistan", currency: "Tajikistani Somoni" },
    { country: "Turkmenistan", currency: "Turkmenistani Manat" },
    { country: "Mongolia", currency: "Mongolian Tugrik" },
    { country: "North Korea", currency: "North Korean Won" },
    { country: "Nigeria", currency: "Nigerian Naira" },
    { country: "Kenya", currency: "Kenyan Shilling" },
    { country: "Ghana", currency: "Ghanaian Cedi" },
    { country: "Ethiopia", currency: "Ethiopian Birr" },
    { country: "Tanzania", currency: "Tanzanian Shilling" },
    { country: "Uganda", currency: "Ugandan Shilling" },
    { country: "Rwanda", currency: "Rwandan Franc" },
    { country: "Zambia", currency: "Zambian Kwacha" },
    { country: "Zimbabwe", currency: "Zimbabwean Dollar" },
    { country: "Botswana", currency: "Botswanan Pula" },
    { country: "Namibia", currency: "Namibian Dollar" },
    { country: "Morocco", currency: "Moroccan Dirham" },
    { country: "Algeria", currency: "Algerian Dinar" },
    { country: "Tunisia", currency: "Tunisian Dinar" },
    { country: "Libya", currency: "Libyan Dinar" },
    { country: "Sudan", currency: "Sudanese Pound" },
    { country: "New Zealand", currency: "New Zealand Dollar" },
    { country: "Fiji", currency: "Fijian Dollar" },
    { country: "Papua New Guinea", currency: "Papua New Guinean Kina" },
    { country: "Samoa", currency: "Samoan Tala" },
    { country: "Tonga", currency: "Tongan Paʻanga" },
    { country: "Vanuatu", currency: "Vanuatu Vatu" },
    { country: "Solomon Islands", currency: "Solomon Islands Dollar" },
    { country: "Czech Republic", currency: "Czech Koruna" },
    { country: "Hungary", currency: "Hungarian Forint" },
    { country: "Romania", currency: "Romanian Leu" },
    { country: "Bulgaria", currency: "Bulgarian Lev" },
    { country: "Croatia", currency: "Euro" },
    { country: "Serbia", currency: "Serbian Dinar" },
    { country: "Bosnia and Herzegovina", currency: "Bosnia and Herzegovina Convertible Mark" },
    { country: "North Macedonia", currency: "Macedonian Denar" },
    { country: "Albania", currency: "Albanian Lek" },
    { country: "Montenegro", currency: "Euro" },
    { country: "Moldova", currency: "Moldovan Leu" },
    { country: "Ukraine", currency: "Ukrainian Hryvnia" },
    { country: "Belarus", currency: "Belarusian Ruble" },
    { country: "Lithuania", currency: "Euro" },
    { country: "Latvia", currency: "Euro" },
    { country: "Estonia", currency: "Euro" },
    { country: "Finland", currency: "Euro" },
    { country: "Iceland", currency: "Icelandic Krona" },
    { country: "Greenland", currency: "Danish Krone" },
    { country: "Faroe Islands", currency: "Faroese Krona" },
  ]

  const [gameState, setGameState] = useState("menu") // 'menu', 'playing', 'finished'
  const [difficulty, setDifficulty] = useState("normal") // 'normal', 'timed'
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(180) // 3 minutes for timed mode
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [gameQuestions, setGameQuestions] = useState([])

  // Timer effect for timed mode
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined
    if (gameState === "playing" && difficulty === "timed" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState("finished")
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [gameState, difficulty, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const generateQuestion = useCallback(() => {
    const questionType = Math.random() < 0.5 ? "countryToCurrency" : "currencyToCountry"
    const correctAnswer = currencyData[Math.floor(Math.random() * currencyData.length)]

    let wrongAnswers
    if (questionType === "countryToCurrency") {
      wrongAnswers = currencyData
        .filter((item) => item.currency !== correctAnswer.currency)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((item) => item.currency)
    } else {
      wrongAnswers = currencyData
        .filter((item) => item.country !== correctAnswer.country)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((item) => item.country)
    }

    const allAnswers = shuffleArray([
      questionType === "countryToCurrency" ? correctAnswer.currency : correctAnswer.country,
      ...wrongAnswers,
    ])

    return {
      type: questionType,
      question:
        questionType === "countryToCurrency"
          ? `What is the currency of ${correctAnswer.country}?`
          : `Which country uses ${correctAnswer.currency}?`,
      options: allAnswers,
      correctAnswer: questionType === "countryToCurrency" ? correctAnswer.currency : correctAnswer.country,
      correctIndex: allAnswers.indexOf(
        questionType === "countryToCurrency" ? correctAnswer.currency : correctAnswer.country,
      ),
    }
  }, [])

  const startGame = (selectedDifficulty: SetStateAction<string>) => {
    setDifficulty(selectedDifficulty)
    setGameState("playing")
    setCurrentQuestion(1)
    setScore(0)
    setTimeLeft(180)
    setSelectedAnswer(null)
    setShowResult(false)

    // Generate all questions at start
    const questions = []
    for (let i = 0; i < 20; i++) {
      questions.push(generateQuestion())
    }
    setGameQuestions(questions)
    setQuestion(questions[0])
  }

  const handleAnswer = (answerIndex: SetStateAction<null>, answer: any) => {
    if (selectedAnswer !== null || showResult) return

    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answer === question.correctAnswer) {
      setScore((prev) => prev + 1)
    }

    setTimeout(() => {
      if (currentQuestion >= 20) {
        setGameState("finished")
      } else {
        setCurrentQuestion((prev) => prev + 1)
        setQuestion(gameQuestions[currentQuestion])
        setSelectedAnswer(null)
        setShowResult(false)
      }
    }, 1500)
  }

  const resetGame = () => {
    setGameState("menu")
    setCurrentQuestion(1)
    setScore(0)
    setTimeLeft(180)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuestion(null)
    setGameQuestions([])
  }

  const getScoreMessage = () => {
    const percentage = (score / 20) * 100
    if (percentage >= 90) return "Excellent! You're a currency expert! 🌟"
    if (percentage >= 80) return "Great job! Very impressive knowledge! 🎉"
    if (percentage >= 70) return "Good work! You know your currencies well! 👏"
    if (percentage >= 60) return "Not bad! Keep practicing! 💪"
    return "Keep studying those currencies! You'll get better! 📚"
  }

  if (gameState === "menu") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">💰 Money Match</h1>
            <p className="text-white/80 text-lg">Test your knowledge of world currencies!</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => startGame("normal")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Play size={20} />
              Normal Mode (No Timer)
            </button>

            <button
              onClick={() => startGame("timed")}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Clock size={20} />
              Timed Mode (3 Minutes)
            </button>
          </div>

          <div className="mt-8 text-center text-white/70 text-sm">20 questions • Multiple choice • Score tracking</div>
        </div>
      </div>
    )
  }

  if (gameState === "finished") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl text-center">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Game Complete!</h2>

          <div className="bg-white/20 rounded-2xl p-6 mb-6">
            <div className="text-5xl font-bold text-white mb-2">{score}/20</div>
            <div className="text-white/80 text-lg">Final Score</div>
            <div className="text-yellow-300 font-semibold mt-2">{Math.round((score / 20) * 100)}%</div>
          </div>

          <p className="text-white/90 text-lg mb-6">{getScoreMessage()}</p>

          {difficulty === "timed" && (
            <p className="text-white/70 mb-4">
              {timeLeft > 0 ? `Completed with ${formatTime(timeLeft)} remaining` : "Time ran out!"}
            </p>
          )}

          <button
            onClick={resetGame}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <RotateCcw size={20} />
            Play Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <div className="text-2xl font-bold">Question {currentQuestion}/20</div>
              <div className="text-white/70">Score: {score}/20</div>
            </div>

            {difficulty === "timed" && (
              <div className="text-right">
                <div className="flex items-center gap-2 text-white">
                  <Clock size={20} />
                  <span className={`text-2xl font-bold ${timeLeft < 30 ? "text-red-400" : ""}`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <div className="text-white/70 text-sm">Time Remaining</div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div
              className="bg-blue-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentQuestion / 20) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">{question?.question}</h2>

          {/* Answer Options */}
          <div className="space-y-4">
            {question?.options.map((option: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => {
              let buttonClass =
                "w-full p-4 text-left rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 "

              if (showResult) {
                if (index === question.correctIndex) {
                  buttonClass += "bg-green-500 text-white border-2 border-green-400"
                } else if (index === selectedAnswer) {
                  buttonClass += "bg-red-500 text-white border-2 border-red-400"
                } else {
                  buttonClass += "bg-white/20 text-white/50 border-2 border-white/20"
                }
              } else {
                buttonClass += "bg-white/20 hover:bg-white/30 text-white border-2 border-white/20 hover:border-white/40"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index, option)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </div>
                </button>
              )
            })}
          </div>

          {showResult && (
            <div className="mt-6 text-center">
              <div
                className={`text-lg font-semibold ${selectedAnswer === question.correctIndex ? "text-green-300" : "text-red-300"}`}
              >
                {selectedAnswer === question.correctIndex ? "✅ Correct!" : "❌ Incorrect!"}
              </div>
              {selectedAnswer !== question.correctIndex && (
                <div className="text-white/80 mt-2">The correct answer was: {question.correctAnswer}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurrencyGame;
