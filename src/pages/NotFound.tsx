
/**
 * NotFound.tsx
 * 
 * 404 error page that displays when users attempt to access non-existent routes.
 * Provides error information and a way to return to the application.
 */

import { useLocation } from "react-router-dom"; // Import to access current route information
import { useEffect } from "react"; // Import for side effects after render

/**
 * NotFound component - 404 error page
 * 
 * Features:
 * - Displays 404 error message
 * - Logs attempted access to non-existent routes for debugging
 * - Provides a link back to the home page
 * 
 * @returns {JSX.Element} The rendered NotFound component
 */
const NotFound = () => {
  const location = useLocation(); // Get current location to log the attempted path

  /**
   * Side effect to log error information when the component mounts
   * This helps with debugging navigation issues
   */
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
