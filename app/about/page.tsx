import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Financial Educator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah has over 15 years of experience in financial education and is passionate about teaching children about money management.",
    },
    {
      name: "Michael Chen",
      role: "Educational Content Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael specializes in creating engaging educational content that makes complex financial concepts accessible to young learners.",
    },
    {
      name: "Aisha Patel",
      role: "Game Development Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Aisha combines her expertise in game design and financial literacy to create fun and educational games for children.",
    },
    {
      name: "David Wilson",
      role: "Banking Partnership Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David works with banks and financial institutions to develop resources and programs for young savers.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section with Background Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about.jpg"
              alt="About us background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400 drop-shadow-lg">
                  About Us
                </h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-md">
                  Learn about our mission, vision, and the team behind Budget Bondhu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="mission" className="mt-6">
              <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
                <TabsTrigger
                  value="mission"
                  className="data-[state=active]:bg-orange-400 data-[state=active]:text-black"
                >
                  Our Mission
                </TabsTrigger>
                <TabsTrigger
                  value="vision"
                  className="data-[state=active]:bg-orange-400 data-[state=active]:text-black"
                >
                  Our Vision
                </TabsTrigger>
                <TabsTrigger value="team" className="data-[state=active]:bg-orange-400 data-[state=active]:text-black">
                  Our Team
                </TabsTrigger>
              </TabsList>

              {/* Mission Tab */}
              <TabsContent value="mission" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold text-orange-400 mb-4">Our Mission</h2>
                    <div className="space-y-4 text-zinc-300">
                      <p>
                        At Budget Bondhu, our mission is to empower children and teenagers with the knowledge, skills,
                        and confidence to make sound financial decisions throughout their lives.
                      </p>
                      <p>
                        We believe that financial literacy is a fundamental life skill that should be accessible to all
                        young people, regardless of their background or circumstances. By providing engaging,
                        age-appropriate educational resources, we aim to build a foundation for lifelong financial
                        well-being.
                      </p>
                      <p>
                        Our goal is to make learning about money fun, interactive, and relevant to the lives of children
                        under 17. We strive to break down complex financial concepts into understandable lessons that
                        inspire curiosity and build confidence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Children learning about finance"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Vision Tab */}
              <TabsContent value="vision" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="flex items-center justify-center order-last lg:order-first">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Future of financial education"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-orange-400 mb-4">Our Vision</h2>
                    <div className="space-y-4 text-zinc-300">
                      <p>
                        We envision a world where every child has the opportunity to develop strong financial literacy
                        skills from an early age, leading to a future generation of financially responsible and
                        independent adults.
                      </p>
                      <p>
                        We see Budget Bondhu as a catalyst for change in how financial education is approached for young
                        people. By combining technology, gamification, and sound educational principles, we aim to
                        create a new standard for teaching children about money.
                      </p>
                      <p>
                        Our vision extends beyond just teaching about traditional banking and saving. We're committed to
                        preparing young people for the evolving financial landscape, including digital currencies,
                        mobile banking, and emerging financial technologies.
                      </p>
                      <p>
                        Ultimately, we aspire to reduce financial anxiety and increase financial confidence among young
                        people, contributing to more economically empowered communities.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Team Tab */}
              <TabsContent value="team" className="mt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-orange-400 text-center">Meet Our Team</h2>
                  <p className="text-zinc-300 text-center max-w-3xl mx-auto">
                    Our dedicated team of financial educators, content creators, and technology experts are passionate
                    about making financial education accessible and engaging for children.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                      <Card key={member.name} className="bg-zinc-900 border-zinc-800">
                        <CardContent className="p-4">
                          <div className="aspect-square overflow-hidden rounded-full mb-4">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={300}
                              height={300}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <h3 className="text-lg font-bold text-orange-400">{member.name}</h3>
                          <p className="text-sm text-zinc-400 mb-2">{member.role}</p>
                          <p className="text-sm text-zinc-300">{member.bio}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Values Section */}
            <div className="mt-16">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-orange-400">Our Core Values</h2>
                  <p className="max-w-[700px] text-zinc-400 md:text-lg">
                    The principles that guide everything we do at Budget Bondhu.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Accessibility</h3>
                  <p className="text-zinc-300">
                    We believe financial education should be available to all children, regardless of background or
                    circumstances.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Engagement</h3>
                  <p className="text-zinc-300">
                    Learning about money should be fun, interactive, and relevant to children's lives.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Innovation</h3>
                  <p className="text-zinc-300">
                    We continuously explore new ways to make financial education more effective and engaging.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Empowerment</h3>
                  <p className="text-zinc-300">
                    We aim to build confidence and independence in young people's financial decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
