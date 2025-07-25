
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, Target, Users, Award, Heart, Lightbulb, 
  CheckCircle, TrendingUp, Globe, Sparkles, 
  BookOpen, GraduationCap, Briefcase, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const stats = [
    { label: "Students Guided", value: "100,000+", icon: Users },
    { label: "Assessments Completed", value: "500,000+", icon: Target },
    { label: "Success Stories", value: "15,000+", icon: Award },
    { label: "Countries Reached", value: "25+", icon: Globe }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Educational Psychologist & Co-Founder",
      bio: "Former IIT professor with 15+ years in educational psychology and career counseling.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Rahul Krishnan",
      role: "Technology Lead & Co-Founder", 
      bio: "Ex-Google engineer passionate about using AI to democratize career guidance.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Ananya Mehta",
      role: "Research Director",
      bio: "PhD in Cognitive Science, leading our assessment methodology and validation research.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Vikram Patel",
      role: "Product Strategy",
      bio: "Former McKinsey consultant specializing in education technology and student success.",
      image: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Every decision we make prioritizes student well-being and success over profits."
    },
    {
      icon: Brain,
      title: "Science-Backed Methods",
      description: "Our assessments are grounded in psychological research and validated through extensive testing."
    },
    {
      icon: Globe,
      title: "Accessible to All",
      description: "Quality career guidance should be free and accessible regardless of background or location."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We constantly evolve our methods based on the latest research and student feedback."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded PathFinder",
      description: "Started with a simple vision: democratize quality career guidance for students."
    },
    {
      year: "2021", 
      title: "First 10,000 Users",
      description: "Reached our first major milestone with overwhelmingly positive feedback."
    },
    {
      year: "2022",
      title: "Research Partnership",
      description: "Partnered with leading universities to validate and improve our assessment methods."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to serve students across 25+ countries with localized assessments."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched AI-powered personalized recommendations and career path optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header logoType="sparkles" navLinks={[
        { to: "/", label: "Home" },
        { to: "/assessments", label: "Assessments" },
        { to: "/about", label: "About", active: true },
        { to: "/blog", label: "Blog" },
      ]} />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100" variant="secondary">
            ✨ Our Story
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Empowering Students to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Find Their Path
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We believe every student deserves access to quality career guidance. Our mission is to democratize 
            educational and career counseling through research-backed assessments and personalized insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/assessments">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Take an Assessment
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-blue-200 hover:bg-blue-50">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Target className="h-5 w-5 text-blue-600 mr-2" />
                    Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide every student, regardless of their background or location, with access to 
                    high-quality, research-backed career guidance that helps them make informed decisions 
                    about their educational and professional future.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Lightbulb className="h-5 w-5 text-green-600 mr-2" />
                    Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where every student finds their perfect educational and career path, 
                    leading to a more fulfilled, productive, and innovative society where talents 
                    are maximized and potential is fully realized.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 p-6">
                <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Research-Based</h4>
                <p className="text-sm text-gray-600">Grounded in psychological and educational research</p>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-white border-green-100 p-6">
                <GraduationCap className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Student-Centric</h4>
                <p className="text-sm text-gray-600">Designed with student needs at the center</p>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 p-6">
                <Briefcase className="h-8 w-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Career-Focused</h4>
                <p className="text-sm text-gray-600">Practical guidance for real career outcomes</p>
              </Card>
              <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100 p-6">
                <Globe className="h-8 w-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Globally Accessible</h4>
                <p className="text-sm text-gray-600">Available to students worldwide</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse group of educators, technologists, and researchers united by a common mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to transform career guidance.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <Card className="flex-1 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg text-gray-800">{milestone.title}</h3>
                      <Badge variant="outline" className="text-xs">{milestone.year}</Badge>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-lg text-gray-600">
              Acknowledged by leading organizations for our impact on education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">EdTech Innovation Award</h3>
                <p className="text-gray-600 text-sm">UNESCO, 2023</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Best Career Guidance Platform</h3>
                <p className="text-gray-600 text-sm">Education Awards, 2023</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fastest Growing EdTech</h3>
                <p className="text-gray-600 text-sm">TechCrunch, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Path?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of thousands of students who've discovered their perfect career fit with PathFinder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessments">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
