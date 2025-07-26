import { Badge } from '@/components/ui/badge';
import { BookOpen, Brain, Code, Target, BarChart } from 'lucide-react';

interface ProgressStep {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
  current: boolean;
}

interface AssessmentProgressProps {
  currentSection: string;
  progress: number;
}

export const AssessmentProgress = ({ currentSection, progress }: AssessmentProgressProps) => {
  const steps: ProgressStep[] = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: BookOpen,
      completed: currentSection !== 'introduction',
      current: currentSection === 'introduction'
    },
    {
      id: 'psychological-fit',
      title: 'Psychological Fit',
      icon: Brain,
      completed: ['technical-aptitude', 'wiscar-analysis', 'results'].includes(currentSection),
      current: currentSection === 'psychological-fit'
    },
    {
      id: 'technical-aptitude',
      title: 'Technical Aptitude',
      icon: Code,
      completed: ['wiscar-analysis', 'results'].includes(currentSection),
      current: currentSection === 'technical-aptitude'
    },
    {
      id: 'wiscar-analysis',
      title: 'WISCAR Analysis',
      icon: Target,
      completed: currentSection === 'results',
      current: currentSection === 'wiscar-analysis'
    },
    {
      id: 'results',
      title: 'Your Results',
      icon: BarChart,
      completed: false,
      current: currentSection === 'results'
    }
  ];

  return (
    <div className="w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Should I Learn Data Science?
          </h2>
          <Badge variant="outline" className="text-sm">
            {Math.round(progress)}% Complete
          </Badge>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Step Indicators */}
        <div className="flex mt-4 space-x-4 overflow-x-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.current;
            const isCompleted = step.completed;
            return (
              <div
                key={step.id}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg min-w-fit ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : isCompleted
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <span className="w-4 h-4 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                ) : (
                  <Icon className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};