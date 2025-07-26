import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Code, Target, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Introduction } from "../components/Introduction";
import { PsychologicalFit } from "../components/PsychologicalFit";
import { TechnicalAptitude } from "../components/TechnicalAptitude";
import { WISCARAnalysis } from "../components/WISCARAnalysis";
import { Results } from "../components/Results";
import { AssessmentResponse, AssessmentResult } from "../types/assessment";
import { calculateResults } from "../utils/scoring";
import AssessmentLayout from "../../../../components/AssessmentLayout";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('intro');
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: BookOpen, color: 'bg-blue-500' },
    { id: 'psychometric', title: 'Psychological Fit', icon: Brain, color: 'bg-purple-500' },
    { id: 'technical', title: 'Technical Aptitude', icon: Code, color: 'bg-green-500' },
    { id: 'wiscar', title: 'WISCAR Analysis', icon: Target, color: 'bg-orange-500' },
    { id: 'results', title: 'Your Results', icon: TrendingUp, color: 'bg-red-500' }
  ];

  const getCurrentSectionIndex = () => {
    return sections.findIndex(section => section.id === currentSection);
  };

  const progress = ((getCurrentSectionIndex() + 1) / sections.length) * 100;

  const handleUpdateResponse = (questionId: string, value: string | number) => {
    setResponses(prev => {
      const existing = prev.find(r => r.questionId === questionId);
      if (existing) {
        return prev.map(r => r.questionId === questionId ? { ...r, value } : r);
      }
      return [...prev, { questionId, value }];
    });
  };

  const goToNextSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  const goToPreviousSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1].id);
    }
  };

  const goToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'intro':
        return <Introduction onStart={goToNextSection} />;
      case 'psychometric':
        return (
          <PsychologicalFit
            responses={responses}
            onUpdateResponse={handleUpdateResponse}
            onNext={goToNextSection}
            onPrevious={goToPreviousSection}
          />
        );
      case 'technical':
        return (
          <TechnicalAptitude
            responses={responses}
            onUpdateResponse={handleUpdateResponse}
            onNext={goToNextSection}
            onPrevious={goToPreviousSection}
          />
        );
      case 'wiscar':
        return (
          <WISCARAnalysis
            responses={responses}
            onUpdateResponse={handleUpdateResponse}
            onNext={() => {
              const calculatedResult = calculateResults(responses);
              setResult(calculatedResult);
              goToNextSection();
            }}
            onPrevious={goToPreviousSection}
          />
        );
      case 'results':
        return result ? (
          <Results result={result} onRestart={() => {
            setCurrentSection('intro');
            setResponses([]);
            setResult(null);
          }} />
        ) : (
          <div>Loading results...</div>
        );
      default:
        return <Introduction onStart={goToNextSection} />;
    }
  };

  return (
    <AssessmentLayout>
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Should I Learn Generative AI?
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
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg min-w-fit cursor-pointer ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                      : isCompleted
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                  onClick={() => goToSection(section.id)}
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
