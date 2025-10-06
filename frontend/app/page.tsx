"use client"

import { motion, Variants } from "framer-motion"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search, Users, Briefcase, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
}

const cardContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-8">
              <a href="/jobs" className="text-sm font-medium hover:text-primary transition-colors">
                Find Jobs
              </a>
              <a href="/employers" className="text-sm font-medium hover:text-primary transition-colors">
                For Employers
              </a>
              <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className="bg-gradient-to-r from-[#8B0000] to-[#3b82f6] text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={cardContainerVariants}
                className="space-y-4"
              >
                <motion.div variants={cardVariants}>
                  <Badge variant="secondary" className="w-fit bg-primary/10 border-primary/20 text-primary">
                    Connecting Rwanda's Talent
                  </Badge>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl lg:text-6xl font-heading font-bold tracking-tight text-balance text-foreground"
                >
                  Your career
                  <span className="text-primary"> journey starts here</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="text-xl text-muted-foreground text-pretty max-w-lg"
                >
                  Join Rwanda's premier job marketplace connecting skilled professionals with quality employers. 
                  <span className="font-medium text-primary">Build your future with RNRS.</span>
                </motion.p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                  <Button size="lg" asChild className="text-base w-full sm:w-auto bg-gradient-to-r from-[#8B0000] to-[#3b82f6] text-white button-glow transition-all duration-300">
                    <Link href="/auth/login">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                  <Button variant="outline" size="lg" className="text-base w-full sm:w-auto bg-transparent hover:bg-primary/5 transition-all duration-300" asChild>
                    <Link href="/jobs">Browse Jobs</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="flex items-center gap-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1,200+</div>
                  <div className="text-sm text-muted-foreground">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5,000+</div>
                  <div className="text-sm text-muted-foreground">Job Seekers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">800+</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-team.jpg"
                  alt="Professional team collaboration"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <motion.section 
        className="py-24 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">How RNRS Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to connect talent with opportunity
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={cardContainerVariants}
          >
            {[
              { icon: Search, title: "Search & Discover", description: "Browse thousands of job opportunities from top employers across Rwanda." },
              { icon: Users, title: "Apply & Connect", description: "Submit applications with your professional profile and track your progress." },
              { icon: Briefcase, title: "Get Hired", description: "Land your dream job and start building your career with leading companies." }
            ].map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div whileHover={{ y: -8, scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }} transition={{ duration: 0.3, ease: 'easeOut' }}>
                  <Card className="text-center p-8 h-full">
                    <CardContent className="space-y-4">
                      <motion.div whileHover={{ rotate: 10, scale: 1.2 }} className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <item.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <motion.section 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="relative" variants={cardVariants}>
              <Image
                src="/images/business-growth.jpg"
                alt="Business growth and success"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div className="space-y-8" variants={cardContainerVariants}>
              <motion.div className="space-y-4" variants={cardVariants}>
                <Badge variant="secondary" className="w-fit">
                  Success Stories
                </Badge>
                <h2 className="text-3xl font-bold">Empowering Rwanda's workforce</h2>
                <p className="text-lg text-muted-foreground">
                  From entry-level positions to executive roles, RNRS has helped thousands of Rwandans find meaningful
                  employment and build successful careers.
                </p>
              </motion.div>

              <motion.div className="space-y-4" variants={cardContainerVariants}>
                <motion.div variants={cardVariants} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">95% Success Rate</div>
                    <div className="text-sm text-muted-foreground">
                      Job seekers who complete their profiles get hired within 3 months
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={cardVariants} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Quality Employers</div>
                    <div className="text-sm text-muted-foreground">
                      Vetted companies offering competitive salaries and growth opportunities
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={cardVariants} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Career Support</div>
                    <div className="text-sm text-muted-foreground">
                      Professional guidance and resources to advance your career
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div variants={cardVariants}>
                <Button size="lg" asChild>
                  <Link href="/about">
                    Read Success Stories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to transform your career?</h2>
            <p className="text-xl opacity-90">
              Join thousands of professionals who have found their dream jobs through RNRS. Your next opportunity is
              just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/auth/signup">
                    Create Your Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  asChild
                >
                  <Link href="/jobs">Explore Jobs</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-muted-foreground">
                Connecting Rwanda's talent with opportunity. Building careers, transforming lives.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">For Job Seekers</h4>
              <div className="space-y-2 text-sm">
                <a href="/jobs" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Browse Jobs
                </a>
                <a href="/profile" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Create Profile
                </a>
                <a href="/resources" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Career Resources
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">For Employers</h4>
              <div className="space-y-2 text-sm">
                <a href="/post-job" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Post a Job
                </a>
                <a href="/pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
                <a
                  href="/employer-resources"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Employer Resources
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
                <a href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
                <a href="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 RNRS - Raising Non Employed Rwandans. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}