import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import aiThumb from "@assets/generated_images/ai_course_thumbnail_with_brain_circuit.png";
import webThumb from "@assets/generated_images/web_development_course_thumbnail.png";
import dataThumb from "@assets/generated_images/data_science_course_thumbnail.png";

export default function Dashboard() {
  return (
    <Layout userType="learner">
      <div className="p-8 space-y-8 bg-muted/30 min-h-full">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Welcome back, Jane! 👋</h1>
            <p className="text-muted-foreground mt-2">You've completed 85% of your weekly goal. Keep it up!</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
            <div className="flex items-center gap-2 text-2xl font-bold text-primary">
              <span className="text-orange-500">🔥</span> 12 Days
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Courses in Progress", value: "3", icon: Clock, color: "text-blue-500" },
            { label: "Lessons Completed", value: "24", icon: CheckCircle, color: "text-green-500" },
            { label: "Hours Spent", value: "18.5", icon: TrendingUp, color: "text-purple-500" },
            { label: "Certificates", value: "2", icon: Award, color: "text-yellow-500" },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`p-3 rounded-full bg-background border ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Learning */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-heading font-semibold">Continue Learning</h2>
            <Link href="/courses" className="text-primary hover:underline text-sm font-medium">View All Courses</Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-none shadow-md group cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-48 h-48 sm:h-auto bg-muted relative">
                  <img src={aiThumb} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt="Course" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Artificial Intelligence</div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Intro to Neural Networks</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">Understanding the basics of perceptrons and multi-layer networks.</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs font-medium text-muted-foreground">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <Button size="sm" className="w-full mt-4" asChild>
                       <Link href="/lesson/1">Resume Lesson</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-none shadow-md group cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-48 h-48 sm:h-auto bg-muted relative">
                  <img src={webThumb} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt="Course" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Web Development</div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Advanced React Patterns</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">Mastering hooks, context, and performance optimization techniques.</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs font-medium text-muted-foreground">
                      <span>Progress</span>
                      <span>32%</span>
                    </div>
                    <Progress value={32} className="h-2" />
                     <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                       <Link href="/lesson/2">Resume Lesson</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Recommended for You */}
        <section>
          <h2 className="text-xl font-heading font-semibold mb-6">Recommended for You</h2>
          <div className="grid md:grid-cols-3 gap-6">
             <Card className="border-none shadow-sm hover:shadow-lg transition-all cursor-pointer">
               <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                 <img src={dataThumb} className="w-full h-full object-cover" alt="Data Science" />
                 <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Beginner</div>
               </div>
               <CardContent className="p-4">
                 <h3 className="font-bold text-base mb-1">Data Science Fundamentals</h3>
                 <p className="text-xs text-muted-foreground mb-4">Learn Python, Pandas, and visualization.</p>
                 <div className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-1 text-muted-foreground">
                     <Clock className="w-3 h-3" /> 12h
                   </div>
                   <span className="font-semibold text-primary">Enroll</span>
                 </div>
               </CardContent>
             </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
