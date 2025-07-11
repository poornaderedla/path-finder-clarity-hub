
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AssessmentCard from "../components/AssessmentCard";
import { assessmentCategories, getAllAssessments } from "../data/assessments";

const Assessments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const allAssessments = getAllAssessments();
  
  const filteredAssessments = allAssessments.filter(assessment => {
    const matchesCategory = !selectedCategory || assessment.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = !selectedDifficulty || assessment.difficulty === selectedDifficulty;
    
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const currentCategory = selectedCategory ? 
    assessmentCategories.find(cat => cat.title === selectedCategory) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-800">PathFinder</span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/assessments" className="text-blue-600 font-medium">Assessments</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          {currentCategory ? (
            <>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="hover:text-blue-600 transition-colors"
              >
                Assessments
              </button>
              <span>/</span>
              <span className="text-gray-800 font-medium">{currentCategory.title}</span>
            </>
          ) : (
            <span className="text-gray-800 font-medium">Assessments</span>
          )}
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {currentCategory ? currentCategory.title : "All Assessments"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentCategory ? 
              currentCategory.description : 
              "Comprehensive assessments to guide your educational and career journey across all fields and stages of life."
            }
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search assessments..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                value={selectedDifficulty || ""}
                onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              >
                <option value="">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedDifficulty || selectedCategory) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty(null);
                  setSelectedCategory(null);
                }}
                className="text-sm"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Category Filter */}
          {!selectedCategory && (
            <div className="flex flex-wrap gap-2">
              {assessmentCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCategory(category.title)}
                  className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Back Button for Category View */}
        {selectedCategory && (
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedCategory(null)}
              className="text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Assessments
            </Button>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAssessments.length} assessment{filteredAssessments.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Assessment Grid */}
        {filteredAssessments.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} {...assessment} />
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <CardContent>
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No assessments found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search criteria or browse our categories.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty(null);
                  setSelectedCategory(null);
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Featured Categories (when not in category view) */}
        {!selectedCategory && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Explore by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assessmentCategories.map((category) => (
                <Card
                  key={category.id}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 overflow-hidden"
                  onClick={() => setSelectedCategory(category.title)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <CardContent className="p-6 relative">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {category.assessments.length} assessment{category.assessments.length !== 1 ? 's' : ''}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're constantly adding new assessments. Get notified when we launch assessments in your area of interest.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-50">
            Request New Assessment
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Assessments;
