
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  BookOpen, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare,
  Quote, 
  Star
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const featuredTestimonials = [
    {
      quote: "BEDROCK has transformed how I organize my coursework. Everything is in one place and so easy to use! I've seen a marked improvement in my grades since adopting the platform.",
      author: "Sarah Johnson",
      role: "Computer Science Student",
      institution: "MIT",
      rating: 5,
      avatar: "S",
      color: "from-blue-500 to-indigo-400"
    },
    {
      quote: "As a professor, I've seen a marked improvement in student engagement since adopting BEDROCK for our department. The collaborative features make it so much easier to provide timely feedback.",
      author: "Dr. Michael Chen",
      role: "Biology Professor",
      institution: "Stanford University",
      rating: 5,
      avatar: "M",
      color: "from-green-500 to-teal-400"
    },
    {
      quote: "Our university switched from Teams to BEDROCK last semester, and both students and faculty are much happier with the experience. The platform is more reliable and tailored to educational needs.",
      author: "Amanda Torres",
      role: "IT Administrator",
      institution: "UCLA",
      rating: 5,
      avatar: "A",
      color: "from-purple-500 to-pink-400"
    },
    {
      quote: "BEDROCK has significantly reduced the administrative burden on our staff. What used to take hours now takes minutes, allowing us to focus on supporting our students' academic journeys.",
      author: "James Wilson",
      role: "Department Chair",
      institution: "Columbia University",
      rating: 5,
      avatar: "J",
      color: "from-yellow-500 to-orange-400"
    },
    {
      quote: "The calendar and task management features have completely changed how I approach my studies. I'm more organized, less stressed, and achieving better results than ever before.",
      author: "Priya Patel",
      role: "Graduate Student",
      institution: "UC Berkeley",
      rating: 5,
      avatar: "P",
      color: "from-red-500 to-pink-400"
    },
    {
      quote: "BEDROCK's intuitive design makes it accessible for all students, regardless of their technical skills. The learning curve is minimal, but the benefits are substantial.",
      author: "Thomas Rodriguez",
      role: "Student Affairs Director",
      institution: "University of Michigan",
      rating: 5,
      avatar: "T",
      color: "from-cyan-500 to-blue-400"
    }
  ];

  const videoTestimonials = [
    {
      name: "UC Berkeley Implementation",
      description: "How UC Berkeley deployed BEDROCK across multiple departments",
      duration: "3:45",
      thumbnail: "video-1"
    },
    {
      name: "Student Success Stories",
      description: "Real students share their experiences with BEDROCK",
      duration: "4:12",
      thumbnail: "video-2"
    },
    {
      name: "Faculty Perspectives",
      description: "Professors discuss the impact on teaching and student engagement",
      duration: "5:30",
      thumbnail: "video-3"
    }
  ];

  const useCases = [
    {
      title: "Large Universities",
      description: "BEDROCK scales to meet the needs of the largest educational institutions, with robust administrative tools and customizable workflows.",
      results: "Average 35% increase in student engagement"
    },
    {
      title: "Community Colleges",
      description: "Affordable, accessible solutions that support diverse student populations and flexible learning paths.",
      results: "Average 28% improvement in course completion rates"
    },
    {
      title: "High Schools",
      description: "Age-appropriate features that prepare students for college while supporting teachers and administrative staff.",
      results: "Average 40% reduction in missed assignments"
    },
    {
      title: "Online Learning",
      description: "Specialized tools for remote and hybrid learning environments that maintain connection and communication.",
      results: "Average 45% increase in student-teacher interaction"
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
            <Link to="/benefits" className="text-gray-600 hover:text-bedrock-secondary transition-colors duration-300">Benefits</Link>
            <Link to="/testimonials" className="font-medium text-bedrock-primary hover:text-bedrock-secondary transition-colors duration-300">Testimonials</Link>
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
              What Users Are Saying
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              BEDROCK is changing how schools and universities organize academic life. Hear directly from the students, educators, and administrators who use our platform every day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-bedrock-primary to-bedrock-secondary text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Join Our Community
                </Button>
              </Link>
              <a href="#video-testimonials">
                <Button variant="outline" className="border-bedrock-secondary text-bedrock-secondary font-medium px-6 py-3 rounded-lg hover:bg-bedrock-secondary/10 transition-all duration-300 transform hover:scale-105">
                  Watch Video Testimonials
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">Featured Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our users have to say about their experience with BEDROCK.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-blue-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-0">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 bg-gradient-to-r ${testimonial.color}`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.institution}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-100 absolute -top-4 -left-2" />
                    <p className="italic text-gray-700 relative z-10 pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="text-sm text-bedrock-secondary">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Verified User</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section id="video-testimonials" className="py-20 bg-bedrock-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Video Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Watch how BEDROCK has transformed academic experiences across educational institutions.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {videoTestimonials.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-video bg-white/10 backdrop-blur-md rounded-xl overflow-hidden relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-bedrock-primary/60 to-bedrock-secondary/60 group-hover:from-bedrock-primary/40 group-hover:to-bedrock-secondary/40 transition-all duration-300">
                          <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <MessageSquare className="h-8 w-8 text-bedrock-secondary" />
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{video.name}</h3>
                            <p className="text-blue-100 mb-4 max-w-md text-center">{video.description}</p>
                            <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm">
                              {video.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <Button className="bg-white text-bedrock-primary hover:bg-white/90 transition-all duration-300">
                          Watch Video
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <Button variant="outline" size="icon" className="mr-2 border-white/30 text-white hover:bg-white/10">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary bg-clip-text text-transparent">Success Across Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BEDROCK adapts to the unique needs of different educational settings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100">
                <h3 className="text-2xl font-bold text-bedrock-primary mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 text-bedrock-secondary mr-3" />
                    <span className="font-medium">{useCase.results}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/features">
              <Button className="bg-gradient-to-r from-bedrock-primary to-bedrock-secondary text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Explore More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Metrics */}
      <section className="py-20 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
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
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bedrock-primary to-bedrock-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join thousands of satisfied users</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Experience the platform that's transforming academic organization and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-white text-bedrock-primary hover:bg-blue-50 font-medium px-8 transform transition-transform duration-300 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/features">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/20 transform transition-transform duration-300 hover:scale-105"
              >
                Explore Features
              </Button>
            </Link>
          </div>
          <div className="mt-10 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-blue-100">
            No credit card required • Free for students • Cancel anytime
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
              <Link to="/benefits" className="text-blue-100 hover:text-white transition-colors duration-300">Benefits</Link>
              <Link to="/testimonials" className="text-white font-medium transition-colors duration-300">Testimonials</Link>
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

export default Testimonials;
