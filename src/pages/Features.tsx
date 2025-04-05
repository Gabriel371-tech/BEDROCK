
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Compass, 
  FileText, 
  Globe, 
  Layout, 
  MessageSquare, 
  Shield, 
  Star,
  Users,
  Zap
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Features = () => {
  const mainFeatures = [
    {
      title: "Intuitive Dashboard",
      description: "Access everything you need at a glance with our clean, customizable dashboard.",
      icon: <Layout className="h-12 w-12 text-bedrock-secondary" />,
      details: "Organize all your academic information in one place. The BEDROCK dashboard provides a comprehensive overview of your schedule, tasks, messages, and more."
    },
    {
      title: "Task Management",
      description: "Organize assignments and deadlines with powerful task tracking tools.",
      icon: <CheckCircle className="h-12 w-12 text-bedrock-secondary" />,
      details: "Create, categorize, and prioritize tasks with ease. Set deadlines, reminders, and track your progress as you complete your academic work."
    },
    {
      title: "Interactive Calendar",
      description: "Never miss an important date with our integrated academic calendar.",
      icon: <Calendar className="h-12 w-12 text-bedrock-secondary" />,
      details: "Synchronize class schedules, assignment due dates, and events in one unified calendar. Filter by course, importance, or time period."
    },
    {
      title: "Seamless Communication",
      description: "Connect with instructors and peers through reliable messaging.",
      icon: <MessageSquare className="h-12 w-12 text-bedrock-secondary" />,
      details: "Direct messaging, group chats, and course-specific communications all in one place. Share files, links, and collaborate in real-time."
    },
    {
      title: "Resource Library",
      description: "Store and access course materials, documents, and resources in one central location.",
      icon: <BookOpen className="h-12 w-12 text-bedrock-secondary" />,
      details: "Upload, organize, and share academic materials with ease. Create collections for each course or project and never lose track of important documents."
    },
    {
      title: "Real-time Collaboration",
      description: "Work together on projects, assignments, and study sessions with integrated tools.",
      icon: <Users className="h-12 w-12 text-bedrock-secondary" />,
      details: "Co-edit documents, share screens, and engage in group discussions. BEDROCK makes teamwork efficient and productive."
    }
  ];

  const advancedFeatures = [
    {
      title: "Smart Reminders",
      description: "AI-powered notifications that help you stay on track with your academic commitments.",
      icon: <Clock className="h-8 w-8 text-bedrock-secondary" />
    },
    {
      title: "Academic Analytics",
      description: "Track your academic performance and productivity with insightful analytics.",
      icon: <FileText className="h-8 w-8 text-bedrock-secondary" />
    },
    {
      title: "Global Accessibility",
      description: "Access your academic workspace from anywhere, on any device.",
      icon: <Globe className="h-8 w-8 text-bedrock-secondary" />
    },
    {
      title: "Enhanced Security",
      description: "Your academic data is protected with enterprise-grade security measures.",
      icon: <Shield className="h-8 w-8 text-bedrock-secondary" />
    },
    {
      title: "Academic Navigation",
      description: "Find resources, classes, and campus locations with integrated maps and directories.",
      icon: <Compass className="h-8 w-8 text-bedrock-secondary" />
    },
    {
      title: "Performance Boost",
      description: "Optimized for speed and efficiency, even during peak academic periods.",
      icon: <Zap className="h-8 w-8 text-bedrock-secondary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Header/Navigation */}
      <header className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">BEDROCK</h1>
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/features" className="font-medium text-bedrock-primary hover:text-bedrock-secondary transition-colors duration-300">Features</Link>
            <Link to="/benefits" className="text-gray-600 hover:text-bedrock-secondary transition-colors duration-300">Benefits</Link>
            <Link to="/testimonials" className="text-gray-600 hover:text-bedrock-secondary transition-colors duration-300">Testimonials</Link>
            <Link to="/login">
              <Button 
                variant="outline" 
                className="font-medium border-bedrock-secondary text-bedrock-secondary hover:bg-bedrock-secondary hover:text-white transition-all duration-300"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                className="font-medium bg-gradient-to-r from-bedrock-primary to-bedrock-secondary hover:from-bedrock-primary/90 hover:to-bedrock-secondary/90 text-white transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open menu</span>
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bedrock-primary/5 to-bedrock-secondary/5 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">
              Powerful Features for Academic Success
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              BEDROCK provides a comprehensive set of tools designed specifically for the academic environment, helping students and educators achieve more with less stress.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-bedrock-primary to-bedrock-secondary text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Explore All Features
              </Button>
              <Link to="/signup">
                <Button variant="outline" className="border-bedrock-secondary text-bedrock-secondary font-medium px-6 py-3 rounded-lg hover:bg-bedrock-secondary/10 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform offers a comprehensive suite of tools designed to enhance academic productivity and collaboration.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-bedrock-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {feature.details}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-bedrock-secondary hover:text-bedrock-primary hover:bg-blue-50 p-0 h-auto font-medium">
                    Learn more <span className="ml-1">→</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">See BEDROCK in Action</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore the intuitive interface and powerful capabilities of the BEDROCK platform.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((item) => (
                  <CarouselItem key={item}>
                    <div className="p-1">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                        <div className="aspect-video relative">
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-bedrock-primary/40 to-bedrock-secondary/40">
                            <div className="text-center p-6">
                              <Star className="h-16 w-16 mx-auto mb-4 text-white/80" />
                              <h3 className="text-2xl font-bold mb-2">Feature Screenshot {item}</h3>
                              <p className="text-blue-100">Interactive demonstration of BEDROCK's powerful capabilities</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">Streamlined Workflow</h3>
                          <p className="text-blue-100">
                            Our intuitive interface makes academic organization simple and efficient, allowing you to focus on what matters.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative inset-0 translate-y-0 bg-white/20 hover:bg-white/30 text-white border-none" />
                <CarouselNext className="relative inset-0 translate-y-0 bg-white/20 hover:bg-white/30 text-white border-none" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the basics, BEDROCK offers sophisticated tools to enhance your academic experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bedrock-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to experience BEDROCK?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of students and educators who are already using BEDROCK to simplify academic organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-white text-bedrock-primary hover:bg-blue-50 font-medium px-8 transform transition-transform duration-300 hover:scale-105"
              >
                Get Started For Free
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-105"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bedrock-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">BEDROCK</h3>
              <p className="text-blue-100">Academic Organization System</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-blue-100 hover:text-white transition-colors duration-300">Home</Link>
              <Link to="/features" className="text-white font-medium transition-colors duration-300">Features</Link>
              <Link to="/benefits" className="text-blue-100 hover:text-white transition-colors duration-300">Benefits</Link>
              <Link to="/testimonials" className="text-blue-100 hover:text-white transition-colors duration-300">Testimonials</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center md:text-left">
            <p className="text-blue-200">&copy; {new Date().getFullYear()} BEDROCK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
