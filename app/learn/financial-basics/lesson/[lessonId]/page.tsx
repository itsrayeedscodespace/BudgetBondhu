"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, Play, BookOpen, HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { markLessonComplete, isLessonCompleted, isModuleCompleted } from "@/lib/course-progress"
import QuizComponent from "@/components/quiz-component"

export default function LessonPage() {
  const { t } = useLanguage()
  const params = useParams()
  const router = useRouter()
  const lessonId = Number.parseInt(params.lessonId as string)
  const [completed, setCompleted] = useState(false)

  const courseId = "financial-basics" // Define the courseId for this page

  // Sample lesson data - in a real app this would come from a database
  const lessons = [
    {
      id: 1,
      title: "What is Money?",
      type: "video",
      content: "Video content about the definition and functions of money...",
      moduleId: 1,
    },
    {
      id: 2,
      title: "History of Currency",
      type: "reading",
      content: `# History of Currency
**Module 1 – Lesson 2**

🕒 **Estimated Time:** 20 minutes  
📚 **Explore how money evolved from bartering to modern digital currencies.**

## 💡 Introduction: What is Currency?

Currency is a system of money — it helps us buy things, trade, save, and plan. But the money we know today wasn't always around. In fact, it took thousands of years to get to the cash, cards, and apps we now use!

Let's travel through time to see how humans went from trading goats to scanning QR codes.

## 🔁 The Age of Barter

Before money existed, people used the **barter system**.

🔸 **Barter = exchanging goods or services directly**  
**Example:** You give me bananas, I give you milk.

💬 **Problem?** What if I want rice, but you only have fish?

👉 Barter needed a **double coincidence of wants** — both people had to want what the other had. It was slow and inefficient.

## 🐚 The First "Money": Natural & Unofficial

To fix that, people started using items everyone valued as a form of early money:

- 🐚 **Cowrie shells** – widely used in Africa & Asia
- 🧂 **Salt** – used as "salary" (that word comes from "sal", the Latin word for salt!)
- 🔹 **Beads & feathers**
- 🪨 **Large stone disks** in Micronesia!

These items were valuable, rare, and accepted — but they weren't perfect. You couldn't cut a shell in half to make change, and carrying giant rocks around wasn't ideal.

## 🪙 Metal Coins: The First Official Money

Around **600 BCE**, the Lydians (in present-day Turkey) made the first metal coins. They were:

- Made of gold, silver, bronze
- Stamped with government seals
- Durable and easy to carry

💬 **Coins solved many barter problems:**
- You could measure value
- They lasted long
- You could get exact change

Soon, civilizations like the Greeks, Romans, Chinese, and Indians adopted coins too.

## 🧾 The Invention of Paper Money

Did you know **China invented paper money over 1,000 years ago?**

Instead of carrying heavy coins, people used:
- Promissory notes (like IOUs)
- Then government-issued banknotes

🧠 **Why was paper money better?**
- Lighter and easier to carry
- Easier for governments to print in large numbers
- Safer than carrying lots of coins

Eventually, paper money spread to Europe, the Middle East, and the rest of the world.

## 🏦 Banks and Modern Currencies

In the 1600s–1800s, countries began creating central banks to print and control money.

Each nation began issuing official currencies like:
- British Pound
- US Dollar
- Japanese Yen
- **Bangladeshi Taka (our own!)**

These notes were backed by gold at one time, but now they work mostly on trust and government regulation.

💡 **That's why a taka note says "Legal Tender" — it means everyone has to accept it in the country.**

## 💳 Plastic Money: Cards & Cheques

In the 1900s, things changed again.

People began using:
- **Cheques** — written promises to pay
- **Credit cards** — introduced in the 1950s
- **Debit cards** — connected to your bank account

🔒 Cards brought convenience, speed, and new technology — like swiping, PIN codes, and later, contactless payments.

## 📱 Digital Money and Mobile Payments

Now, money has gone completely digital:

- **bKash, Nagad, Rocket** – mobile banking in Bangladesh
- **PayPal, Google Pay, Apple Pay** – global digital wallets
- **Online banking** via apps and websites
- **QR code scanning** to pay in shops

You don't always need cash — you just need a phone and internet!

## 🌐 The Future: Cryptocurrency

One of the biggest inventions in recent years is **cryptocurrency**.

- Bitcoin, Ethereum, and others are digital coins made using computer code
- They're **decentralized** — meaning no government controls them
- People use them to buy, invest, or trade online

💡 **But they're still risky and not accepted everywhere — so they're more like "digital gold" right now.**

## 🧠 Why You Should Care

You may not use money to pay bills yet — but one day, you will.

Understanding how money evolved, works, and changes helps you:
- Be a smarter spender
- Understand global news
- Get ready for the future
- And who knows — maybe you'll invent the next form of currency someday! 💡`,
      moduleId: 1,
    },
    {
      id: 3,
      title: "Types of Money Quiz",
      type: "quiz",
      content: "Interactive quiz about different forms of money...",
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the barter system?",
            options: [
              "Using mobile money",
              "Trading goods without using money",
              "A type of bank account",
              "Investing in crypto",
            ],
            correct: 1,
            explanation: "Barter is the direct exchange of goods and services without using money.",
          },
          {
            id: 2,
            question: "Which of these was NOT used as early money?",
            options: ["Cowrie shells", "Salt", "Feathers", "Plastic bottles"],
            correct: 3,
            explanation: "Plastic bottles are modern items and were never used as early forms of money.",
          },
          {
            id: 3,
            question: "Which country invented paper money?",
            options: ["Greece", "Egypt", "China", "India"],
            correct: 2,
            explanation: "China invented paper money over 1,000 years ago during the Tang Dynasty.",
          },
          {
            id: 4,
            question: "What made coins better than bartering?",
            options: ["Easier to carry", "Had a set value", "Could last longer", "All of the above"],
            correct: 3,
            explanation:
              "Coins solved many problems of bartering - they were portable, had standardized value, and were durable.",
          },
          {
            id: 5,
            question: "What does 'legal tender' mean?",
            options: [
              "Money that smells good",
              "Fake currency",
              "Money that must be accepted by law",
              "Money from another country",
            ],
            correct: 2,
            explanation: "Legal tender means the money must be accepted for payment of debts by law.",
          },
          {
            id: 6,
            question: "What is a credit card?",
            options: [
              "A money-growing plant",
              "A card that lets you borrow and pay later",
              "A special ID card",
              "A way to send voice messages",
            ],
            correct: 1,
            explanation: "A credit card allows you to borrow money from a bank and pay it back later.",
          },
          {
            id: 7,
            question: "Which of these is a digital payment method in Bangladesh?",
            options: ["Rocket", "bKash", "Nagad", "All of the above"],
            correct: 3,
            explanation: "Rocket, bKash, and Nagad are all popular mobile financial services in Bangladesh.",
          },
          {
            id: 8,
            question: "What is cryptocurrency?",
            options: [
              "Fake money",
              "Paper notes in China",
              "Digital money made by computers",
              "Coins with cartoons on them",
            ],
            correct: 2,
            explanation:
              "Cryptocurrency is digital money created and managed using computer algorithms and cryptography.",
          },
          {
            id: 9,
            question: "Which one is NOT a real-world example of money?",
            options: ["Gold coins", "Chocolate wrappers", "Mobile money", "Debit card"],
            correct: 1,
            explanation: "Chocolate wrappers have no monetary value and are not accepted as payment.",
          },
          {
            id: 10,
            question: "What is the main purpose of money?",
            options: ["To play games", "To watch videos", "To exchange goods and services", "To grow on trees"],
            correct: 2,
            explanation: "Money's primary function is to facilitate the exchange of goods and services.",
          },
        ],
      },
      moduleId: 1,
    },
    {
      id: 4,
      title: "Jobs and Careers",
      type: "video",
      content: "Video about different ways people earn money through work...",
      moduleId: 2,
    },
    {
      id: 5,
      title: "Allowances and Chores",
      type: "reading",
      content: `# Allowances and Chores
🕒 **Estimated Time:** 15–20 minutes
📚 **How to earn money at home and manage your allowance**

💬 **What Is an Allowance?**
An allowance is money that parents or guardians give children regularly — usually every week or month. It's like a small personal income just for you!

People give allowances so children can:
- Learn how to handle money
- Practice saving, spending, and planning
- Feel responsible for their own small expenses

It’s not just “free money” — it’s a chance to build smart money habits early.

🧹 **What Are Chores?**
Chores are the small jobs you do at home to help out your family. These include:
- Making your bed
- Cleaning your room
- Washing dishes
- Watering plants
- Walking the dog
- Taking out the trash
- Helping with grocery shopping
- Doing laundry

These tasks might seem small, but they teach you important life skills like responsibility, time management, and teamwork.

💰 **Should You Get Paid for Chores?**
Some families give money in exchange for chores — like a reward for completing your tasks. Others give a fixed allowance no matter what, and chores are just expected.

There’s no single “right way” — it depends on your family’s values.

But here are two common approaches:
1. **Earning-Based Allowance (Chore-for-Pay)**
You do specific jobs and get paid for each one.
Example:
- Wash dishes = 10 taka
- Clean the living room = 20 taka
✅ Teaches: Work = money, effort = reward

2. **Fixed Allowance + Expected Chores**
You get a set amount weekly (e.g. 100 taka), but you're still expected to help at home.
✅ Teaches: Responsibility comes with being part of a family

Some families use a mix: basic chores are unpaid, but you can do extra tasks for bonus money.

📊 **How to Manage Your Allowance**
Now that you’re earning or receiving some money, what next? Don’t just spend it all!

Try the **50-30-20 Rule for Kids:**
- 50% for Spending – Snacks, toys, games
- 30% for Saving – For something big later, like a bike or a birthday gift
- 20% for Giving – Help someone in need or donate to a cause

Or even better — make jars or envelopes for each category, so you can see where your money goes.

💡 **Tips for Making the Most of Your Money**
- **Track Your Spending**
Write down or use a phone note to list what you spend every week. It adds up fast!
- **Set a Goal**
Want to buy something big? Set a target and save up slowly.
- **Avoid Impulse Buys**
Just because you have money doesn’t mean you have to spend it right away.
- **Negotiate (Respectfully)**
Can you do extra chores for extra cash? Talk to your parents politely and make a plan.
- **Celebrate Milestones**
Saved 500 taka? That’s a win! Reward yourself in small ways — even if it’s just a proud smile.

💬 **Real Talk: Why This Matters**
Learning how to earn and manage money at home is like a practice match before the real game.

If you know:
- How to do work well
- How to budget what you earn
- How to wait and save for something you want
...then you’re already better prepared than many adults!

Money isn't just about buying stuff. It’s about choices. The earlier you learn to make smart choices, the stronger and more independent you’ll become.

🏁 **Final Thoughts**
Whether you get an allowance or earn money from chores, remember this:
You’re building money habits that will last a lifetime.
So be thoughtful, track your money, ask smart questions, and always look for ways to grow — just like a true Budget Bondhu.`,
      moduleId: 2,
    },
    {
      id: 6,
      title: "Entrepreneurship for Kids",
      type: "video",
      content: "Video about simple business ideas for young entrepreneurs...",
      moduleId: 2,
    },
    {
      id: 7,
      title: "Why Save Money?",
      type: "video",
      content: "Video about the importance of saving for the future...",
      moduleId: 3,
    },
    {
      id: 8,
      title: "Setting Savings Goals",
      type: "reading",
      content: "Reading about setting realistic and achievable savings goals...",
      moduleId: 3,
    },
    {
      id: 9,
      title: "Savings Strategies Quiz",
      type: "quiz",
      content: "Quiz about different saving strategies...",
      moduleId: 3,
    },
    {
      id: 10,
      title: "Needs vs Wants",
      type: "video",
      content: "Video about distinguishing between essential needs and optional wants...",
      moduleId: 4,
    },
    {
      id: 11,
      title: "Making Smart Purchases",
      type: "reading",
      content: "Reading about making informed buying decisions...",
      moduleId: 4,
    },
    {
      id: 12,
      title: "Final Assessment",
      type: "quiz",
      content: "Comprehensive quiz covering all course topics...",
      moduleId: 4,
    },
  ]

  // Define module structure for redirection logic
  const modules = [
    { id: 1, lessonIds: [1, 2, 3] },
    { id: 2, lessonIds: [4, 5, 6] },
    { id: 3, lessonIds: [7, 8, 9] },
    { id: 4, lessonIds: [10, 11, 12] },
  ]

  const currentLesson = lessons.find((lesson) => lesson.id === lessonId)
  const nextLesson = lessons.find((lesson) => lesson.id === lessonId + 1)
  const prevLesson = lessons.find((lesson) => lesson.id === lessonId - 1)

  useEffect(() => {
    setCompleted(isLessonCompleted(courseId, lessonId))
  }, [lessonId])

  const handleCompleteLesson = () => {
    markLessonComplete(courseId, lessonId)
    setCompleted(true)

    // Check if the current lesson is the last in its module
    const currentModule = modules.find((m) => m.lessonIds.includes(lessonId))
    if (currentModule) {
      const allLessonsInModuleCompleted = isModuleCompleted(courseId, currentModule.lessonIds)
      if (allLessonsInModuleCompleted) {
        router.push(`/learn/${courseId}/module-complete/${currentModule.id}`)
        return // Prevent further navigation if module is complete
      }
    }

    // If not the last lesson of a module, proceed to next lesson or course overview
    if (nextLesson) {
      router.push(`/learn/${courseId}/lesson/${nextLesson.id}`)
    } else {
      router.push(`/learn/${courseId}`) // Go back to course overview if no next lesson
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-5 w-5" />
      case "reading":
        return <BookOpen className="h-5 w-5" />
      case "quiz":
        return <HelpCircle className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  if (!currentLesson) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-orange-400 mb-4">Lesson Not Found</h1>
            <Link href={`/learn/${courseId}`}>
              <Button className="bg-orange-400 text-black hover:bg-orange-300">{t("backToCourses")}</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        {/* Header */}
        <section className="w-full py-6 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href={`/learn/${courseId}`}>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-orange-400">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t("backToCourses")}
                  </Button>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-400/20">
                    {getIcon(currentLesson.type)}
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-orange-400">{currentLesson.title}</h1>
                    <p className="text-sm text-zinc-400">Lesson {lessonId} of 12</p>
                  </div>
                </div>
              </div>

              {completed && (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">{t("completed")}</span>
                </div>
              )}
            </div>

            <div className="mt-4">
              <Progress value={(lessonId / 12) * 100} className="h-2" />
            </div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6 max-w-4xl">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-3">
                  {getIcon(currentLesson.type)}
                  {currentLesson.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Lesson Content Area */}
                <div className="bg-zinc-800 rounded-lg p-6 min-h-[400px]">
                  {currentLesson.type === "video" && (
                    <div className="space-y-4">
                      <div className="aspect-video bg-zinc-700 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                          <p className="text-zinc-300">Video Player Placeholder</p>
                          <p className="text-sm text-zinc-500 mt-2">
                            In a real implementation, this would be a video player
                          </p>
                        </div>
                      </div>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-zinc-300">{currentLesson.content}</p>
                      </div>
                    </div>
                  )}

                  {currentLesson.type === "reading" && (
                    <div className="prose prose-invert max-w-none">
                      <div className="space-y-4">
                        {currentLesson.id === 2 || currentLesson.id === 5 ? (
                          // Special formatting for History of Currency and Allowances and Chores lessons
                          <div
                            className="text-zinc-300 leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: currentLesson.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-400">$1</strong>')
                                .replace(
                                  /## (.*?)$/gm,
                                  '<h2 class="text-xl font-bold text-orange-400 mt-6 mb-4">$1</h2>',
                                )
                                .replace(/# (.*?)$/gm, '<h1 class="text-2xl font-bold text-orange-400 mb-6">$1</h1>')
                                .replace(/- (.*?)$/gm, '<li class="ml-4">• $1</li>')
                                .replace(/\n/g, "<br/>"),
                            }}
                          />
                        ) : (
                          <p className="text-zinc-300 text-lg leading-relaxed">{currentLesson.content}</p>
                        )}
                        <div className="bg-zinc-700 p-4 rounded-lg mt-6">
                          <h4 className="text-orange-400 font-semibold mb-2">Key Takeaways:</h4>
                          <ul className="text-zinc-300 space-y-1">
                            <li>• Understanding the basic concepts is crucial for financial literacy</li>
                            <li>• Apply these principles in your daily life</li>
                            <li>• Practice makes perfect - keep learning!</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentLesson.type === "quiz" && (
                    <QuizComponent lesson={currentLesson} onComplete={handleCompleteLesson} />
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div>
                    {prevLesson && (
                      <Link href={`/learn/${courseId}/lesson/${prevLesson.id}`}>
                        <Button
                          variant="outline"
                          className="border-orange-400 text-orange-400 hover:bg-orange-400/10 bg-transparent"
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Previous
                        </Button>
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {!completed &&
                      currentLesson.type !== "quiz" && ( // Only show "Mark Complete" for non-quiz lessons
                        <Button onClick={handleCompleteLesson} className="bg-green-600 hover:bg-green-700 text-white">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark Complete
                        </Button>
                      )}

                    {nextLesson &&
                      completed && ( // Show next button only if current lesson is completed
                        <Link href={`/learn/${courseId}/lesson/${nextLesson.id}`}>
                          <Button className="bg-orange-400 text-black hover:bg-orange-300">
                            Next
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      )}

                    {!nextLesson && completed && (
                      <Link href={`/learn/${courseId}`}>
                        <Button className="bg-orange-400 text-black hover:bg-orange-300">Course Complete!</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
