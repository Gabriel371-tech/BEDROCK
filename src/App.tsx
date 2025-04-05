
/**
 * App.tsx
 * 
 * Main application component that sets up routing and global providers.
 * This component is the entry point for the React application and handles navigation.
 */

import { Toaster } from "@/components/ui/toaster"; // Import toast notification component from shadcn UI
import { Toaster as Sonner } from "@/components/ui/sonner"; // Import secondary toast component
import { TooltipProvider } from "@/components/ui/tooltip"; // Import tooltip provider for hover tooltips
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import React Query for data fetching
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import React Router for navigation
import { useState } from "react"; // Import React useState hook
import Index from "./pages/Index"; // Import landing page component
import Login from "./pages/Login"; // Import login page component
import Signup from "./pages/Signup"; // Import signup page component
import Dashboard from "./pages/Dashboard"; // Import dashboard page component
import Calendar from "./pages/Calendar"; // Import calendar page component
import Tasks from "./pages/Tasks"; // Import tasks page component
import Chat from "./pages/Chat"; // Import chat page component
import Subjects from "./pages/Subjects"; // Import subjects page component
import Groups from "./pages/Groups"; // Import groups collaboration page component
import Settings from "./pages/Settings"; // Import settings page component
import NotFound from "./pages/NotFound"; // Import 404 error page component
import Features from "./pages/Features"; // Import feature showcase page component
import Benefits from "./pages/Benefits"; // Import benefits page component
import Testimonials from "./pages/Testimonials"; // Import testimonials page component
import Assignments from "./pages/Assignments"; // Import assignments page component

/**
 * App component - Main application wrapper
 * 
 * Sets up:
 * 1. React Query client for data fetching
 * 2. Tooltip provider for UI tooltips
 * 3. Toast notification systems
 * 4. Browser router and route definitions
 * 
 * @returns {JSX.Element} The rendered App component with all providers and routes
 */
const App = () => {
  // Create a React Query client instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast notification systems */}
        <Toaster />
        <Sonner />
        
        {/* Browser router for handling navigation */}
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Main application routes (would typically be protected in a real app) */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/settings" element={<Settings />} />
            
            {/* Marketing pages */}
            <Route path="/features" element={<Features />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/testimonials" element={<Testimonials />} />
            
            {/* Assignments feature */}
            <Route path="/assignments" element={<Assignments />} />
            
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
