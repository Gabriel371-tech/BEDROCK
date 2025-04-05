
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Sample contacts and chat history
const contacts = [
  {
    id: 1,
    name: "Prof. Johnson",
    avatar: "PJ",
    lastMessage: "I've reviewed your assignment draft and have some feedback...",
    lastMessageTime: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Study Group",
    avatar: "SG",
    lastMessage: "Alex: Is everyone ready for the meeting at 7pm tonight?",
    lastMessageTime: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    name: "Academic Advisor",
    avatar: "AA",
    lastMessage: "Just a reminder about your upcoming registration appointment...",
    lastMessageTime: "Sep 20",
    unread: false,
  },
];

const sampleMessages = {
  1: [
    { id: 1, sender: "Prof. Johnson", content: "Hello John, I've reviewed your assignment draft.", time: "10:25 AM", isMe: false },
    { id: 2, sender: "Prof. Johnson", content: "Overall it's good, but I have some feedback regarding the methodology section.", time: "10:26 AM", isMe: false },
    { id: 3, sender: "Me", content: "Thank you, Professor! I'd appreciate your feedback.", time: "10:28 AM", isMe: true },
    { id: 4, sender: "Prof. Johnson", content: "I've reviewed your assignment draft and have some feedback...", time: "10:30 AM", isMe: false },
  ],
  2: [
    { id: 1, sender: "Alex", content: "Hey everyone, should we meet at the library?", time: "Yesterday, 6:30 PM", isMe: false },
    { id: 2, sender: "Sarah", content: "That works for me. What time?", time: "Yesterday, 6:35 PM", isMe: false },
    { id: 3, sender: "Me", content: "I can join after 7pm.", time: "Yesterday, 6:40 PM", isMe: true },
    { id: 4, sender: "Alex", content: "Is everyone ready for the meeting at 7pm tonight?", time: "Yesterday, 6:45 PM", isMe: false },
  ],
  3: [
    { id: 1, sender: "Academic Advisor", content: "Hello John, I wanted to remind you about your upcoming registration appointment.", time: "Sep 20, 2:00 PM", isMe: false },
    { id: 2, sender: "Me", content: "Thanks for the reminder! Is there anything I should prepare beforehand?", time: "Sep 20, 2:30 PM", isMe: true },
    { id: 3, sender: "Academic Advisor", content: "Just a reminder about your upcoming registration appointment...", time: "Sep 20, 3:00 PM", isMe: false },
  ],
};

export default function Chat() {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(sampleMessages);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      sender: "Me",
      content: message,
      time: "Just now",
      isMe: true,
    };
    
    setMessages({
      ...messages,
      [activeContact.id]: [...messages[activeContact.id as keyof typeof messages], newMessage],
    });
    
    setMessage("");
  };
  
  return (
    <AppLayout>
      <div className="h-[calc(100vh-150px)] bg-white rounded-lg shadow overflow-hidden animate-fade-in">
        <div className="flex h-full">
          {/* Contacts sidebar */}
          <div className="w-80 border-r border-gray-200 h-full flex flex-col bg-gray-50">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Messages</h2>
              <div className="relative mt-2">
                <Input
                  placeholder="Search contacts..."
                  className="pl-8 bg-white"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 absolute left-2.5 top-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center p-4 cursor-pointer border-b border-gray-200 hover:bg-gray-100 ${
                    activeContact.id === contact.id ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setActiveContact(contact)}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bedrock-secondary flex items-center justify-center text-white">
                    {contact.avatar}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-medium truncate">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread && (
                    <div className="ml-2 flex-shrink-0 w-2 h-2 rounded-full bg-bedrock-secondary"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat area */}
          <div className="flex-1 flex flex-col h-full">
            {/* Chat header */}
            <div className="flex items-center p-4 border-b border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bedrock-secondary flex items-center justify-center text-white">
                {activeContact.avatar}
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium">{activeContact.name}</h3>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages[activeContact.id as keyof typeof messages].map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${
                      msg.isMe
                        ? "bg-bedrock-primary text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {!msg.isMe && (
                      <div className="text-xs font-medium mb-1">{msg.sender}</div>
                    )}
                    <p>{msg.content}</p>
                    <div
                      className={`text-xs mt-1 ${
                        msg.isMe ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-bedrock-primary hover:bg-bedrock-primary/90"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
