import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  User,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AIAssistant } from "./ai-assistant";

interface LayoutProps {
  children: React.ReactNode;
  userType?: "admin" | "learner" | "guest";
}

export function Layout({ children, userType = "guest" }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, show: userType !== "guest" },
    { name: "Courses", href: "/courses", icon: BookOpen, show: true },
    { name: "My Learning", href: "/dashboard", icon: GraduationCap, show: userType === "learner" },
    { name: "Admin Panel", href: "/admin", icon: ShieldCheck, show: userType === "admin" },
    { name: "Settings", href: "/settings", icon: Settings, show: userType !== "guest" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-border">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
          AI
        </div>
        <span className="font-heading font-bold text-xl tracking-tight">AI for All</span>
      </div>
      
      <div className="flex-1 px-4 py-4 space-y-2">
        {navigation.filter(item => item.show).map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {userType !== "guest" ? (
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Jane Doe</p>
              <p className="text-xs text-muted-foreground truncate">{userType === 'admin' ? 'Administrator' : 'Learner'}</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-4 border-t border-border space-y-2">
           <Button className="w-full" asChild>
             <Link href="/login">Log In</Link>
           </Button>
           <Button variant="outline" className="w-full" asChild>
             <Link href="/signup">Sign Up</Link>
           </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 shrink-0 fixed inset-y-0 z-50">
        <SidebarContent />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-16 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
            AI
          </div>
          <span className="font-heading font-bold text-xl">AI for All</span>
        </div>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col min-h-screen ${userType !== 'guest' ? 'md:ml-64' : 'md:ml-64'} pt-16 md:pt-0`}>
        {children}
      </main>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
