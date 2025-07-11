
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Clock, Award, Star, CheckCircle, Brain, Target, Compass, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">PathFinder</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/assessments" className="text-gray-600 hover:text-blue-600 transition-colors">Assessments</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100" variant="secondary">
            ✨ Trusted by 10,000+ Students
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Wondering What to Study,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Learn, or Do Next?
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover your best fit with our research-backed assessments. Get personalized insights in just 5-10 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/assessments">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Take Your First Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-blue-200 hover:bg-blue-50">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>5-10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Research-backed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-yellow-500" />
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Assessment Categories Preview */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Your Perfect Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different areas to discover what truly fits your interests, skills, and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-blue-100 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Skills & Software</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Discover which programming languages, tools, and software match your learning style.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">AutoCAD</Badge>
                  <Badge variant="secondary" className="text-xs">Figma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-green-100 hover:border-green-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-green-100 rounded-full w-fit group-hover:bg-green-200 transition-colors">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Career & Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Explore career paths that align with your personality and strengths.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">Data Analyst</Badge>
                  <Badge variant="secondary" className="text-xs">UI Designer</Badge>
                  <Badge variant="secondary" className="text-xs">AI Engineer</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-purple-100 rounded-full w-fit group-hover:bg-purple-200 transition-colors">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Subject Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Find out which subjects and academic areas suit your thinking style.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">Data Structures</Badge>
                  <Badge variant="secondary" className="text-xs">Electronics</Badge>
                  <Badge variant="secondary" className="text-xs">ML</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-orange-100 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-orange-100 rounded-full w-fit group-hover:bg-orange-200 transition-colors">
                  <Compass className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg font-semibold">Stream Switching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Considering a switch? Get personalized guidance on making the right move.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">Mech to CS</Badge>
                  <Badge variant="secondary" className="text-xs">ECE to IT</Badge>
                  <Badge variant="secondary" className="text-xs">Civil to Data</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/assessments">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8">
                Explore All Assessments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Students Say</h2>
            <p className="text-lg text-gray-600">Real feedback from students who found their path</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Finally understood why I was struggling with programming. The assessment helped me switch to UX design - best decision ever!"
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">Priya S.</p>
                  <p>Engineering Student</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The career assessment showed me I'm perfect for data analysis. Now I'm interning at a tech startup!"
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">Rahul K.</p>
                  <p>CS Graduate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Saved me from making a costly mistake. Almost switched streams until this assessment revealed my true strengths."
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">Ananya M.</p>
                  <p>Electronics Engineering</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Path?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who've found clarity about their future. Start with any assessment - it's completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessments">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="text-blue-100 text-sm mt-6">
            No signup required • Takes 5-10 minutes • Get instant results
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">PathFinder</span>
              </div>
              <p className="text-gray-400 text-sm">
                Helping students discover their perfect academic and career paths through research-backed assessments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Assessments</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/assessments" className="hover:text-white transition-colors">Skills & Software</Link></li>
                <li><Link to="/assessments" className="hover:text-white transition-colors">Career & Roles</Link></li>
                <li><Link to="/assessments" className="hover:text-white transition-colors">Subject Fit</Link></li>
                <li><Link to="/assessments" className="hover:text-white transition-colors">Stream Switching</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 text-sm mb-4">
                Follow us for the latest updates and career insights.
              </p>
              <div className="flex space-x-4">
                <Users className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Brain className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PathFinder. All rights reserved. • Built with ❤️ for students</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
