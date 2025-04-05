
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart4,
  Brain, 
  Clock, 
  Compass, 
  FileCheck, 
  Heart, 
  ShieldCheck,
  Smile,
  Star,
  Tablet,
  ThumbsUp,
  Users
} from "lucide-react";

const Benefits = () => {
  const mainBenefits = [
    {
      title: "Reduced Stress",
      description: "Well-organized academic tools help students manage their workload more effectively, reducing stress and anxiety.",
      icon: <Heart className="h-12 w-12 text-bedrock-secondary" />,
      color: "from-pink-500 to-red-400"
    },
    {
      title: "Improved Collaboration",
      description: "Foster better communication between students and educators with reliable tools designed for academic cooperation.",
      icon: <Users className="h-12 w-12 text-bedrock-secondary" />,
      color: "from-blue-500 to-indigo-400"
    },
    {
      title: "Enhanced Productivity",
      description: "Our streamlined interface and intelligent features help you accomplish more in less time.",
      icon: <Clock className="h-12 w-12 text-bedrock-secondary" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Better Academic Performance",
      description: "Stay organized and on top of your workload to improve your grades and academic outcomes.",
      icon: <Star className="h-12 w-12 text-bedrock-secondary" />,
      color: "from-yellow-500 to-amber-400"
    },
    {
      title: "Enhanced Learning Experience",
      description: "Tools that adapt to your learning style and help you absorb information more effectively.",
      icon: <Brain className="h-12 w-12 text-bedrock-secondary" />,
      color: "from-purple-500 to-violet-400"
    },
    {
      title: "Peace of Mind",
      description: "Reliable technology that works when you need it, with secure data protection and backup systems.",
      icon: <ShieldCheck className="h-12 w-12 text-bedrock-secondary" />,
      color: "from-cyan-500 to-teal-400"
    }
  ];

  const testimonialMetrics = [
    { label: "User Satisfaction", value: "95%", icon: <Smile className="h-6 w-6" /> },
    { label: "Active Students", value: "50K+", icon: <Users className="h-6 w-6" /> },
    { label: "Universities", value: "200+", icon: <Compass className="h-6 w-6" /> },
    { label: "Assignments Submitted", value: "1M+", icon: <FileCheck className="h-6 w-6" /> }
  ];

  const comparisonPoints = [
    {
      title: "More Reliable Than Teams",
      description: "Say goodbye to bugs, crashes, and frustrating interfaces. BEDROCK is built for reliability and consistent performance."
    },
    {
      title: "More Intuitive Than Canvas",
      description: "A clean, modern interface that's easy to navigate and understand, even for first-time users."
    },
    {
      title: "More Integrated Than Blackboard",
      description: "All your academic tools in one place - no more jumping between different applications."
    },
    {
      title: "More Engaging Than Email",
      description: "Interactive features that make communication and collaboration more effective and enjoyable."
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
            <Link to="/features" className="text-gray-600 hover:text-bedrock-secondary transition-colors duration-300">Features</Link>
            <Link to="/benefits" className="font-medium text-bedrock-primary hover:text-bedrock-secondary transition-colors duration-300">Benefits</Link>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">
              Why Choose BEDROCK?
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              BEDROCK transforms the academic experience, offering benefits that extend far beyond basic organization. Discover how our platform makes a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/testimonials">
                <Button className="bg-gradient-to-r from-bedrock-primary to-bedrock-secondary text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  See Real Results
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-bedrock-secondary text-bedrock-secondary font-medium px-6 py-3 rounded-lg hover:bg-bedrock-secondary/10 transition-all duration-300 transform hover:scale-105">
                  Try For Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">Core Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BEDROCK isn't just about features – it's about the positive impact on your academic life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainBenefits.map((benefit, index) => (
              <div key={index} className="rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                <div className={`bg-gradient-to-br ${benefit.color} p-8 h-full flex flex-col`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/90 flex-grow">{benefit.description}</p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <span className="text-white/80 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      Learn more <ThumbsUp className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">BEDROCK by the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from real users across educational institutions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-white/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <p className="text-blue-100">{metric.label}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              "Since implementing BEDROCK, our student engagement has increased by 40% and assignment completion rates have improved by 25%."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Tablet className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Dr. Emily Chen</h4>
                <p className="text-blue-100">Director of Educational Technology, Stanford University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">
              How BEDROCK Compares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why educational institutions are switching to BEDROCK from other platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparisonPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full p-3">
                    <BarChart4 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bedrock-primary mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-white p-8 rounded-xl shadow-md">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-bedrock-primary mb-4">The BEDROCK Advantage</h3>
              <p className="text-gray-600 mb-4">
                Our platform was designed from the ground up specifically for academic use, unlike general-purpose tools repurposed for education.
              </p>
              <ul className="space-y-2">
                {[
                  "Purpose-built for academic workflows",
                  "Developed with direct educator input",
                  "Optimized for both teaching and learning",
                  "Continuous improvement based on user feedback"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 text-bedrock-secondary">
                      <ThumbsUp className="h-5 w-5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-blue-50 p-6 rounded-xl">
              <blockquote className="italic text-gray-700 mb-4">
                "We switched from Microsoft Teams to BEDROCK last year, and the difference in student engagement and faculty satisfaction has been remarkable. The platform just works the way academic institutions need it to."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary rounded-full flex items-center justify-center text-white font-bold mr-3">
                  JD
                </div>
                <div>
                  <p className="font-semibold">Dr. James Donovan</p>
                  <p className="text-sm text-gray-500">Dean of Student Affairs, UCLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Return on Investment</h2>
              <p className="text-xl text-blue-100">
                BEDROCK delivers measurable improvements to educational outcomes and institutional efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">40%</div>
                <p className="text-blue-100">Increase in Student Engagement</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">25%</div>
                <p className="text-blue-100">Improvement in Assignment Completion</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">30%</div>
                <p className="text-blue-100">Reduction in Administrative Time</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Long-term Value</h3>
              <p className="text-blue-100 mb-6">
                BEDROCK isn't just a tool – it's an investment in your educational community's future. Our platform evolves with your needs, providing continuous value year after year.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">For Students</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Better grades and academic outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Reduced stress and improved wellbeing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>More effective collaboration skills</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">For Institutions</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Higher retention and graduation rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Improved faculty satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Enhanced institutional reputation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the benefits yourself</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of students and educators who have already transformed their academic experience with BEDROCK.
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
            <Link to="/testimonials">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-105"
              >
                Read Success Stories
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
              <Link to="/features" className="text-blue-100 hover:text-white transition-colors duration-300">Features</Link>
              <Link to="/benefits" className="text-white font-medium transition-colors duration-300">Benefits</Link>
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

export default Benefits;
