import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Activity, AlertCircle, Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const activityData = [
  { name: 'Mon', active: 400, completions: 240 },
  { name: 'Tue', active: 300, completions: 139 },
  { name: 'Wed', active: 200, completions: 980 },
  { name: 'Thu', active: 278, completions: 390 },
  { name: 'Fri', active: 189, completions: 480 },
  { name: 'Sat', active: 239, completions: 380 },
  { name: 'Sun', active: 349, completions: 430 },
];

export default function AdminDashboard() {
  return (
    <Layout userType="admin">
      <div className="p-8 space-y-8 bg-muted/30 min-h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> Create New Course
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,345</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">+4 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Usage (Tokens)</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2M</div>
              <p className="text-xs text-muted-foreground">+45% spike today</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
           <Card>
             <CardHeader>
               <CardTitle>User Activity</CardTitle>
             </CardHeader>
             <CardContent className="h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={activityData}>
                   <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                   <XAxis dataKey="name" />
                   <YAxis />
                   <Tooltip />
                   <Line type="monotone" dataKey="active" stroke="hsl(var(--primary))" strokeWidth={2} />
                   <Line type="monotone" dataKey="completions" stroke="hsl(var(--secondary))" strokeWidth={2} />
                 </LineChart>
               </ResponsiveContainer>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle>Course Enrollment Dist.</CardTitle>
             </CardHeader>
             <CardContent className="h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={activityData}>
                   <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                   <XAxis dataKey="name" />
                   <YAxis />
                   <Tooltip />
                   <Bar dataKey="active" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ResponsiveContainer>
             </CardContent>
           </Card>
        </div>

        {/* User Management Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Alice Johnson", email: "alice@example.com", status: "Active", role: "Learner", last: "2 mins ago" },
                  { name: "Bob Smith", email: "bob@example.com", status: "Inactive", role: "Learner", last: "5 days ago" },
                  { name: "Charlie Brown", email: "charlie@example.com", status: "Active", role: "Admin", last: "1 hour ago" },
                  { name: "Diana Prince", email: "diana@example.com", status: "Flagged", role: "Learner", last: "1 day ago" },
                ].map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'Active' ? 'default' : user.status === 'Flagged' ? 'destructive' : 'secondary'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.last}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Manage</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
