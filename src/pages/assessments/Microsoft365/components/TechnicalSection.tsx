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
      category: 'Programming Fundamentals',
      question: 'What is the primary purpose of a variable in programming?',
      options: [
        { value: 'A', label: 'To store and manipulate data' },
        { value: 'B', label: 'To create visual effects' },
        { value: 'C', label: 'To connect to databases' },
        { value: 'D', label: 'To design user interfaces' }
      ],
      correct: 'A',
      explanation: 'Variables are used to store and manipulate data in programs. They act as containers for values that can change during program execution.'
    },
    {
      category: 'Database Concepts',
      question: 'What does SQL stand for?',
      options: [
        { value: 'A', label: 'Structured Query Language' },
        { value: 'B', label: 'Simple Query Logic' },
        { value: 'C', label: 'System Query Language' },
        { value: 'D', label: 'Standard Query Logic' }
      ],
      correct: 'A',
      explanation: 'SQL stands for Structured Query Language, which is used to manage and manipulate relational databases.'
    },
    {
      category: 'Web Technologies',
      question: 'What is the purpose of HTML in web development?',
      options: [
        { value: 'A', label: 'To style web pages' },
        { value: 'B', label: 'To structure web content' },
        { value: 'C', label: 'To add interactivity' },
        { value: 'D', label: 'To connect to servers' }
      ],
      correct: 'B',
      explanation: 'HTML (HyperText Markup Language) is used to structure and organize web content, providing the foundation for web pages.'
    },
    {
      category: 'Cloud Computing',
      question: 'What is the main benefit of cloud computing?',
      options: [
        { value: 'A', label: 'Lower initial costs and scalability' },
        { value: 'B', label: 'Faster internet speeds' },
        { value: 'C', label: 'Better security' },
        { value: 'D', label: 'Simpler programming' }
      ],
      correct: 'A',
      explanation: 'Cloud computing provides lower initial costs and scalability, allowing businesses to pay for resources as needed.'
    },
    {
      category: 'Business Processes',
      question: 'What is a workflow in business context?',
      options: [
        { value: 'A', label: 'A series of connected tasks that achieve a goal' },
        { value: 'B', label: 'A type of software' },
        { value: 'C', label: 'A business meeting' },
        { value: 'D', label: 'A financial report' }
      ],
      correct: 'A',
      explanation: 'A workflow is a series of connected tasks that work together to achieve a specific business goal or outcome.'
    },
    {
      category: 'System Integration',
      question: 'What is an API in software development?',
      options: [
        { value: 'A', label: 'Application Programming Interface' },
        { value: 'B', label: 'Advanced Programming Instruction' },
        { value: 'C', label: 'Automated Process Integration' },
        { value: 'D', label: 'Application Process Interface' }
      ],
      correct: 'A',
      explanation: 'API stands for Application Programming Interface, which allows different software applications to communicate with each other.'
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      onComplete(calculateScores());
    }
  };

  const calculateScores = () => {
    const categories = ['Programming Fundamentals', 'Database Concepts', 'Web Technologies', 'Cloud Computing', 'Business Processes', 'System Integration'];
    const scores: Record<string, number> = {};

    categories.forEach(category => {
      const categoryQuestions = questions
        .map((q, index) => ({ ...q, index }))
        .filter(q => q.category === category);
      
      const correctAnswers = categoryQuestions.filter(q => 
        answers[q.index] === q.correct
      ).length;
      
      const categoryScore = categoryQuestions.length > 0 
        ? Math.round((correctAnswers / categoryQuestions.length) * 100)
        : 0;
      
      scores[category] = categoryScore;
    });

    const totalCorrect = Object.values(scores).reduce((sum, score) => sum + score, 0);
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
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
                  variant="outline" 
                  onClick={showAnswer}
                  className="text-sm"
                >
                  Check Answer
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