import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Code, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

interface TechnicalSectionProps {
  onComplete: (data: any) => void;
}

const TechnicalSection = ({ onComplete }: TechnicalSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      category: 'Logical Reasoning',
      question: 'What comes next in this sequence: 2, 4, 8, 16, ?',
      options: [
        { value: 'A', label: '24' },
        { value: 'B', label: '32' },
        { value: 'C', label: '30' },
        { value: 'D', label: '28' }
      ],
      correct: 'B',
      explanation: 'Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32'
    },
    {
      category: 'Logical Reasoning',
      question: 'If all cloud services are scalable, and some scalable systems require load balancing, which statement must be true?',
      options: [
        { value: 'A', label: 'All cloud services require load balancing' },
        { value: 'B', label: 'Some cloud services may require load balancing' },
        { value: 'C', label: 'No cloud services require load balancing' },
        { value: 'D', label: 'Only scalable systems require load balancing' }
      ],
      correct: 'B',
      explanation: 'Since cloud services are scalable and some scalable systems need load balancing, some cloud services may need load balancing.'
    },
    {
      category: 'Numerical Ability',
      question: 'A cloud application processes 2,400 requests per hour. If 20% are API calls, how many API calls are processed per hour?',
      options: [
        { value: 'A', label: '360' },
        { value: 'B', label: '480' },
        { value: 'C', label: '520' },
        { value: 'D', label: '600' }
      ],
      correct: 'B',
      explanation: '2,400 × 0.20 = 480 API calls per hour'
    },
    {
      category: 'Basic IT Knowledge',
      question: 'What is the primary purpose of a virtual machine in cloud computing?',
      options: [
        { value: 'A', label: 'To create physical hardware' },
        { value: 'B', label: 'To run multiple operating systems on one physical machine' },
        { value: 'C', label: 'To manage network connections' },
        { value: 'D', label: 'To process graphics' }
      ],
      correct: 'B',
      explanation: 'Virtual machines allow multiple operating systems to run on a single physical machine, enabling efficient resource utilization.'
    },
    {
      category: 'Basic IT Knowledge',
      question: 'In cloud computing, what does "IaaS" stand for?',
      options: [
        { value: 'A', label: 'Infrastructure as a Service' },
        { value: 'B', label: 'Internet as a Solution' },
        { value: 'C', label: 'Integration as a Service' },
        { value: 'D', label: 'Information as a System' }
      ],
      correct: 'A',
      explanation: 'IaaS (Infrastructure as a Service) provides virtualized computing resources over the internet.'
    },
    {
      category: 'Scripting Foundations',
      question: 'In Python, what will this code output: print(3 * "cloud")?',
      options: [
        { value: 'A', label: 'cloudcloudcloud' },
        { value: 'B', label: '9' },
        { value: 'C', label: 'Error' },
        { value: 'D', label: 'cloud3' }
      ],
      correct: 'A',
      explanation: 'Python repeats the string "cloud" three times, resulting in "cloudcloudcloud"'
    },
    {
      category: 'Domain Awareness',
      question: 'What does API stand for in cloud computing?',
      options: [
        { value: 'A', label: 'Application Programming Interface' },
        { value: 'B', label: 'Advanced Programming Integration' },
        { value: 'C', label: 'Automated Process Interface' },
        { value: 'D', label: 'Application Process Integration' }
      ],
      correct: 'A',
      explanation: 'API (Application Programming Interface) allows different software applications to communicate with each other.'
    },
    {
      category: 'Problem-Solving',
      question: 'A company wants to migrate their on-premises database to the cloud. What would be the FIRST step?',
      options: [
        { value: 'A', label: 'Start the migration immediately' },
        { value: 'B', label: 'Assess the current database structure and requirements' },
        { value: 'C', label: 'Buy cloud storage' },
        { value: 'D', label: 'Train all employees' }
      ],
      correct: 'B',
      explanation: 'Understanding the current database structure and requirements is essential before planning a cloud migration.'
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowExplanation(false);
    } else {
      const scores = calculateScores();
      onComplete(scores);
    }
  };

  const calculateScores = () => {
    const categories = ['Logical Reasoning', 'Numerical Ability', 'Basic IT Knowledge', 'Scripting Foundations', 'Domain Awareness', 'Problem-Solving'];
    const scores: Record<string, number> = {};
    let totalCorrect = 0;

    categories.forEach(category => {
      const categoryQuestions = questions
        .map((q, index) => ({ ...q, index }))
        .filter(q => q.category === category);
      
      const correctAnswers = categoryQuestions.filter(q => answers[q.index] === q.correct).length;
      const categoryScore = Math.round((correctAnswers / categoryQuestions.length) * 100);
      scores[category] = categoryScore;
      totalCorrect += correctAnswers;
    });

    const overallScore = Math.round((totalCorrect / questions.length) * 100);

    return {
      categories: scores,
      overall: overallScore,
      correctAnswers: totalCorrect,
      totalQuestions: questions.length,
      answers
    };
  };

  const showAnswer = () => {
    setShowExplanation(true);
  };

  const currentAnswer = answers[currentQuestion];
  const isCorrect = currentAnswer === questions[currentQuestion].correct;
  const canProceed = currentAnswer !== undefined;
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
              value={currentAnswer || ''}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className={`text-sm cursor-pointer flex-1 py-2 px-3 rounded transition-colors ${
                      showExplanation && option.value === questions[currentQuestion].correct
                        ? 'bg-green-200 border-green-400 border'
                        : showExplanation && currentAnswer === option.value && !isCorrect
                        ? 'bg-red-200 border-red-400 border'
                        : 'hover:bg-white/50'
                    }`}
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {showExplanation && (
              <div className={`mt-4 p-3 rounded-lg ${isCorrect ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
                <div className="flex items-start space-x-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  )}
                  <div>
                    <div className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </div>
                    <div className="text-sm text-gray-700 mt-1">
                      {questions[currentQuestion].explanation}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Category: {questions[currentQuestion].category}
            </div>
            <div className="space-x-3">
              {canProceed && !showExplanation && (
                <Button 
                  onClick={showAnswer}
                  variant="outline"
                  className="text-gray-600"
                >
                  Show Answer
                </Button>
              )}
              <Button 
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-green-600 hover:bg-green-700"
              >
                {isLastQuestion ? 'Complete Section' : 'Next Question'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSection; 