
/**
 * Sidebar.tsx
 * 
 * Main navigation sidebar component for the application.
 * Provides access to all major features and displays user information.
 */

import { useState } from "react"; // Import React useState hook for collapsible state
import { Link, useLocation } from "react-router-dom"; // Import navigation components from React Router
import { Button } from "@/components/ui/button"; // Import button component
import { Separator } from "@/components/ui/separator"; // Import visual separator component
import { cn } from "@/lib/utils"; // Import utility for conditional class names
import { 
  Home, 
  Book, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Users, 
  Settings, 
  Menu,
  X,
  FileText
} from "lucide-react"; // Import icons for navigation items

/**
 * Navigation item configuration
 * Each item contains:
 * - name: Display text
 * - href: URL path
 * - icon: Visual icon component
 */
const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Subjects", href: "/subjects", icon: Book },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Tasks", href: "/tasks", icon: Clock },
  { name: "Assignments", href: "/assignments", icon: FileText },
  { name: "Chat", href: "/chat", icon: MessageSquare },
  { name: "Groups", href: "/groups", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

/**
 * Sidebar component - Main navigation sidebar
 * 
 * Features:
 * - Collapsible design to maximize screen space
 * - Visual indicators for current route
 * - User profile section with avatar and details
 * - Links to all major application features
 * 
 * @returns {JSX.Element} The rendered Sidebar component
 */
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false); // State for collapsed/expanded sidebar
  const location = useLocation(); // Get current route location for highlighting active item
  
  return (
    <div 
      className={cn(
        "bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64" // Adjust width based on collapsed state
      )}
    >
      {/* Header with logo and collapse toggle */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center">
            <span className="text-xl font-bold text-bedrock-primary">BEDROCK</span>
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      
      <Separator />
      
      {/* Navigation links section */}
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.href
                  ? "bg-bedrock-secondary/10 text-bedrock-primary" // Active route styling
                  : "text-gray-600 hover:bg-gray-100", // Inactive route styling
                collapsed ? "justify-center" : "justify-start" // Adjust layout based on collapsed state
              )}
            >
              <item.icon className={cn("flex-shrink-0", collapsed ? "h-6 w-6" : "h-5 w-5 mr-3")} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* User profile section */}
      <div className="p-4">
        <div 
          className={cn(
            "flex items-center", 
            collapsed ? "justify-center" : "space-x-2"
          )}
        >
          {/* User avatar */}
          <div className="w-8 h-8 rounded-full bg-bedrock-primary text-white flex items-center justify-center">
            <span className="text-sm font-semibold">JS</span>
          </div>
          
          {/* User details (only shown when expanded) */}
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Student</p>
              <p className="text-xs text-gray-500 truncate">john@university.edu</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
