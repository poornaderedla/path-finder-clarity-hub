
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AssessmentCard from "../components/AssessmentCard";
import { assessmentCategories, assessments } from "@/data/assessments";

const Assessments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  // Replace getAllAssessments with direct use of assessments
  const allAssessments = assessments;
  
  // Debug logs
  console.log('assessmentCategories:', assessmentCategories);
  console.log('allAssessments:', allAssessments);

  const filteredAssessments = allAssessments.filter(assessment => {
    const matchesCategory = !selectedCategory || assessment.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = !selectedDifficulty || assessment.difficulty === selectedDifficulty;
    
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  // Debug logs for filter state
  console.log('selectedCategory:', selectedCategory);
  console.log('filteredAssessments:', filteredAssessments);

  const currentCategory = selectedCategory ? selectedCategory : null;

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
      {/* Secondary Navigation Bar */}
      <nav className="bg-gradient-to-r from-primary-50 to-secondary-50 border-b border-primary-100 sticky top-[64px] z-40">
        <div className="container mx-auto px-4 flex space-x-8 overflow-x-auto">
          <button className="py-4 px-2 text-primary-600 border-b-2 border-primary-600 font-semibold whitespace-nowrap focus:outline-none">Computer Science</button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section - Only Computer Science */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Computer Science
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a wide range of Computer Science assessments to discover your strengths, interests, and ideal learning paths.
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

          {/* Category Filter Section (moved up) */}
          {!selectedCategory && (
            <div className="w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Explore by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {assessmentCategories.map((category) => (
                  <Card
                    key={category}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 overflow-hidden"
                    // Defensive: Only trigger on direct card click
                    onClick={e => {
                      // Only trigger if the card itself is clicked, not a child
                      if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.card-content')) {
                        setSelectedCategory(category);
                      }
                    }}
                  >
                    {/* Removed overlay to prevent dimming */}
                    <CardContent className="p-4 relative card-content group-hover:bg-blue-50 transition-colors">
                      <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                        {category}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {allAssessments.filter(a => a.category === category).length} assessment{allAssessments.filter(a => a.category === category).length !== 1 ? 's' : ''}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
        </div>
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
        {/* Removed old Explore by Category section from the bottom */}

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
