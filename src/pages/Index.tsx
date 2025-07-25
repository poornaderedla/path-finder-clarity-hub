
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Clock, Award, Star, CheckCircle, Brain, Target, Compass, Lightbulb, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AssessmentCard from "../components/AssessmentCard";
import { getFeaturedAssessments } from "../data/assessments";

const Index = () => {
  const featuredAssessments = getFeaturedAssessments();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <header className="bg-white/90 backdrop-blur-md border-b border-primary-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">PathFinder</span>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/assessments" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Assessments</Link>
            <Link to="/about" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">About</Link>
            <Link to="/blog" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Blog</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:opacity-90 border-0 px-4 py-2" variant="secondary">
            ✨ Trusted by 100,000+ Students Worldwide
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Wondering What to Study,{" "}
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
              Learn, or Do Next?
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover your perfect academic and career path with our research-backed assessments. 
            Get personalized insights across all fields and life stages - completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/assessments">
              <Button size="lg" className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 text-white px-8 py-4 text-lg border-0 shadow-lg hover:shadow-xl transition-all">
                Take Your First Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary-200 hover:bg-primary-50 text-primary-600 hover:text-primary-600">
                Learn More
              </Button>
            </Link>
          </div>
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-accent-100 rounded-full">
                <Clock className="h-4 w-4 text-accent-500" />
              </div>
              <span>5-15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-secondary-100 rounded-full">
                <CheckCircle className="h-4 w-4 text-secondary-500" />
              </div>
              <span>Research-backed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-primary-100 rounded-full">
                <Award className="h-4 w-4 text-primary-500" />
              </div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-accent-100 rounded-full">
                <Users className="h-4 w-4 text-accent-500" />
              </div>
              <span>All fields covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Assessments */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Start Your Discovery Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Popular assessments across different life stages and interests. Find the one that resonates with you.
            </p>
          </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/assessments">
              <Button size="lg" className="bg-gradient-to-r from-secondary-500 to-accent-500 hover:opacity-90 text-white px-8 border-0 shadow-lg hover:shadow-xl transition-all">
                Explore All Assessments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div> 
      </section>
          

     
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Coverage for Every Stage of Life
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From high school stream selection to career pivots, we've got assessments for every major decision point in your educational and professional journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-primary-100 hover:border-primary-200 bg-gradient-to-br from-white to-primary-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">High School Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 text-center mb-4">
                  Stream selection, entrance exam guidance, and career exploration for grades 9-12.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs bg-primary-100 text-primary-600 border-0">Science Stream</Badge>
                  <Badge variant="secondary" className="text-xs bg-accent-100 text-accent-600 border-0">JEE/NEET</Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary-100 text-secondary-600 border-0">Commerce</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-secondary-100 hover:border-secondary-200 bg-gradient-to-br from-white to-secondary-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">College Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 text-center mb-4">
                  Engineering specializations, skill development, and career planning for undergraduates.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs bg-primary-100 text-primary-600 border-0">Programming</Badge>
                  <Badge variant="secondary" className="text-xs bg-accent-100 text-accent-600 border-0">Specialization</Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary-100 text-secondary-600 border-0">Internships</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-accent-100 hover:border-accent-200 bg-gradient-to-br from-white to-accent-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">Graduates & Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 text-center mb-4">
                  Career transitions, skill upgrades, and industry switches for working professionals.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs bg-primary-100 text-primary-600 border-0">Career Switch</Badge>
                  <Badge variant="secondary" className="text-xs bg-accent-100 text-accent-600 border-0">Upskilling</Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary-100 text-secondary-600 border-0">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-primary-100 hover:border-primary-200 bg-gradient-to-br from-white to-primary-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">Creative & Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 text-center mb-4">
                  Design thinking, artistic mediums, and creative career paths across all art forms.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs bg-primary-100 text-primary-600 border-0">UI/UX Design</Badge>
                  <Badge variant="secondary" className="text-xs bg-accent-100 text-accent-600 border-0">Digital Art</Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary-100 text-secondary-600 border-0">Music</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-secondary-100 hover:border-secondary-200 bg-gradient-to-br from-white to-secondary-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">Business & Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 text-center mb-4">
                  Entrepreneurship readiness, business acumen, and finance career assessments.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs bg-primary-100 text-primary-600 border-0">Entrepreneurship</Badge>
                  <Badge variant="secondary" className="text-xs bg-accent-100 text-accent-600 border-0">Finance</Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary-100 text-secondary-600 border-0">Marketing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-accent-100 hover:border-accent-200 bg-gradient-to-br from-white to-accent-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">International Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 text-center mb-4">
                  Study abroad readiness, global career paths, and international education guidance.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs bg-primary-100 text-primary-600 border-0">Study Abroad</Badge>
                  <Badge variant="secondary" className="text-xs bg-accent-100 text-accent-600 border-0">Scholarships</Badge>
                  <Badge variant="secondary" className="text-xs bg-secondary-100 text-secondary-600 border-0">Global Careers</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Students Say</h2>
            <p className="text-lg text-slate-600">Real feedback from students who found their path</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary-50 to-white border-primary-100 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-slate-900 mb-4">
                  "Finally understood why I was struggling with programming. The assessment helped me switch to UX design - best decision ever!"
                </p>
                <div className="text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Priya S.</p>
                  <p>Engineering Student</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary-50 to-white border-secondary-100 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-slate-900 mb-4">
                  "The career assessment showed me I'm perfect for data analysis. Now I'm interning at a tech startup!"
                </p>
                <div className="text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Rahul K.</p>
                  <p>CS Graduate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent-50 to-white border-accent-100 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-slate-900 mb-4">
                  "Saved me from making a costly mistake. Almost switched streams until this assessment revealed my true strengths."
                </p>
                <div className="text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Ananya M.</p>
                  <p>Electronics Engineering</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 relative overflow-hidden">
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width= 60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg %3E%3Cg fill=none fill-rule= evenodd %3E%3Cg fill= %23ffffff  fill-opacity= 0.05 %3E%3Ccircle cx=30 cy=30 r=2 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'>
        <div className="container mx-auto text-center max-w-3xl relative">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Path?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who've found clarity about their future. Start with any assessment - it's completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessments">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-6">
            No signup required • Takes 5-10 minutes • Get instant results
          </p>
        </div>
        </div>
      </section>

    
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PathFinder</span>
              </div>
              <p className="text-white/70 text-sm">
                Helping students discover their perfect academic and career paths through research-backed assessments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Assessments</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/assessments" className="hover:text-white transition-colors">Skills & Software</Link></li>
                <li><Link to="/assessments" className="hover:text-white transition-colors">Career & Roles</Link></li>
                <li><Link to="/assessments" className="hover:text-white transition-colors">Subject Fit</Link></li>
                <li><Link to="/assessments" className="hover:text-white transition-colors">Stream Switching</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-white/70 text-sm mb-4">
                Follow us for the latest updates and career insights.
              </p>
              <div className="flex space-x-4">
                <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                  <Brain className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>2024 PathFinder. All rights reserved. • Built with ❤️ for students</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

