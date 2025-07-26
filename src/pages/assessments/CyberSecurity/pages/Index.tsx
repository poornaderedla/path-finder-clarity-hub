
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Shield, Brain, Code, TrendingUp, CheckCircle } from "lucide-react";
import AssessmentIntro from "../components/AssessmentIntro";
import PsychometricSection, { PsychometricScores } from "../components/PsychometricSection";
import TechnicalSection, { TechnicalScores } from "../components/TechnicalSection";
import ResultsSection from "../components/ResultsSection";
import AssessmentLayout from "../../../../components/AssessmentLayout";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('intro');
  const [assessmentData, setAssessmentData] = useState<{
    psychometric: PsychometricScores | null;
    technical: TechnicalScores | null;
    completed: boolean;
  }>({
    psychometric: null,
    technical: null,
    completed: false
  });

  const sections = [
    { id: 'intro', title: 'Introduction', icon: Shield, color: 'bg-blue-500' },
    { id: 'psychometric', title: 'Psychological Fit', icon: Brain, color: 'bg-purple-500' },
    { id: 'technical', title: 'Technical Aptitude', icon: Code, color: 'bg-green-500' },
    { id: 'results', title: 'Your Results', icon: TrendingUp, color: 'bg-red-500' }
  ];

  const getCurrentSectionIndex = () => {
    return sections.findIndex(section => section.id === currentSection);
  };

  const progress = ((getCurrentSectionIndex() + 1) / sections.length) * 100;

  const updateAssessmentData = (section, data) => {
    setAssessmentData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const goToNextSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'intro':
        return <AssessmentIntro onStartAssessment={goToNextSection} />;
      case 'psychometric':
        return (
          <PsychometricSection
            onComplete={(data) => {
              updateAssessmentData('psychometric', data);
              goToNextSection();
            }}
            onBack={() => setCurrentSection('intro')}
          />
        );
      case 'technical':
        return (
          <TechnicalSection
            onComplete={(data) => {
              updateAssessmentData('technical', data);
              goToNextSection();
            }}
            onBack={() => setCurrentSection('psychometric')}
          />
        );
      case 'results':
        return assessmentData.psychometric && assessmentData.technical ? (
          <ResultsSection
            psychometricScores={assessmentData.psychometric}
            technicalScores={assessmentData.technical}
            onRestart={() => {
              setCurrentSection('intro');
              setAssessmentData({ psychometric: null, technical: null, completed: false });
            }}
          />
        ) : (
          <div>Loading results...</div>
        );
      default:
        return <AssessmentIntro onStartAssessment={goToNextSection} />;
    }
  };

  return (
    <AssessmentLayout>
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Should You Learn Cyber Security?
              </h1>
              <p className="text-gray-600 text-sm">
                Full Capability Assessment & Guidance
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
