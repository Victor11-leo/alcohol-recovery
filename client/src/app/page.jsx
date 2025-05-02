import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Brain, CheckCircle, HeartPulse, Shield, Users } from "lucide-react"
import {SignInButton,SignedIn,SignedOut,UserButton} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const  LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">Recovery Compass</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#success-stories" className="text-sm font-medium hover:underline underline-offset-4">
              Success Stories
            </Link>
            <Link href="#support" className="text-sm font-medium hover:underline underline-offset-4">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <SignedIn><UserButton/></SignedIn>
            <SignedOut>
              <SignInButton>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  Log In
                </Button>            
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
                  Evidence-Based Recovery
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Predicting Your Path to Recovery from Alcohol Addiction
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered system analyzes your unique circumstances to provide personalized recovery insights and
                  support, helping you understand your journey and improve your chances of lasting sobriety.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href='/dashboard'>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Take Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1495399396117-a3763646f854?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxjb2hvbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Recovery journey visualization"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-teal-600" />
                      <span className="text-sm font-medium">78% Recovery Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">Our Approach</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Personalized Recovery Prediction</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our system combines medical expertise with advanced technology to provide personalized insights into
                  your recovery journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle>AI-Powered Analysis</CardTitle>
                  <CardDescription>
                    Our algorithm analyzes over 200 factors that influence recovery success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Using data from thousands of successful recovery cases, our system identifies patterns and factors
                    that contribute to lasting sobriety.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle>Privacy-Focused</CardTitle>
                  <CardDescription>Your information is encrypted and protected at every step</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We understand the sensitive nature of addiction recovery. Your data is secure, anonymous, and never
                    shared without your explicit consent.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle>Personalized Support</CardTitle>
                  <CardDescription>Connect with professionals based on your specific needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our system matches you with the right support resources, treatment options, and recovery
                    professionals based on your unique profile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">The Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our evidence-based approach combines clinical expertise with advanced technology
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <img
                src="https://images.unsplash.com/photo-1679426678184-733c16f694cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsY29ob2wlMjByZWNvdmVyeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Recovery prediction process"
                width={500}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Complete the Assessment</h3>
                      <p className="text-sm text-gray-500">
                        Answer questions about your history, current situation, and recovery goals through our secure
                        platform.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Receive Your Recovery Insights</h3>
                      <p className="text-sm text-gray-500">
                        Our system analyzes your data and provides a personalized recovery prediction and
                        recommendations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Connect with Specialists</h3>
                      <p className="text-sm text-gray-500">
                        Based on your profile, we connect you with the right treatment providers and support resources.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold">Track Your Progress</h3>
                      <p className="text-sm text-gray-500">
                        Monitor your recovery journey with ongoing assessments and adjustments to your personalized
                        plan.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        

        <section id="support" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
                  Take the First Step
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Recovery Journey Starts Here
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Complete our confidential assessment to receive your personalized recovery prediction and connect with
                  the support you need.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                </div>                
              </div>
              
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <div className="flex flex-col gap-3 lg:max-w-sm">
              <div className="flex items-center gap-2">
                <HeartPulse className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-bold">Recovery Compass</span>
              </div>
              <p className="text-sm text-gray-500">
                Our mission is to provide evidence-based tools and support to help individuals overcome alcohol
                addiction and achieve lasting recovery.
              </p>
            </div>
            
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Recovery Compass. All rights reserved. This site is for informational
              purposes only and is not a substitute for professional medical advice.
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
