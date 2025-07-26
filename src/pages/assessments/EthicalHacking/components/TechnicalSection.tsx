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
      category: 'Cybersecurity Basics',
      question: 'What does the CIA triad stand for in cybersecurity?',
      options: [
        { value: 'A', label: 'Confidentiality, Integrity, Availability' },
        { value: 'B', label: 'Control, Investigation, Analysis' },
        { value: 'C', label: 'Confidentiality, Investigation, Access' },
        { value: 'D', label: 'Compliance, Integrity, Access' }
      ],
      correct: 'A',
      explanation: 'CIA triad stands for Confidentiality, Integrity, and Availability.'
    },
    {
      category: 'Threats & Attacks',
      question: 'A phishing attack is best described as:',
      options: [
        { value: 'A', label: 'A physical break-in to a server room' },
        { value: 'B', label: 'An attempt to trick users into revealing sensitive information' },
        { value: 'C', label: 'A type of malware that encrypts files' },
        { value: 'D', label: 'A denial-of-service attack' }
      ],
      correct: 'B',
      explanation: 'Phishing is a social engineering attack to trick users into revealing information.'
    },
    {
      category: 'Network Security',
      question: 'Which device is used to filter traffic between networks?',
      options: [
        { value: 'A', label: 'Router' },
        { value: 'B', label: 'Firewall' },
        { value: 'C', label: 'Switch' },
        { value: 'D', label: 'Modem' }
      ],
      correct: 'B',
      explanation: 'A firewall filters traffic between networks.'
    },
    {
      category: 'Cryptography',
      question: 'What is the main purpose of encryption?',
      options: [
        { value: 'A', label: 'To compress data' },
        { value: 'B', label: 'To hide data from unauthorized users' },
        { value: 'C', label: 'To speed up network traffic' },
        { value: 'D', label: 'To create backups' }
      ],
      correct: 'B',
      explanation: 'Encryption hides data from unauthorized users.'
    },
    {
      category: 'Incident Response',
      question: 'What is the FIRST step in responding to a security incident?',
      options: [
        { value: 'A', label: 'Eradication' },
        { value: 'B', label: 'Containment' },
        { value: 'C', label: 'Identification' },
        { value: 'D', label: 'Recovery' }
      ],
      correct: 'C',
      explanation: 'The first step is to identify the incident.'
    },
    {
      category: 'Vulnerabilities',
      question: 'A zero-day vulnerability is:',
      options: [
        { value: 'A', label: 'A vulnerability that is well-known and patched' },
        { value: 'B', label: 'A vulnerability that is unknown to the vendor' },
        { value: 'C', label: 'A type of malware' },
        { value: 'D', label: 'A backup failure' }
      ],
      correct: 'B',
      explanation: 'A zero-day is a vulnerability unknown to the vendor.'
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
    const categories = Array.from(new Set(questions.map(q => q.category)));
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