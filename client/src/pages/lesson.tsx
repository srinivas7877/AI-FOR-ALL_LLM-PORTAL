import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { PlayCircle, FileText, ChevronLeft, ChevronRight, CheckCircle, Lock } from "lucide-react";
import { Link } from "wouter";

export default function LessonView() {
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <header className="h-16 border-b border-border flex items-center justify-between px-4 shrink-0 z-10 bg-background">
        <div className="flex items-center gap-4">
           <Link href="/course/1" className="text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-6 h-6" />
           </Link>
           <div className="h-8 w-px bg-border mx-2" />
           <div>
             <h1 className="text-sm font-bold truncate max-w-[200px] md:max-w-md">Intro to Neural Networks</h1>
             <p className="text-xs text-muted-foreground">Module 1: Lesson 1</p>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <Button variant="outline" size="sm" className="hidden md:flex">Previous</Button>
           <Button size="sm">Next Lesson <ChevronRight className="w-4 h-4 ml-1" /></Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-muted/10">
           <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-8">
              {/* Video Player Placeholder */}
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-colors cursor-pointer" />
                 </div>
                 {/* Fake Controls */}
                 <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-3 gap-4">
                    <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                       <div className="h-full w-1/3 bg-primary" />
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                 <h2 className="text-2xl font-heading font-bold">What is Artificial Intelligence?</h2>
                 <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p>Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by humans or animals. Leading AI textbooks define the field as the study of "intelligent agents": any system that perceives its environment and takes actions that maximize its chance of achieving its goals.</p>
                    
                    <h3>Key Concepts Covered:</h3>
                    <ul>
                       <li>Definition of AI vs Machine Learning</li>
                       <li>History of AI development</li>
                       <li>Types of AI: Narrow vs General</li>
                    </ul>
                    
                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg my-6">
                       <h4 className="text-primary font-bold flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4" /> 
                          Resources
                       </h4>
                       <div className="flex flex-col gap-2">
                          <a href="#" className="text-sm text-blue-600 hover:underline">Download Lecture Slides (PDF)</a>
                          <a href="#" className="text-sm text-blue-600 hover:underline">Source Code Example (GitHub)</a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </main>

        {/* Sidebar Playlist */}
        <aside className="w-80 border-l border-border bg-background flex flex-col hidden lg:flex">
           <div className="p-4 border-b border-border">
              <h3 className="font-bold">Course Content</h3>
           </div>
           <ScrollArea className="flex-1">
              <div className="p-4 space-y-6">
                 <div>
                    <h4 className="text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Module 1</h4>
                    <div className="space-y-1">
                       {[
                         { title: "What is AI?", time: "10:00", active: true },
                         { title: "History of Neural Networks", time: "15:30", active: false },
                         { title: "Setting up Environment", time: "08:45", active: false },
                       ].map((l, i) => (
                          <div key={i} className={`flex items-start gap-3 p-2 rounded-md text-sm transition-colors ${l.active ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-muted-foreground"}`}>
                             <div className="mt-0.5">
                                <Checkbox id={`l-${i}`} checked={i === 0} />
                             </div>
                             <div className="flex-1">
                                <label htmlFor={`l-${i}`} className="cursor-pointer leading-tight block mb-1">{l.title}</label>
                                <span className="text-xs opacity-70 flex items-center gap-1">
                                   <PlayCircle className="w-3 h-3" /> {l.time}
                                </span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
                 
                 <div>
                    <h4 className="text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Module 2</h4>
                    <div className="space-y-1 opacity-60">
                       {[
                         { title: "Perceptrons", time: "12:00" },
                         { title: "Activation Functions", time: "14:20" },
                       ].map((l, i) => (
                          <div key={i} className="flex items-start gap-3 p-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                             <div className="mt-0.5">
                               <div className="w-4 h-4 rounded border border-input" />
                             </div>
                             <div className="flex-1">
                                <div className="leading-tight block mb-1">{l.title}</div>
                                <span className="text-xs opacity-70 flex items-center gap-1">
                                   <PlayCircle className="w-3 h-3" /> {l.time}
                                </span>
                             </div>
                             <Lock className="w-3 h-3 mt-1" />
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </ScrollArea>
        </aside>
      </div>
    </div>
  );
}
