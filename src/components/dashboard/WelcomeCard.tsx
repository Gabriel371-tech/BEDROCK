
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WelcomeCard() {
  // Get the current time to show appropriate greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };
  
  // Get current date in a readable format
  const formattedDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <Card className="bg-gradient-to-r from-bedrock-primary to-bedrock-secondary text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{getGreeting()}, John!</CardTitle>
        <CardDescription className="text-blue-100">{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Welcome to BEDROCK, your academic organization system. Here's your day at a glance:</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm font-medium">Classes Today</p>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm font-medium">Assignments Due</p>
            <p className="text-2xl font-bold">2</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm font-medium">Unread Messages</p>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
