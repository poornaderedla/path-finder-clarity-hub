
import { useState } from "react";
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Brain, Code, Target, TrendingUp, CheckCircle } from 'lucide-react';
import AssessmentHero from "../components/AssessmentHero";
import AssessmentFlow from "../components/AssessmentFlow";
import AssessmentLayout from "../../../../components/AssessmentLayout";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction', icon: BookOpen, color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { id: 'psychometric', title: 'Psychological Fit', icon: Brain, color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { id: 'technical', title: 'Technical Aptitude', icon: Code, color: 'bg-green-100 text-green-700 border-green-300' },
    { id: 'wiscar', title: 'WISCAR Analysis', icon: Target, color: 'bg-orange-100 text-orange-700 border-orange-300' },
    { id: 'results', title: 'Your Results', icon: TrendingUp, color: 'bg-red-100 text-red-700 border-red-300' }
  ];

  const getCurrentSectionIndex = () => {
    return sections.findIndex(section => section.id === currentSection);
  };

  const progress = ((getCurrentSectionIndex() + 1) / sections.length) * 100;

  const handleStartAssessment = () => setCurrentSection('psychometric');
  const handleAssessmentBack = () => setCurrentSection('intro');
  const handleAssessmentComplete = () => setCurrentSection('results');

  let mainContent;
  if (currentSection === 'intro') {
    mainContent = <AssessmentHero onStartAssessment={handleStartAssessment} />;
  } else if (currentSection === 'psychometric' || currentSection === 'technical' || currentSection === 'wiscar') {
    mainContent = (
      <AssessmentFlow 
        onBack={handleAssessmentBack}
      />
    );
  } else if (currentSection === 'results') {
    mainContent = (
      <div className="flex flex-col items-center justify-center h-64">
        <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
        <h2 className="text-xl font-bold mb-2 text-blue-900">Assessment Complete!</h2>
        <p className="text-gray-700">Thank you for completing the assessment.</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setCurrentSection('intro')}
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <AssessmentLayout>
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                Is .NET Development Right for You?
              </h1>
              <p className="text-gray-700 text-sm">
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
              const isActive = getCurrentSectionIndex() === index;
              const isCompleted = getCurrentSectionIndex() > index;
              return (
                <div
                  key={section.id}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg min-w-fit border ${
                    isActive
                      ? section.color
                      : isCompleted
                      ? 'bg-green-100 text-green-700 border-green-300'
                      : 'bg-gray-100 text-gray-500 border-gray-200'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Icon className="w-4 h-4 text-gray-500" />
                  )}
                  <span className="text-sm font-medium">{section.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 flex-1">
        {mainContent}
      </div>
    </AssessmentLayout>
  );
};

export default Index;
