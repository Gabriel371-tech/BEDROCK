
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Clock, FileText, MoreHorizontal, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample subject data
const subjects = [
  {
    id: 1,
    code: "MATH301",
    name: "Advanced Calculus",
    instructor: "Dr. Smith",
    schedule: "Mon, Wed, Fri 10:00 - 11:30 AM",
    location: "Room 302",
    textbook: "Calculus: Early Transcendentals",
    grade: "A-",
    documents: 12,
    assignments: 5,
    announcements: 3,
    color: "blue",
  },
  {
    id: 2,
    code: "HIST210",
    name: "World History",
    instructor: "Prof. Johnson",
    schedule: "Tue, Thu 1:00 - 2:30 PM",
    location: "Room 145",
    textbook: "World Civilizations: The Global Experience",
    grade: "B+",
    documents: 8,
    assignments: 3,
    announcements: 2,
    color: "amber",
  },
  {
    id: 3,
    code: "PHYS240",
    name: "Physics II",
    instructor: "Dr. Feynman",
    schedule: "Mon, Fri 3:00 - 5:00 PM",
    location: "Science Building",
    textbook: "University Physics with Modern Physics",
    grade: "A",
    documents: 15,
    assignments: 6,
    announcements: 5,
    color: "red",
  },
  {
    id: 4,
    code: "COMP330",
    name: "Database Systems",
    instructor: "Prof. Chen",
    schedule: "Wed 2:00 - 5:00 PM",
    location: "Computer Lab 4",
    textbook: "Database Systems: The Complete Book",
    grade: "B",
    documents: 10,
    assignments: 4,
    announcements: 1,
    color: "green",
  },
  {
    id: 5,
    code: "ENGL220",
    name: "Literary Analysis",
    instructor: "Dr. Williams",
    schedule: "Tue, Thu 10:00 - 11:30 AM",
    location: "Room 112",
    textbook: "The Norton Introduction to Literature",
    grade: "A",
    documents: 6,
    assignments: 3,
    announcements: 2,
    color: "purple",
  },
];

// Function to get color classes based on subject color
const getColorClasses = (color: string) => {
  switch (color) {
    case "blue": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "amber": return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    case "red": return "bg-red-100 text-red-800 hover:bg-red-200";
    case "green": return "bg-green-100 text-green-800 hover:bg-green-200";
    case "purple": return "bg-purple-100 text-purple-800 hover:bg-purple-200";
    default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

export default function Subjects() {
  const [activeView, setActiveView] = useState("grid");
  const navigate = useNavigate();
  
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">My Subjects</h1>
          <div className="flex items-center space-x-2">
            <Tabs defaultValue="grid" onValueChange={setActiveView}>
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <Tabs value={activeView} defaultValue="grid">
          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Card key={subject.id} className="card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className={getColorClasses(subject.color)}>
                          {subject.code}
                        </Badge>
                        <CardTitle className="mt-2">{subject.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <User className="h-4 w-4 mr-1" />
                          {subject.instructor}
                        </CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Syllabus</DropdownMenuItem>
                          <DropdownMenuItem>Course Materials</DropdownMenuItem>
                          <DropdownMenuItem>Email Instructor</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <span>{subject.schedule}</span>
                      </div>
                      <div className="flex items-start">
                        <Book className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <span>{subject.textbook}</span>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="bg-gray-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Documents</p>
                        <p className="font-medium">{subject.documents}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Assignments</p>
                        <p className="font-medium">{subject.assignments}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Grade</p>
                        <p className="font-medium">{subject.grade}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate(`/subjects/${subject.id}`)}
                    >
                      View Subject
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="list">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  {subjects.map((subject) => (
                    <div 
                      key={subject.id} 
                      className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/subjects/${subject.id}`)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <Badge className={getColorClasses(subject.color)}>
                              {subject.code}
                            </Badge>
                            <h3 className="ml-2 text-lg font-medium">{subject.name}</h3>
                          </div>
                          <div className="mt-1 flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-x-4">
                            <span className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {subject.instructor}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {subject.schedule}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 md:mt-0 flex items-center gap-4">
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{subject.documents}</span>
                          </div>
                          <div>
                            <Badge variant="outline">{subject.grade}</Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
