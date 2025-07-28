import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Code, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

interface TechnicalAptitudeProps {
  onComplete: (data: any) => void;
}

export const TechnicalAptitude = ({ onComplete }: TechnicalAptitudeProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      category: 'Logical Reasoning',
      question: 'If Sales = 100 and Growth Rate = 15%, what would be the projected sales for next year?',
      options: [
        { value: 'A', label: '115' },
        { value: 'B', label: '85' },
        { value: 'C', label: '150' },
        { value: 'D', label: '100.15' }
      ],
      correct: 'A',
      explanation: '100 × 1.15 = 115. The growth rate of 15% means multiplying by 1.15.'
    },
    {
      category: 'Logical Reasoning',
      question: 'In a dashboard, if you want to show data for "Current Month" vs "Previous Month", which filter logic makes most sense?',
      options: [
        { value: 'A', label: 'Date >= TODAY() AND Date < LAST_MONTH()' },
        { value: 'B', label: 'Date = MONTH(TODAY()) OR Date = MONTH(TODAY())-1' },
        { value: 'C', label: 'Date >= STARTOFMONTH(TODAY()) OR Date >= STARTOFMONTH(DATEADD(MONTH,-1,TODAY()))' },
        { value: 'D', label: 'Date BETWEEN CURRENT_MONTH AND PREVIOUS_MONTH' }
      ],
      correct: 'C',
      explanation: 'This logic correctly captures the full current month and previous month periods for comparison.'
    },
    {
      category: 'Numerical Aptitude',
      question: 'A company\'s revenue increased from $500K to $650K. What is the percentage increase?',
      options: [
        { value: 'A', label: '30%' },
        { value: 'B', label: '25%' },
        { value: 'C', label: '20%' },
        { value: 'D', label: '35%' }
      ],
      correct: 'A',
      explanation: '($650K - $500K) / $500K × 100 = 30% increase'
    },
    {
      category: 'Numerical Aptitude',
      question: 'If you have 1000 customers and want to show the top 10% in a chart, how many customers would that be?',
      options: [
        { value: 'A', label: '10' },
        { value: 'B', label: '100' },
        { value: 'C', label: '50' },
        { value: 'D', label: '90' }
      ],
      correct: 'B',
      explanation: '10% of 1000 = 100 customers'
    },
    {
      category: 'Data Literacy',
      question: 'Which chart type is BEST for showing how a value changes over time?',
      options: [
        { value: 'A', label: 'Pie Chart' },
        { value: 'B', label: 'Bar Chart' },
        { value: 'C', label: 'Line Chart' },
        { value: 'D', label: 'Scatter Plot' }
      ],
      correct: 'C',
      explanation: 'Line charts are ideal for showing trends and changes over time.'
    },
    {
      category: 'Data Literacy',
      question: 'In a dataset with columns: CustomerID, OrderDate, Product, Quantity, Revenue - which would be the best "primary key"?',
      options: [
        { value: 'A', label: 'Product' },
        { value: 'B', label: 'OrderDate' },
        { value: 'C', label: 'CustomerID + OrderDate + Product' },
        { value: 'D', label: 'Revenue' }
      ],
      correct: 'C',
      explanation: 'A combination of CustomerID, OrderDate, and Product would uniquely identify each order record.'
    },
    {
      category: 'BI Tool Concepts',
      question: 'What is a "slicer" in Power BI/Tableau used for?',
      options: [
        { value: 'A', label: 'To cut data into smaller files' },
        { value: 'B', label: 'To filter data interactively in dashboards' },
        { value: 'C', label: 'To sort data alphabetically' },
        { value: 'D', label: 'To export data to Excel' }
      ],
      correct: 'B',
      explanation: 'Slicers are interactive filters that allow users to filter dashboard data dynamically.'
    },
    {
      category: 'BI Tool Concepts',
      question: 'What is the main purpose of a "calculated field" in BI tools?',
      options: [
        { value: 'A', label: 'To store backup data' },
        { value: 'B', label: 'To create new metrics from existing data' },
        { value: 'C', label: 'To delete unwanted columns' },
        { value: 'D', label: 'To change chart colors' }
      ],
      correct: 'B',
      explanation: 'Calculated fields allow you to create new metrics, ratios, or derived values from existing data.'
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
    const categories = ['Logical Reasoning', 'Numerical Aptitude', 'Data Literacy', 'BI Tool Concepts'];
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