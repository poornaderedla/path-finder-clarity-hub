
import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, Filter, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Engineering Stream in 2024",
      excerpt: "A comprehensive guide to understanding different engineering disciplines and making an informed choice that aligns with your interests and career goals.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Career Guidance",
      tags: ["Engineering", "Career Choice", "Students"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "The Psychology Behind Career Assessment Tests",
      excerpt: "Discover the scientific principles that make career assessments effective tools for understanding your professional potential and personality fit.",
      author: "Dr. Priya Patel",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Assessment Science",
      tags: ["Psychology", "Assessment", "Research"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Top 10 Emerging Tech Careers for 2024",
      excerpt: "Explore the fastest-growing technology careers and understand what skills you need to succeed in the digital economy of tomorrow.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Technology",
      tags: ["Technology", "Future Careers", "Skills"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 4,
      title: "Understanding Your WISCAR Analysis Results",
      excerpt: "A detailed breakdown of how to interpret your WISCAR assessment results and use them to make informed academic and career decisions.",
      author: "James Wilson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Assessment Guide",
      tags: ["WISCAR", "Assessment", "Career Planning"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Data Science: Is It Right for You?",
      excerpt: "Explore the world of data science, understand the required skills, and discover if this rapidly growing field aligns with your interests.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Career Spotlight",
      tags: ["Data Science", "Analytics", "Career Path"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "Medical vs Engineering: Making the Right Choice",
      excerpt: "A comprehensive comparison of medical and engineering careers to help you understand which path might be the better fit for your goals.",
      author: "Dr. Priya Patel",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "Career Guidance",
      tags: ["Medical", "Engineering", "Comparison"],
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = ["All", "Career Guidance", "Assessment Science", "Technology", "Assessment Guide", "Career Spotlight"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">PathFinder Blog</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Insights, guidance, and expert advice to help you navigate your educational and career journey
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <Card key={post.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-6">
              {filteredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto bg-gray-300"></div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          {post.featured && <Badge variant="outline">Featured</Badge>}
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="group-hover:bg-blue-50">
                            Read More <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Posts */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Recent Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map(post => (
                    <div key={post.id} className="group cursor-pointer">
                      <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Subscribe to get the latest career insights and educational guidance.
                </p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Enter your email" />
                  <Button className="w-full" size="sm">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
