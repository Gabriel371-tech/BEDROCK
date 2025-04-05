import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calendar, MessageSquare, BookOpen, LayoutGrid } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate("/signup");
  };
  
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header/Navigation */}
      <header className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">BEDROCK</h1>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/features" className="text-gray-600 hover:text-bedrock-secondary transition-colors duration-300">Features</Link>
            <Link to="/benefits" className="text-gray-600 hover:text-bedrock-secondary transition-colors duration-300">Benefits</Link>
            <Link to="/testimonials" className="text-gray-600 hover:text-bedrock-secondary transition-colors duration-300">Testimonials</Link>
            <Button 
              variant="outline" 
              className="font-medium border-bedrock-secondary text-bedrock-secondary hover:bg-bedrock-secondary hover:text-white transition-all duration-300"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button 
              className="font-medium bg-gradient-to-r from-bedrock-primary to-bedrock-secondary hover:from-bedrock-primary/90 hover:to-bedrock-secondary/90 text-white transition-all duration-300"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={handleLogin}>
              <span className="sr-only">Open menu</span>
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-bedrock-secondary font-medium text-sm mb-4">
              Better Than Teams
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">
              Academic Success <br />Starts Here
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              BEDROCK gives students and educators the tools they need to organize, collaborate, and excel in their academic journey. Replace complicated systems with an intuitive platform built for modern education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-bedrock-primary to-bedrock-secondary hover:from-bedrock-primary/90 hover:to-bedrock-secondary/90 text-white font-medium px-8 transform transition-transform duration-300 hover:scale-105"
                onClick={handleGetStarted}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-bedrock-secondary text-bedrock-secondary hover:bg-bedrock-secondary hover:text-white transform transition-transform duration-300 hover:scale-105"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="public/uploads/6a456ec5-e96e-41e9-b3f0-b50dceca6d17.png" 
              alt="BEDROCK Dashboard Preview" 
              className="rounded-xl shadow-2xl transform -rotate-3 transition-transform group-hover:rotate-0 duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">Designed for Modern Education</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">A complete system that simplifies academic organization and communication.</p>
            <div className="mt-6">
              <Link to="/features">
                <Button variant="outline" className="border-bedrock-secondary text-bedrock-secondary hover:bg-bedrock-secondary hover:text-white">
                  Explore All Features
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <LayoutGrid className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bedrock-primary mb-2 group-hover:text-bedrock-secondary transition-colors duration-300">Intuitive Dashboard</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Access everything you need at a glance with our clean, customizable dashboard.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bedrock-primary mb-2 group-hover:text-bedrock-secondary transition-colors duration-300">Task Management</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Organize assignments and deadlines with powerful task tracking tools.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bedrock-primary mb-2 group-hover:text-bedrock-secondary transition-colors duration-300">Interactive Calendar</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Never miss an important date with our integrated academic calendar.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bedrock-primary mb-2 group-hover:text-bedrock-secondary transition-colors duration-300">Seamless Communication</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Connect with instructors and peers through reliable messaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-bedrock-primary to-bedrock-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose BEDROCK?</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">Designed with students and educators in mind.</p>
            <div className="mt-6">
              <Link to="/benefits">
                <Button className="bg-white text-bedrock-primary hover:bg-white/90">
                  See All Benefits
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4">Better Than Teams</h3>
              <p className="text-blue-100">Say goodbye to bugs, crashes, and frustrating interfaces. BEDROCK is built for reliability and ease of use.</p>
              <div className="mt-6 h-1 w-12 bg-white rounded-full"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4">Reduce Student Stress</h3>
              <p className="text-blue-100">Well-organized academic tools help students manage their workload more effectively.</p>
              <div className="mt-6 h-1 w-12 bg-white rounded-full"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4">Improve Collaboration</h3>
              <p className="text-blue-100">Foster better communication between students and educators with reliable tools.</p>
              <div className="mt-6 h-1 w-12 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">User Satisfaction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Active Students</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-blue-100">Universities</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">What Users Are Saying</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">BEDROCK is changing how schools and universities organize academic life.</p>
            <div className="mt-6">
              <Link to="/testimonials">
                <Button variant="outline" className="border-bedrock-secondary text-bedrock-secondary hover:bg-bedrock-secondary hover:text-white">
                  Read More Testimonials
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative mb-8">
                <div className="absolute -top-6 -left-2 text-5xl text-bedrock-primary opacity-20">"</div>
                <p className="italic text-gray-700 relative z-10">BEDROCK has transformed how I organize my coursework. Everything is in one place and so easy to use!</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full mr-3 flex items-center justify-center text-white font-bold">S</div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative mb-8">
                <div className="absolute -top-6 -left-2 text-5xl text-bedrock-primary opacity-20">"</div>
                <p className="italic text-gray-700 relative z-10">As a professor, I've seen a marked improvement in student engagement since adopting BEDROCK for our department.</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full mr-3 flex items-center justify-center text-white font-bold">M</div>
                <div>
                  <h4 className="font-semibold">Dr. Michael Chen</h4>
                  <p className="text-sm text-gray-500">Biology Professor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative mb-8">
                <div className="absolute -top-6 -left-2 text-5xl text-bedrock-primary opacity-20">"</div>
                <p className="italic text-gray-700 relative z-10">Our university switched from Teams to BEDROCK last semester, and both students and faculty are much happier with the experience.</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full mr-3 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h4 className="font-semibold">Amanda Torres</h4>
                  <p className="text-sm text-gray-500">IT Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">How BEDROCK Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to transform your academic experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-bedrock-primary">
                <span className="text-2xl font-bold text-bedrock-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-bedrock-primary mb-2 text-center">Sign Up</h3>
              <p className="text-gray-600 text-center">Create your free account in less than a minute.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-bedrock-primary">
                <span className="text-2xl font-bold text-bedrock-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-bedrock-primary mb-2 text-center">Set Up Your Profile</h3>
              <p className="text-gray-600 text-center">Add your courses, deadlines, and preferences.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-bedrock-primary">
                <span className="text-2xl font-bold text-bedrock-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-bedrock-primary mb-2 text-center">Start Collaborating</h3>
              <p className="text-gray-600 text-center">Connect with classmates and teachers instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your academic experience?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of students and educators who are already using BEDROCK to simplify academic organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-bedrock-primary hover:bg-blue-50 font-medium px-8 transform transition-transform duration-300 hover:scale-105"
              onClick={handleGetStarted}
            >
              Get Started For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-105"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          <div className="mt-10 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-blue-100">
            No credit card required • Free for students • Cancel anytime
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bedrock-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">BEDROCK</h3>
              <p className="text-blue-100">Academic Organization System</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058 1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Dashboard</Link></li>
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Task Management</Link></li>
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Calendar</Link></li>
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Communication</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Documentation</Link></li>
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Tutorials</Link></li>
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">FAQs</Link></li>
                <li><Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-blue-100 hover:text-white transition-colors duration-300">About Us</Link></li>
                <li><Link to="/benefits" className="text-blue-100 hover:text-white transition-colors duration-300">Benefits</Link></li>
                <li><Link to="/testimonials" className="text-blue-100 hover:text-white transition-colors duration-300">Testimonials</Link></li>
                <li><Link to="/login" className="text-blue-100 hover:text-white transition-colors duration-300">Login</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center text-blue-200">&copy; {new Date().getFullYear()} BEDROCK. All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
