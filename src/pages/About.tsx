
import React from 'react';
import { Users, Target, Award, Heart, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Academic Officer",
      image: "/api/placeholder/300/300",
      bio: "Ph.D. in Educational Psychology with 15+ years in career counseling",
      specialties: ["Career Psychology", "Assessment Design", "Student Development"]
    },
    {
      name: "Michael Chen",
      role: "Lead Technology Architect",
      image: "/api/placeholder/300/300",
      bio: "Former Google engineer specializing in AI-driven educational platforms",
      specialties: ["AI/ML", "Educational Technology", "Platform Architecture"]
    },
    {
      name: "Dr. Priya Patel",
      role: "Research Director",
      image: "/api/placeholder/300/300",
      bio: "Expert in psychometric testing and educational research methodology",
      specialties: ["Psychometrics", "Research Design", "Data Analysis"]
    },
    {
      name: "James Wilson",
      role: "Student Success Manager",
      image: "/api/placeholder/300/300",
      bio: "Dedicated to helping students navigate their career journey successfully",
      specialties: ["Student Counseling", "Career Guidance", "Success Coaching"]
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Students Assessed", icon: Users },
    { number: "95%", label: "Accuracy Rate", icon: Target },
    { number: "200+", label: "University Partners", icon: Award },
    { number: "4.8/5", label: "Student Satisfaction", icon: Star }
  ];

  const values = [
    {
      title: "Evidence-Based Approach",
      description: "All our assessments are grounded in scientific research and validated through extensive testing.",
      icon: CheckCircle
    },
    {
      title: "Student-Centric Design",
      description: "Every feature is designed with the student experience in mind, ensuring clarity and ease of use.",
      icon: Heart
    },
    {
      title: "Continuous Innovation",
      description: "We constantly update our assessments to reflect the evolving landscape of education and careers.",
      icon: Target
    },
    {
      title: "Accessibility First",
      description: "Our platform is designed to be accessible to all students, regardless of their background or abilities.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About PathFinder</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help students make informed decisions about their academic and career paths 
            through scientifically-backed assessments and personalized guidance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower students with the knowledge and insights they need to choose academic paths 
                  and careers that align with their interests, abilities, and aspirations. We believe every 
                  student deserves access to high-quality career guidance backed by scientific research.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the world's most trusted platform for educational and career assessment, 
                  helping millions of students worldwide discover their optimal paths to success and 
                  fulfillment in their chosen fields.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-900 mb-2">{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-blue-900">
                      <Icon className="h-6 w-6" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our diverse team of experts combines years of experience in education, psychology, 
            technology, and student development to create the best possible experience for our users.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg text-blue-900">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How We Work</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Research & Development</h3>
                <p className="text-gray-600">
                  We continuously research the latest trends in education and career development to ensure our assessments remain relevant and accurate.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Assessment Design</h3>
                <p className="text-gray-600">
                  Our psychologists and education experts design comprehensive assessments that evaluate multiple dimensions of student potential.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Personalized Insights</h3>
                <p className="text-gray-600">
                  We provide detailed, actionable insights and recommendations tailored to each student's unique profile and aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Path?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their direction with PathFinder's comprehensive assessments.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/assessments">Start Your Assessment</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
