
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample task data
const initialTasks = [
  {
    id: 1,
    title: "Calculus Assignment",
    subject: "Mathematics",
    dueDate: "Today, 11:59 PM",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Read Chapter 5",
    subject: "History",
    dueDate: "Tomorrow, 8:00 AM",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Physics Lab Report",
    subject: "Physics",
    dueDate: "Sep 25, 11:59 PM",
    priority: "high",
    completed: false,
  },
  {
    id: 4,
    title: "Literature Essay Draft",
    subject: "English",
    dueDate: "Sep 27, 5:00 PM",
    priority: "medium",
    completed: false,
  },
];

export function UpcomingTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const navigate = useNavigate();
  
  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 hover:bg-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "low": return "bg-green-100 text-green-800 hover:bg-green-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Upcoming Tasks</CardTitle>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate("/tasks")}
        >
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map(task => (
            <div 
              key={task.id} 
              className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                task.completed ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              <Checkbox 
                id={`task-${task.id}`} 
                checked={task.completed}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
                className="mt-1"
              />
              <div className="flex-1">
                <label 
                  htmlFor={`task-${task.id}`}
                  className={`flex flex-col cursor-pointer ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  <span className="font-medium">{task.title}</span>
                  <span className="text-sm text-gray-500">{task.subject} • {task.dueDate}</span>
                </label>
              </div>
              <Badge className={getPriorityColor(task.priority)}>
                {task.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
