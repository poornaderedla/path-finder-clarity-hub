import MultiCloudAssessment from '../components/MultiCloudAssessment';
import AssessmentLayout from '../../../../components/AssessmentLayout';

const Index = () => {
  return (
    <AssessmentLayout>
      <div className="flex-1">
        <MultiCloudAssessment />
      </div>
    </AssessmentLayout>
  );
};

export default Index;
