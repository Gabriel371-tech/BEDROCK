
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Sample message data
const messages = [
  {
    id: 1,
    sender: "Prof. Johnson",
    avatar: "PJ",
    preview: "I've reviewed your assignment draft and have some feedback...",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    sender: "Study Group",
    avatar: "SG",
    preview: "Alex: Is everyone ready for the meeting at 7pm tonight?",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    sender: "Academic Advisor",
    avatar: "AA",
    preview: "Just a reminder about your upcoming registration appointment...",
    time: "Sep 20",
    unread: false,
  },
];

export function RecentMessages() {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Recent Messages</CardTitle>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate("/chat")}
        >
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {messages.map(message => (
            <div 
              key={message.id} 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              onClick={() => navigate(`/chat/${message.id}`)}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bedrock-secondary flex items-center justify-center text-white">
                {message.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium truncate">{message.sender}</h4>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className={`text-sm truncate ${message.unread ? "font-medium" : "text-gray-500"}`}>
                  {message.preview}
                </p>
              </div>
              {message.unread && (
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-bedrock-secondary"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
