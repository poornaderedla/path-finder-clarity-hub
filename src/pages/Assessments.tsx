
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Compass, Lightbulb, Clock, Users, BookOpen, Briefcase, Wrench, GraduationCap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Assessments = () => {
  const assessmentCategories = [
    {
      id: "skills-software",
      title: "Skills & Software Fit",
      description: "Discover which programming languages, tools, and software match your learning style and career goals.",
      icon: <Wrench className="h-8 w-8" />,
      color: "blue",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      duration: "8-10 min",
      users: "2.1k",
      assessments: [
        { name: "Python Programming Fit", tags: ["Beginner", "Popular"] },
        { name: "AutoCAD Mastery Check", tags: ["Engineering"] },
        { name: "Web Development Path", tags: ["Frontend", "Backend"] },
        { name: "Data Analysis Tools", tags: ["Excel", "R", "Python"] },
        { name: "Design Software Match", tags: ["Figma", "Adobe"] }
      ]
    },
    {
      id: "career-roles",
      title: "Career & Role Fit",
      description: "Explore career paths that align with your personality, strengths, and work preferences.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "green",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      duration: "10-12 min",
      users: "3.5k",
      assessments: [
        { name: "Software Engineer Path", tags: ["Technical", "High-demand"] },
        { name: "Data Scientist Fit", tags: ["Analytics", "AI/ML"] },
        { name: "Product Manager Role", tags: ["Leadership", "Strategy"] },
        { name: "UX/UI Designer Match", tags: ["Creative", "Tech"] },
        { name: "DevOps Engineer Check", tags: ["Infrastructure"] }
      ]
    },
    {
      id: "subject-fit",
      title: "Subject & Stream Suitability",
      description: "Find out which academic subjects and streams suit your thinking style and interests.",
      icon: <BookOpen className="h-8 w-8" />,
      color: "purple",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      duration: "6-8 min",
      users: "1.8k",
      assessments: [
        { name: "Data Structures & Algorithms", tags: ["CS Core", "Problem-solving"] },
        { name: "Electronics & Communication", tags: ["ECE", "Hardware"] },
        { name: "Machine Learning Fundamentals", tags: ["AI", "Math-heavy"] },
        { name: "Database Management", tags: ["Backend", "Systems"] },
        { name: "Digital Signal Processing", tags: ["ECE", "Math"] }
      ]
    },
    {
      id: "stream-switching",
      title: "Stream Switching Guidance",
      description: "Considering a branch change? Get personalized guidance on making the right academic move.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "orange",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      duration: "12-15 min",
      users: "956",
      assessments: [
        { name: "Mechanical to Computer Science", tags: ["Popular Switch", "Career Change"] },
        { name: "ECE to Software Development", tags: ["Tech Transition"] },
        { name: "Civil to Data Science", tags: ["Analytics", "Modern Tech"] },
        { name: "Chemical to Product Management", tags: ["Leadership"] },
        { name: "Any Stream to MBA", tags: ["Business", "Management"] }
      ]
    }
  ];

  const comingSoonCategories = [
    {
      title: "High School Path Selector",
      description: "Choose the right subjects and stream for 11th & 12th grade",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "gray"
    },
    {
      title: "Postgraduate Direction",
      description: "MS, MBA, or job? Find your best next step after graduation",
      icon: <Target className="h-8 w-8" />,
      color: "gray"
    },
    {
      title: "Professional Pivot Tool",
      description: "Career change guidance for working professionals",
      icon: <Compass className="h-8 w-8" />,
      color: "gray"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">PathFinder</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/assessments" className="text-blue-600 font-medium">Assessments</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Assessment
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose from our research-backed assessments to discover your ideal career path, 
            subjects, or skills. Each assessment is designed to give you actionable insights.
          </p>
        </div>
      </section>

      {/* Main Assessment Categories */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {assessmentCategories.map((category) => (
              <Card key={category.id} className={`group hover:shadow-xl transition-all duration-300 ${category.borderColor} hover:scale-[1.02]`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-full ${category.iconBg} group-hover:scale-110 transition-transform`}>
                      <div className={category.iconColor}>
                        {category.icon}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="h-3 w-3" />
                        <span>{category.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{category.users} taken</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mt-4">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Popular Assessments:</h4>
                    <div className="space-y-2">
                      {category.assessments.map((assessment, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <span className="text-gray-700 font-medium">{assessment.name}</span>
                          <div className="flex gap-1">
                            {assessment.tags.map((tag, tagIdx) => (
                              <Badge key={tagIdx} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={`/assessment/${category.id}`}>
                    <Button className={`w-full ${category.buttonColor} text-white font-semibold py-3 text-lg group-hover:shadow-lg transition-all`}>
                      Start Assessment
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600">We're expanding to help more students at every stage of their journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {comingSoonCategories.map((category, idx) => (
              <Card key={idx} className="border-gray-200 bg-gray-50/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50"></div>
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-200 rounded-full w-fit">
                    <div className="text-gray-500">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-700">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <Badge variant="outline" className="bg-white/80 text-gray-600 border-gray-300">
                    Coming Soon
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 mx-4 rounded-2xl mb-16">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take our quick starter quiz to get a personalized recommendation for which assessment to begin with.
          </p>
          
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
            Get My Recommendation
            <Lightbulb className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-blue-100 text-sm mt-6">
            Takes 2 minutes • Get matched to the perfect assessment
          </p>
        </div>
      </section>
    </div>
  );
};

export default Assessments;
