
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { useState } from "react";

// Sample events data
const events = [
  { 
    id: 1, 
    title: "Calculus Midterm", 
    date: new Date(2023, 8, 25), 
    type: "exam", 
    subject: "Mathematics" 
  },
  { 
    id: 2, 
    title: "History Essay Due", 
    date: new Date(2023, 8, 27), 
    type: "assignment", 
    subject: "History" 
  },
  { 
    id: 3, 
    title: "Physics Lab", 
    date: new Date(2023, 8, 28), 
    type: "class", 
    subject: "Physics" 
  },
  { 
    id: 4, 
    title: "Study Group Meeting", 
    date: new Date(2023, 8, 29), 
    type: "meeting", 
    subject: "Group" 
  },
];

export default function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Get events for the selected date
  const selectedDateEvents = date 
    ? events.filter(
        event => 
          event.date.getDate() === date.getDate() && 
          event.date.getMonth() === date.getMonth() && 
          event.date.getFullYear() === date.getFullYear()
      )
    : [];
  
  // Function to get event type badge color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "exam": return "bg-red-100 text-red-800";
      case "assignment": return "bg-yellow-100 text-yellow-800";
      case "class": return "bg-blue-100 text-blue-800";
      case "meeting": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-2xl font-bold">Academic Calendar</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Events Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <CalendarUI
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {date?.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map(event => (
                    <div key={event.id} className="border rounded-lg p-3 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{event.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{event.subject}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>No events scheduled for this day</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
