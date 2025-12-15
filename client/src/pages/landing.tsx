import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Brain, Users, BarChart } from "lucide-react";
import heroImage from "@assets/generated_images/modern_e-learning_platform_hero_with_students.png";

export default function LandingPage() {
  return (
    <Layout userType="guest">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                New: AI Tutor v2.0
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.1]">
                Master Skills with <br />
                <span className="text-primary">Intelligent Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                An adaptive learning platform that evolves with you. Personalized courses, real-time AI assistance, and smart progress tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 text-lg" asChild>
                  <Link href="/courses">Browse Courses</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                 src={heroImage} 
                 alt="Students learning with AI" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why AI for All?</h2>
            <p className="text-muted-foreground text-lg">
              We combine cutting-edge technology with proven pedagogical methods to deliver the most effective learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Personalization",
                desc: "Our AI analyzes your learning style and adapts the content difficulty in real-time."
              },
              {
                icon: BarChart,
                title: "Smart Analytics",
                desc: "Track your progress with detailed insights and predictive performance metrics."
              },
              {
                icon: Users,
                title: "Collaborative Hub",
                desc: "Connect with peers and mentors in a community driven by shared knowledge."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
