
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Target, BookOpen, Users, TrendingUp, ArrowRight, Clock, Star, Brain } from "lucide-react";
import AssessmentIntro from '../components/AssessmentIntro';
import PsychometricSection from '../components/PsychometricSection';
import TechnicalSection from '../components/TechnicalSection';
import WISCARSection from '../components/WISCARSection';
import ResultsPage from '../components/ResultsPage';
import AssessmentLayout from '../../../../components/AssessmentLayout';

const Index = () => {
  const [assessmentData, setAssessmentData] = useState({
    psychometric: {},
    technical: {},
    wiscar: {}
  });

  const updateAssessmentData = (section: string, data: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  // Adopt section-based navigation and progress bar from reference
  const sections = [
    { id: 'intro', title: 'Introduction', icon: BookOpen, color: 'bg-blue-500' },
    { id: 'psychometric', title: 'Psychological Fit', icon: Brain, color: 'bg-purple-500' },
    { id: 'technical', title: 'Technical Aptitude', icon: Target, color: 'bg-green-500' },
    { id: 'wiscar', title: 'WISCAR Analysis', icon: Users, color: 'bg-orange-500' },
    { id: 'results', title: 'Your Results', icon: TrendingUp, color: 'bg-red-500' }
  ];

  const [currentSection, setCurrentSection] = useState('intro');
  const getCurrentSectionIndex = () => sections.findIndex(section => section.id === currentSection);
  const progress = ((getCurrentSectionIndex() + 1) / sections.length) * 100;

  // Render section content based on currentSection
  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'intro':
        return <AssessmentIntro onNext={() => setCurrentSection('psychometric')} />;
      case 'psychometric':
        return <PsychometricSection onNext={() => setCurrentSection('technical')} onPrev={() => setCurrentSection('intro')} onUpdateData={updateAssessmentData} />;
      case 'technical':
        return <TechnicalSection onComplete={(data) => {
          updateAssessmentData('technical', data);
          setCurrentSection('wiscar');
        }} />;
      case 'wiscar':
        return <WISCARSection onNext={() => setCurrentSection('results')} onPrev={() => setCurrentSection('technical')} onUpdateData={updateAssessmentData} />;
      case 'results':
        return <ResultsPage assessmentData={assessmentData} onPrev={() => setCurrentSection('wiscar')} />;
      default:
        return <AssessmentIntro onNext={() => setCurrentSection('psychometric')} />;
    }
  };

  return (
    <AssessmentLayout>
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Should You Learn to Become a Scrum Master?
              </h1>
              <p className="text-gray-600 text-sm">
                Comprehensive Career Assessment & Guidance
              </p>
            </div>
            <Badge variant="outline" className="text-sm">
              {Math.round(progress)}% Complete
            </Badge>
          </div>
          {/* Progress Bar */}
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
          {/* Section Navigation */}
          <div className="flex mt-4 space-x-4 overflow-x-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isActive = section.id === currentSection;
              const isCompleted = getCurrentSectionIndex() > index;
              return (
                <div
                  key={section.id}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg min-w-fit ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                      : isCompleted
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{section.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        {renderCurrentSection()}
      </div>
    </AssessmentLayout>
  );
};

export default Index;
