
/**
 * Dashboard.tsx
 * 
 * Main dashboard page that displays when users log into the application.
 * This serves as the central hub for users to access all their academic information.
 */

import { AppLayout } from "@/components/layout/AppLayout"; // Import the app layout wrapper component
import { WelcomeCard } from "@/components/dashboard/WelcomeCard"; // Import the welcome card component that displays personalized greeting
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks"; // Import component for displaying upcoming tasks and assignments
import { UpcomingClasses } from "@/components/dashboard/UpcomingClasses"; // Import component for displaying today's classes
import { Announcements } from "@/components/dashboard/Announcements"; // Import component for displaying system announcements
import { RecentMessages } from "@/components/dashboard/RecentMessages"; // Import component for displaying recent messages

/**
 * Dashboard component - Main dashboard view for the application
 * 
 * Layout structure:
 * - Uses AppLayout for consistent navigation experience
 * - WelcomeCard spans the full width
 * - Main content area is a two-column grid on large screens:
 *   - Left column (2/3 width): UpcomingTasks and RecentMessages
 *   - Right column (1/3 width): UpcomingClasses and Announcements
 * - On mobile, all components stack vertically
 * 
 * @returns {JSX.Element} The rendered Dashboard component
 */
export default function Dashboard() {
  return (
    <AppLayout>
      {/* Main container with animation effect */}
      <div className="space-y-6 animate-fade-in">
        {/* Personalized welcome card with summary stats */}
        <WelcomeCard />
        
        {/* Main dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - spans 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Task management component showing upcoming deadlines */}
            <UpcomingTasks />
            {/* Communication component showing recent messages */}
            <RecentMessages />
          </div>
          {/* Right column - takes 1 column on large screens */}
          <div className="space-y-6">
            {/* Class schedule component showing today's classes */}
            <UpcomingClasses />
            {/* Important notifications component */}
            <Announcements />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
