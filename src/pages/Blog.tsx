
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, Calendar, Clock, User, ArrowRight, 
  TrendingUp, Sparkles, BookOpen, Users, 
  Target, Brain, Lightbulb, GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "career-guidance", name: "Career Guidance", icon: Target, count: 45 },
    { id: "study-tips", name: "Study Tips", icon: BookOpen, count: 32 },
    { id: "entrance-exams", name: "Entrance Exams", icon: GraduationCap, count: 28 },
    { id: "skill-development", name: "Skill Development", icon: TrendingUp, count: 38 },
    { id: "psychology", name: "Psychology", icon: Brain, count: 22 },
    { id: "success-stories", name: "Success Stories", icon: Users, count: 15 }
  ];

  const featuredPosts = [
    {
      id: "choosing-engineering-branch",
      title: "How to Choose the Right Engineering Branch in 2024",
      excerpt: "A comprehensive guide to selecting your engineering specialization based on industry trends, personal interests, and career prospects.",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Career Guidance",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: "jee-preparation-strategy",
      title: "JEE 2024: Complete Preparation Strategy & Timeline",
      excerpt: "Master your JEE preparation with our research-backed strategy, including study schedules, resource recommendations, and mindset tips.",
      author: "Rahul Krishnan",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Entrance Exams",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: "programming-language-2024",
      title: "Which Programming Language Should You Learn First in 2024?",
      excerpt: "Analysis of the most in-demand programming languages and which one aligns best with your career goals and learning style.",
      author: "Vikram Patel",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Skill Development",
      image: "/api/placeholder/400/250",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: "study-abroad-guide",
      title: "Complete Guide to Studying Abroad: From Application to Visa",
      excerpt: "Everything you need to know about pursuing higher education internationally, including costs, scholarships, and cultural preparation.",
      author: "Dr. Ananya Mehta",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "Career Guidance",
      tags: ["Study Abroad", "Scholarships", "International Education"]
    },
    {
      id: "learning-styles-assessment",
      title: "Understanding Your Learning Style: Visual, Auditory, or Kinesthetic?",
      excerpt: "Discover your optimal learning approach and how to adapt your study methods for maximum effectiveness.",
      author: "Dr. Priya Sharma",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Psychology",
      tags: ["Learning", "Study Methods", "Psychology"]
    },
    {
      id: "career-switch-mechanical-cs",
      title: "From Mechanical to Computer Science: A Career Switch Success Story",
      excerpt: "Real student journey of successfully transitioning from mechanical engineering to computer science, including challenges and strategies.",
      author: "Student Contributor",
      date: "2024-01-03",
      readTime: "10 min read",
      category: "Success Stories",
      tags: ["Career Switch", "Engineering", "Success Story"]
    },
    {
      id: "neet-preparation-mistakes",
      title: "10 Common NEET Preparation Mistakes to Avoid",
      excerpt: "Learn from the mistakes of thousands of NEET aspirants and optimize your preparation strategy for better results.",
      author: "Dr. Ananya Mehta",
      date: "2024-01-01",
      readTime: "9 min read",
      category: "Entrance Exams",
      tags: ["NEET", "Medical", "Preparation Tips"]
    },
    {
      id: "soft-skills-engineering",
      title: "Why Soft Skills Matter More Than Ever for Engineers",
      excerpt: "Understanding the importance of communication, teamwork, and leadership skills in modern engineering careers.",
      author: "Vikram Patel",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Skill Development",
      tags: ["Soft Skills", "Engineering", "Career Development"]
    },
    {
      id: "time-management-students",
      title: "The Ultimate Time Management Guide for Students",
      excerpt: "Proven techniques and strategies to manage your time effectively while balancing studies, projects, and personal life.",
      author: "Rahul Krishnan",
      date: "2023-12-25",
      readTime: "8 min read",
      category: "Study Tips",
      tags: ["Time Management", "Productivity", "Study Tips"]
    }
  ];

  const popularTopics = [
    "Career Assessment", "JEE Preparation", "Programming Languages", "Study Abroad",
    "Engineering Branches", "Learning Styles", "Entrance Exams", "Skill Development",
    "Psychology", "Success Stories", "Time Management", "Soft Skills"
  ];

  const filteredPosts = recentPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">PathFinder</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/assessments" className="text-gray-600 hover:text-blue-600 transition-colors">Assessments</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100" variant="secondary">
            ✨ PathFinder Insights
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Expert Guidance for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Educational Journey
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Research-backed insights, practical advice, and inspiring stories to help you navigate 
            your academic and career path with confidence.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-blue-600/30" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-blue-700">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className={`group-hover:text-blue-600 transition-colors leading-tight ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="mb-2"
                >
                  All Posts
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                    className="mb-2"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCategory ? `${selectedCategory} Articles` : 'Recent Articles'}
              </h2>
              
              {filteredPosts.length > 0 ? (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="aspect-video md:aspect-square bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden rounded-l-lg">
                            <BookOpen className="absolute inset-0 m-auto h-12 w-12 text-blue-600/30" />
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{post.author}</span>
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                              <span>{post.readTime}</span>
                            </div>
                            
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 group">
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <CardContent>
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No articles found</h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your search or browse our categories.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory(null);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.name 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Topics */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic) => (
                    <Badge 
                      key={topic} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                      onClick={() => setSearchQuery(topic)}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-blue-600" />
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest insights and tips delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 mt-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Path?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            While you're here learning, why not take one of our assessments to get personalized guidance?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessments">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Take an Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
