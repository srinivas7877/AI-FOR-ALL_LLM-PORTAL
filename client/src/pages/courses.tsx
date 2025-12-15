import { Layout } from "@/components/layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Star, Clock, BookOpen } from "lucide-react";
import { Link } from "wouter";
import aiThumb from "@assets/generated_images/ai_course_thumbnail_with_brain_circuit.png";
import webThumb from "@assets/generated_images/web_development_course_thumbnail.png";
import dataThumb from "@assets/generated_images/data_science_course_thumbnail.png";

const courses = [
  {
    id: 1,
    title: "Intro to Neural Networks",
    category: "Artificial Intelligence",
    level: "Intermediate",
    rating: 4.8,
    students: 1240,
    duration: "8h 30m",
    image: aiThumb,
    description: "Deep dive into the architecture of neural networks and backpropagation."
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    category: "Web Development",
    level: "Advanced",
    rating: 4.9,
    students: 850,
    duration: "6h 15m",
    image: webThumb,
    description: "Master composition, hooks, and performance in large scale React apps."
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    category: "Data Science",
    level: "Beginner",
    rating: 4.7,
    students: 2300,
    duration: "12h 00m",
    image: dataThumb,
    description: "Your first steps into the world of data analytics using Python."
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    category: "Design",
    level: "Beginner",
    rating: 4.6,
    students: 1500,
    duration: "5h 45m",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
    description: "Create beautiful and functional interfaces that users love."
  },
   {
    id: 5,
    title: "Machine Learning Ops (MLOps)",
    category: "Artificial Intelligence",
    level: "Advanced",
    rating: 4.8,
    students: 600,
    duration: "10h 20m",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
    description: "Deploy and maintain machine learning models in production environments."
  }
];

export default function Courses() {
  return (
    <Layout userType="learner">
      <div className="p-8 space-y-8 bg-background min-h-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
             <h1 className="text-3xl font-heading font-bold">Course Catalog</h1>
             <p className="text-muted-foreground mt-1">Explore widely, learn deeply.</p>
          </div>
         
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search courses..." className="pl-9" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {["All", "Artificial Intelligence", "Web Development", "Data Science", "Design", "Business"].map((cat) => (
            <Badge 
              key={cat} 
              variant={cat === "All" ? "default" : "secondary"} 
              className="px-4 py-1.5 text-sm cursor-pointer whitespace-nowrap"
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg flex flex-col h-full">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <Badge className="absolute top-3 right-3 bg-black/60 hover:bg-black/70 backdrop-blur-sm border-none text-white">
                  {course.level}
                </Badge>
              </div>
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">{course.category}</div>
                <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-foreground">{course.rating}</span>
                    <span className="text-xs">({course.students})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/course/${course.id}`}>View Course</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
