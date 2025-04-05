
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Plus } from "lucide-react";

// Sample task data
const initialTasks = [
  {
    id: 1,
    title: "Calculus Assignment",
    subject: "Mathematics",
    dueDate: "Sep 25, 2023",
    priority: "high",
    completed: false,
    description: "Complete problems 1-20 from chapter 3",
  },
  {
    id: 2,
    title: "Read Chapter 5",
    subject: "History",
    dueDate: "Sep 26, 2023",
    priority: "medium",
    completed: false,
    description: "Read and take notes on chapter 5: The Industrial Revolution",
  },
  {
    id: 3,
    title: "Physics Lab Report",
    subject: "Physics",
    dueDate: "Sep 28, 2023",
    priority: "high",
    completed: false,
    description: "Write up the results from the motion experiment",
  },
  {
    id: 4,
    title: "Literature Essay Draft",
    subject: "English",
    dueDate: "Sep 30, 2023",
    priority: "medium",
    completed: false,
    description: "Write a 3-page draft on the symbolism in the assigned novel",
  },
  {
    id: 5,
    title: "Research Presentation Slides",
    subject: "Biology",
    dueDate: "Oct 5, 2023",
    priority: "low",
    completed: true,
    description: "Create presentation slides on the chosen research topic",
  },
  {
    id: 6,
    title: "Programming Project Phase 1",
    subject: "Computer Science",
    dueDate: "Oct 7, 2023",
    priority: "high",
    completed: true,
    description: "Implement the basic structure of the application",
  },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState("all");
  
  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  // Filter tasks based on active tab
  const filterTasks = () => {
    switch (activeTab) {
      case "pending": return tasks.filter(task => !task.completed);
      case "completed": return tasks.filter(task => task.completed);
      default: return tasks;
    }
  };
  
  const filteredTasks = filterTasks();
  
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Task Management</h1>
          <Button className="bg-bedrock-primary hover:bg-bedrock-primary/90">
            <Plus className="mr-2 h-4 w-4" /> Add Task
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>My Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Tasks</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="space-y-4">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`flex items-start space-x-3 p-4 rounded-lg border ${
                        task.completed ? "bg-gray-50 border-gray-200" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Checkbox 
                        id={`task-${task.id}`} 
                        checked={task.completed}
                        onCheckedChange={() => toggleTaskCompletion(task.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <label 
                              htmlFor={`task-${task.id}`}
                              className={`flex flex-col cursor-pointer ${
                                task.completed ? "line-through text-gray-500" : "font-medium"
                              }`}
                            >
                              <span className="font-medium text-lg">{task.title}</span>
                              <span className="text-sm text-gray-500">
                                {task.subject} • Due: {task.dueDate}
                              </span>
                            </label>
                          </div>
                          <Badge className={`mt-2 md:mt-0 ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{task.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-lg">No tasks found</p>
                    <p className="text-sm">You don't have any {activeTab !== "all" ? activeTab : ""} tasks to display</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
