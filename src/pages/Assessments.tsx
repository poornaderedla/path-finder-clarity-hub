
import React from 'react';
import { Brain, Code, Cloud, Smartphone, Shield, BarChart3, Palette, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Assessments = () => {
  const assessmentCategories = [
    {
      title: "Technology & Programming",
      icon: Code,
      color: "bg-blue-100 text-blue-700",
      assessments: [
        {
          name: "Full Stack Development",
          description: "Comprehensive assessment for front-end and back-end development skills",
          duration: "45 minutes",
          difficulty: "Intermediate",
          tags: ["JavaScript", "React", "Node.js"],
          popular: true
        },
        {
          name: "Data Science & AI/ML",
          description: "Evaluate your aptitude for data science and machine learning careers",
          duration: "50 minutes",
          difficulty: "Advanced",
          tags: ["Python", "Statistics", "Machine Learning"],
          popular: true
        },
        {
          name: "DevOps Engineering",
          description: "Assessment for cloud infrastructure and deployment expertise",
          duration: "40 minutes",
          difficulty: "Intermediate",
          tags: ["AWS", "Docker", "CI/CD"],
          popular: false
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "bg-purple-100 text-purple-700",
      assessments: [
        {
          name: "AWS Cloud Architect",
          description: "Comprehensive AWS skills and cloud architecture assessment",
          duration: "55 minutes",
          difficulty: "Advanced",
          tags: ["AWS", "Cloud Architecture", "Security"],
          popular: true
        },
        {
          name: "Multi-Cloud Engineer",
          description: "Cross-platform cloud expertise evaluation",
          duration: "60 minutes",
          difficulty: "Expert",
          tags: ["AWS", "Azure", "GCP"],
          popular: false
        }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-green-100 text-green-700",
      assessments: [
        {
          name: "Flutter Development",
          description: "Cross-platform mobile development skills assessment",
          duration: "45 minutes",
          difficulty: "Intermediate",
          tags: ["Flutter", "Dart", "Mobile UI"],
          popular: false
        },
        {
          name: "React Native",
          description: "JavaScript-based mobile app development evaluation",
          duration: "40 minutes",
          difficulty: "Intermediate",
          tags: ["React Native", "JavaScript", "iOS/Android"],
          popular: false
        }
      ]
    },
    {
      title: "Security & Ethics",
      icon: Shield,
      color: "bg-red-100 text-red-700",
      assessments: [
        {
          name: "Cybersecurity Specialist",
          description: "Information security and threat analysis capabilities",
          duration: "50 minutes",
          difficulty: "Advanced",
          tags: ["Security", "Penetration Testing", "Risk Analysis"],
          popular: true
        },
        {
          name: "Ethical Hacking",
          description: "White-hat hacking and vulnerability assessment skills",
          duration: "55 minutes",
          difficulty: "Expert",
          tags: ["Penetration Testing", "Network Security", "Vulnerability Assessment"],
          popular: false
        }
      ]
    },
    {
      title: "Business & Analytics",
      icon: BarChart3,
      color: "bg-orange-100 text-orange-700",
      assessments: [
        {
          name: "Business Analyst",
          description: "Requirements analysis and business process optimization",
          duration: "35 minutes",
          difficulty: "Beginner",
          tags: ["Requirements Analysis", "Process Improvement", "Stakeholder Management"],
          popular: false
        },
        {
          name: "Digital Marketing",
          description: "Online marketing strategies and campaign management",
          duration: "40 minutes",
          difficulty: "Intermediate",
          tags: ["SEO", "Social Media", "Analytics"],
          popular: true
        }
      ]
    },
    {
      title: "Design & User Experience",
      icon: Palette,
      color: "bg-pink-100 text-pink-700",
      assessments: [
        {
          name: "UI/UX Design",
          description: "User interface and experience design capabilities",
          duration: "45 minutes",
          difficulty: "Intermediate",
          tags: ["Design Thinking", "Prototyping", "User Research"],
          popular: false
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-orange-100 text-orange-700';
      case 'Expert': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Omni Calculator Style */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-variant overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium">🎯 Scientifically Validated Career Assessments</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Career Match </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Take our comprehensive, scientifically-backed assessments to discover career paths that align perfectly 
              with your unique skills, interests, and personality. Join 50,000+ students who found their direction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/70">Assessment Types</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-white/70">Accuracy Rate</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold">30-60</div>
                <div className="text-sm text-white/70">Minutes Each</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Categories - Omni Style */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Choose Your Assessment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of career assessments, each designed with cutting-edge psychometric research 
              to provide you with accurate, actionable insights about your ideal career path.
            </p>
          </div>

          <div className="space-y-12">
            {assessmentCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">{category.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.assessments.map((assessment, index) => (
                      <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                        {assessment.popular && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-yellow-500 text-white">Popular</Badge>
                          </div>
                        )}
                        
                        <CardHeader>
                          <CardTitle className="text-xl text-blue-900 mb-2">
                            {assessment.name}
                          </CardTitle>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {assessment.description}
                          </p>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>⏱️ {assessment.duration}</span>
                              <Badge className={getDifficultyColor(assessment.difficulty)} variant="secondary">
                                {assessment.difficulty}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {assessment.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button className="w-full" variant="default">
                            Start Assessment
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How Our Assessments Work</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Choose Assessment</h3>
              <p className="text-gray-600 text-sm">Select the career path you're interested in exploring</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Complete Evaluation</h3>
              <p className="text-gray-600 text-sm">Answer questions about your skills, interests, and preferences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Get Analysis</h3>
              <p className="text-gray-600 text-sm">Receive detailed insights based on scientific assessment methods</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Plan Your Path</h3>
              <p className="text-gray-600 text-sm">Use personalized recommendations to guide your career journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a fulfilling career with our comprehensive assessments.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Journey Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assessments;
