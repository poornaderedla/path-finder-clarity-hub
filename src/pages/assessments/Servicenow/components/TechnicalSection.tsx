
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
      question: 'What comes next in this sequence: 2, 6, 18, 54, ?',
      options: [
        { value: 'A', label: '108' },
        { value: 'B', label: '162' },
        { value: 'C', label: '216' },
        { value: 'D', label: '150' }
      ],
      correct: 'B',
      explanation: 'Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162'
    },
    {
      category: 'Logical Reasoning',
      question: 'If all ServiceNow instances are cloud-based, and some cloud-based systems require maintenance, which statement must be true?',
      options: [
        { value: 'A', label: 'All ServiceNow instances require maintenance' },
        { value: 'B', label: 'Some ServiceNow instances may require maintenance' },
        { value: 'C', label: 'No ServiceNow instances require maintenance' },
        { value: 'D', label: 'Only cloud-based systems require maintenance' }
      ],
      correct: 'B',
      explanation: 'Since ServiceNow instances are cloud-based and some cloud systems need maintenance, some ServiceNow instances may need maintenance.'
    },
    {
      category: 'Numerical Ability',
      question: 'A ServiceNow instance processes 1,200 tickets per day. If 15% are high priority, how many high priority tickets are processed daily?',
      options: [
        { value: 'A', label: '150' },
        { value: 'B', label: '180' },
        { value: 'C', label: '200' },
        { value: 'D', label: '240' }
      ],
      correct: 'B',
      explanation: '1,200 × 0.15 = 180 high priority tickets per day'
    },
    {
      category: 'Basic IT Knowledge',
      question: 'What is the primary purpose of a database in an IT system?',
      options: [
        { value: 'A', label: 'To store and organize data' },
        { value: 'B', label: 'To create user interfaces' },
        { value: 'C', label: 'To manage network connections' },
        { value: 'D', label: 'To process graphics' }
      ],
      correct: 'A',
      explanation: 'Databases are designed to store, organize, and retrieve data efficiently.'
    },
    {
      category: 'Basic IT Knowledge',
      question: 'In cloud computing, what does "SaaS" stand for?',
      options: [
        { value: 'A', label: 'Software as a System' },
        { value: 'B', label: 'Service as a Solution' },
        { value: 'C', label: 'Software as a Service' },
        { value: 'D', label: 'System as a Service' }
      ],
      correct: 'C',
      explanation: 'SaaS (Software as a Service) is a cloud computing model where software is provided over the internet.'
    },
    {
      category: 'Scripting Foundations',
      question: 'In JavaScript, what will this code output: console.log(5 + "3")?',
      options: [
        { value: 'A', label: '8' },
        { value: 'B', label: '53' },
        { value: 'C', label: 'Error' },
        { value: 'D', label: 'undefined' }
      ],
      correct: 'B',
      explanation: 'JavaScript concatenates the number 5 with string "3", resulting in "53"'
    },
    {
      category: 'Domain Awareness',
      question: 'What does ITIL stand for in IT service management?',
      options: [
        { value: 'A', label: 'Information Technology Infrastructure Library' },
        { value: 'B', label: 'Internet Technology Integration Logic' },
        { value: 'C', label: 'Internal Technical Information Library' },
        { value: 'D', label: 'Integrated Technology Implementation Logic' }
      ],
      correct: 'A',
      explanation: 'ITIL (Information Technology Infrastructure Library) is a framework for IT service management best practices.'
    },
    {
      category: 'Problem-Solving',
      question: 'A company wants to automate their employee onboarding process. What would be the FIRST step?',
      options: [
        { value: 'A', label: 'Start coding the solution immediately' },
        { value: 'B', label: 'Map out the current manual process' },
        { value: 'C', label: 'Buy new software' },
        { value: 'D', label: 'Train all employees' }
      ],
      correct: 'B',
      explanation: 'Understanding the current process is essential before automation. You need to map existing workflows first.'
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
