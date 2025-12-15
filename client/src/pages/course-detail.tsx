import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayCircle, FileText, Lock, CheckCircle2, Clock, BarChart, Globe } from "lucide-react";
import { Link } from "wouter";
import aiThumb from "@assets/generated_images/ai_course_thumbnail_with_brain_circuit.png";

export default function CourseDetail() {
  return (
    <Layout userType="learner">
      {/* Course Hero */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-8 md:py-12">
           <div className="grid md:grid-cols-3 gap-8 md:gap-12">
             <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
                  <span>/</span>
                  <span>Artificial Intelligence</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground">
                  Intro to Neural Networks
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Deep dive into the architecture of neural networks, backpropagation, and implementing your first model using Python and PyTorch.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm">
                   <div className="flex items-center gap-2">
                     <Avatar className="w-8 h-8 border border-border">
                       <AvatarImage src="https://github.com/shadcn.png" />
                       <AvatarFallback>JD</AvatarFallback>
                     </Avatar>
                     <span className="font-medium">Dr. Sarah Connor</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-muted-foreground">
                     <Clock className="w-4 h-4" />
                     <span>Last updated June 2025</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-muted-foreground">
                     <Globe className="w-4 h-4" />
                     <span>English</span>
                   </div>
                </div>
             </div>
             
             {/* Floating Enrollment Card (Desktop) */}
             <div className="hidden md:block relative">
               <div className="absolute top-0 right-0 w-full">
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
                    <img src={aiThumb} className="w-full h-48 object-cover" alt="Course" />
                    <div className="p-6 space-y-6">
                       <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold font-heading">Free</span>
                            <Badge variant="secondary">Intermediate</Badge>
                         </div>
                         <Button size="lg" className="w-full text-lg font-semibold" asChild>
                           <Link href="/lesson/1">Enroll Now</Link>
                         </Button>
                         <p className="text-xs text-center text-muted-foreground">Full Lifetime Access • Certificate of Completion</p>
                       </div>
                       
                       <div className="space-y-3 pt-4 border-t border-border">
                          <h4 className="font-semibold text-sm">This course includes:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><PlayCircle className="w-4 h-4" /> 12 hours on-demand video</li>
                            <li className="flex items-center gap-2"><FileText className="w-4 h-4" /> 5 downloadable resources</li>
                            <li className="flex items-center gap-2"><BarChart className="w-4 h-4" /> 3 Coding Exercises</li>
                          </ul>
                       </div>
                    </div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          
          {/* Mobile Enroll Button */}
          <div className="md:hidden">
             <Button size="lg" className="w-full" asChild>
               <Link href="/lesson/1">Enroll Now</Link>
             </Button>
          </div>

          <Tabs defaultValue="content" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
              <TabsTrigger value="content" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-0 text-base">Course Content</TabsTrigger>
              <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-0 text-base">Overview</TabsTrigger>
              <TabsTrigger value="instructor" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-0 text-base">Instructor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-8 space-y-4">
               <div className="flex justify-between items-end mb-4">
                  <h3 className="text-xl font-bold">Course Syllabus</h3>
                  <span className="text-sm text-muted-foreground">14 Lessons • 8h 30m</span>
               </div>
               
               <Accordion type="single" collapsible defaultValue="item-1" className="w-full border rounded-lg overflow-hidden">
                 <AccordionItem value="item-1" className="border-b-0">
                   <AccordionTrigger className="px-6 hover:bg-muted/50 transition-colors">
                     <span className="font-semibold text-left">Module 1: Introduction to AI</span>
                   </AccordionTrigger>
                   <AccordionContent className="px-0 pb-0">
                     <div className="flex flex-col">
                        {[
                          { title: "What is Artificial Intelligence?", time: "10:00", type: "video", free: true },
                          { title: "History of Neural Networks", time: "15:30", type: "video", free: true },
                          { title: "Setting up your Environment", time: "08:45", type: "video", free: false },
                          { title: "Quiz: Basic Concepts", time: "5 Questions", type: "quiz", free: false },
                        ].map((lesson, i) => (
                           <div key={i} className="flex items-center justify-between py-3 px-6 hover:bg-muted/30 border-t border-border/50 cursor-pointer transition-colors group">
                              <div className="flex items-center gap-3">
                                 {lesson.type === 'video' ? <PlayCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary" /> : <CheckCircle2 className="w-4 h-4 text-muted-foreground" />}
                                 <span className="text-sm font-medium group-hover:text-primary transition-colors">{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                {lesson.free ? <Badge variant="outline" className="text-[10px] h-5">Preview</Badge> : <Lock className="w-3 h-3 text-muted-foreground" />}
                                <span className="text-xs text-muted-foreground w-12 text-right">{lesson.time}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                   </AccordionContent>
                 </AccordionItem>
                 
                 <AccordionItem value="item-2" className="border-t">
                   <AccordionTrigger className="px-6 hover:bg-muted/50 transition-colors">
                     <span className="font-semibold text-left">Module 2: Perceptrons & Logic</span>
                   </AccordionTrigger>
                   <AccordionContent className="px-6 py-4 text-muted-foreground text-sm">
                     Content locked. Enroll to view.
                   </AccordionContent>
                 </AccordionItem>
               </Accordion>
            </TabsContent>
            
             <TabsContent value="overview" className="mt-8">
               <div className="prose prose-slate max-w-none dark:prose-invert">
                 <h3>Description</h3>
                 <p>In this course, we start from the very beginning. You don't need any prior knowledge of AI, although basic Python programming skills will be helpful.</p>
                 <h3>What you'll learn</h3>
                 <ul>
                   <li>Understand the intuition behind Artificial Neural Networks</li>
                   <li>Apply Artificial Neural Networks in practice</li>
                   <li>Understand the intuition behind Convolutional Neural Networks</li>
                   <li>Apply Convolutional Neural Networks in practice</li>
                 </ul>
               </div>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </Layout>
  );
}
