import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Code, ArrowRight } from 'lucide-react';

interface TechnicalSectionProps {
  onComplete: (data: any) => void;
}

const TechnicalSection = ({ onComplete }: TechnicalSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      category: 'AWS Fundamentals',
      question: 'What does EC2 stand for in AWS?',
      options: [
        { value: '4', label: 'Elastic Compute Cloud' },
        { value: '1', label: 'Enhanced Computing Center' },
        { value: '2', label: 'Enterprise Cloud Computing' },
        { value: '1', label: 'Extended Capacity Control' }
      ]
    },
    {
      category: 'AWS Services',
      question: 'Which AWS service is primarily used for object storage?',
      options: [
        { value: '1', label: 'EBS (Elastic Block Store)' },
        { value: '4', label: 'S3 (Simple Storage Service)' },
        { value: '2', label: 'EFS (Elastic File System)' },
        { value: '2', label: 'RDS (Relational Database Service)' }
      ]
    },
    {
      category: 'Technical Skills',
      question: 'Rate your comfort level with command line interfaces (CLI):',
      options: [
        { value: '1', label: 'Complete Beginner' },
        { value: '2', label: 'Some Experience' },
        { value: '3', label: 'Comfortable' },
        { value: '4', label: 'Very Comfortable' },
        { value: '5', label: 'Expert Level' }
      ]
    },
    {
      category: 'AWS Security',
      question: 'What is the primary purpose of IAM in AWS?',
      options: [
        { value: '4', label: 'Identity and Access Management' },
        { value: '1', label: 'Infrastructure Automation Management' },
        { value: '1', label: 'Internet Application Monitoring' },
        { value: '2', label: 'Integrated Analytics Management' }
      ]
    },
    {
      category: 'Programming Skills',
      question: 'Rate your experience with scripting languages (Python, Bash, etc.):',
      options: [
        { value: '1', label: 'No Experience' },
        { value: '2', label: 'Basic Knowledge' },
        { value: '3', label: 'Intermediate' },
        { value: '4', label: 'Advanced' },
        { value: '5', label: 'Expert Level' }
      ]
    },
    {
      category: 'Networking',
      question: 'Which networking concept is most important for AWS VPC?',
      options: [
        { value: '4', label: 'Subnets and routing tables' },
        { value: '2', label: 'DNS resolution only' },
        { value: '1', label: 'Physical network cables' },
        { value: '1', label: 'Bluetooth connections' }
      ]
    },
    {
      category: 'Networking Fundamentals',
      question: 'Rate your understanding of basic networking concepts (TCP/IP, DNS, etc.):',
      options: [
        { value: '1', label: 'No Understanding' },
        { value: '2', label: 'Basic Understanding' },
        { value: '3', label: 'Good Understanding' },
        { value: '4', label: 'Strong Understanding' },
        { value: '5', label: 'Expert Level' }
      ]
    },
    {
      category: 'Serverless Computing',
      question: 'What is the main benefit of AWS Lambda?',
      options: [
        { value: '4', label: 'Serverless code execution' },
        { value: '1', label: 'Physical server management' },
        { value: '2', label: 'Database administration' },
        { value: '1', label: 'Network routing' }
      ]
    },
    {
      category: 'Cost Management',
      question: 'If an AWS service costs $0.10 per hour and runs 24/7 for a month (30 days), what\'s the monthly cost?',
      options: [
        { value: '4', label: '$72' },
        { value: '1', label: '$30' },
        { value: '1', label: '$24' },
        { value: '1', label: '$240' }
      ]
    },
    {
      category: 'Version Control',
      question: 'Rate your experience with version control systems (Git, etc.):',
      options: [
        { value: '1', label: 'No Experience' },
        { value: '2', label: 'Basic User' },
        { value: '3', label: 'Intermediate User' },
        { value: '4', label: 'Advanced User' },
        { value: '5', label: 'Expert Level' }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate scores and complete
      const categoryScores = calculateScores();
      onComplete(categoryScores);
    }
  };

  const calculateScores = () => {
    const categories = ['AWS Fundamentals', 'AWS Services', 'Technical Skills', 'AWS Security', 'Programming Skills', 'Networking', 'Networking Fundamentals', 'Serverless Computing', 'Cost Management', 'Version Control'];
    const scores: Record<string, number> = {};

    categories.forEach(category => {
      const categoryQuestions = questions
        .map((q, index) => ({ ...q, index }))
        .filter(q => q.category === category);
      
      const categoryTotal = categoryQuestions.reduce((sum, q) => {
        return sum + parseInt(answers[q.index] || '3');
      }, 0);
      
      const maxPossible = categoryQuestions.length * 5;
      scores[category] = Math.round((categoryTotal / maxPossible) * 100);
    });

    const overallScore = Math.round(
      Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.keys(scores).length
    );

    return {
      categories: scores,
      overall: overallScore,
      answers
    };
  };

  const canProceed = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-green-600" />
            <span>Technical Aptitude Assessment</span>
          </CardTitle>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-green-700 mb-2">
              {questions[currentQuestion].category}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {questions[currentQuestion].question}
            </h3>
            
            <RadioGroup
              value={answers[currentQuestion] || ''}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-sm cursor-pointer flex-1 py-2 px-3 rounded hover:bg-white/50 transition-colors"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Evaluating: {questions[currentQuestion].category}
            </div>
            <Button 
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-green-600 hover:bg-green-700"
            >
              {isLastQuestion ? 'Complete Section' : 'Next Question'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSection; 