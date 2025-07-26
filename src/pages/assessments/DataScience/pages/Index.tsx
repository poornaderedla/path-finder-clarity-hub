import { useState } from 'react';
import { Assessment } from '../components/Assessment';
import { dataScienceAssessment } from '../data/dataScienceAssessment';
import AssessmentResults from '../components/AssessmentResults';
import AssessmentLayout from '../../../../components/AssessmentLayout';

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<any>(null);

  // Handler to show results (to be passed to Assessment)
  const handleShowResults = (result: any) => {
    setAssessmentResult(result);
    setShowResults(true);
  };

  // Handler to restart assessment
  const handleRestart = () => {
    setAssessmentResult(null);
    setShowResults(false);
  };

  return (
    <AssessmentLayout>
      <div className="flex-1">
        {showResults && assessmentResult ? (
          <AssessmentResults result={assessmentResult} onRestart={handleRestart} />
        ) : (
          <Assessment 
            assessment={dataScienceAssessment}
            onBack={handleRestart}
            onComplete={handleShowResults}
          />
        )}
      </div>
    </AssessmentLayout>
  );
};

export default Index;
