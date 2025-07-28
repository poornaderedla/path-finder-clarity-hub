import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Target, ArrowRight } from 'lucide-react';

interface WiscarAnalysisProps {
  onComplete: (data: any) => void;
}

export const WiscarAnalysis = ({ onComplete }: WiscarAnalysisProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      category: 'Will (Perseverance)',
      question: 'When I start learning something new, I stick with it even when it gets difficult',
      options: [
        { value: '5', label: 'Always true' },
        { value: '4', label: 'Usually true' },
        { value: '3', label: 'Sometimes true' },
        { value: '2', label: 'Rarely true' },
        { value: '1', label: 'Never true' }
      ]
    },
    {
      category: 'Will (Perseverance)',
      question: 'I have completed online courses or certifications in the past',
      options: [
        { value: '5', label: 'Multiple certifications' },
        { value: '4', label: 'Several courses' },
        { value: '3', label: 'A few courses' },
        { value: '2', label: 'One or two' },
        { value: '1', label: 'None completed' }
      ]
    },
    {
      category: 'Interest (Long-term)',
      question: 'I actively seek out information about data visualization and business intelligence tools',
      options: [
        { value: '5', label: 'Very frequently' },
        { value: '4', label: 'Often' },
        { value: '3', label: 'Sometimes' },
        { value: '2', label: 'Rarely' },
        { value: '1', label: 'Never' }
      ]
    },
    {
      category: 'Interest (Long-term)',
      question: 'I would enjoy learning about Power BI and Tableau even if it wasn\'t for career reasons',
      options: [
        { value: '5', label: 'Strongly agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly disagree' }
      ]
    },
    {
      category: 'Skill (Current Level)',
      question: 'How would you rate your current technical skills?',
      options: [
        { value: '5', label: 'Advanced (Programming, databases, etc.)' },
        { value: '4', label: 'Intermediate (Some scripting/coding)' },
        { value: '3', label: 'Basic (Computer literate, some tools)' },
        { value: '2', label: 'Beginner (Limited technical experience)' },
        { value: '1', label: 'No technical background' }
      ]
    },
    {
      category: 'Skill (Current Level)',
      question: 'Have you worked with data analysis or visualization tools before?',
      options: [
        { value: '5', label: 'Extensively (Led projects)' },
        { value: '4', label: 'Moderately (Participated in projects)' },
        { value: '3', label: 'Some exposure' },
        { value: '2', label: 'Very limited' },
        { value: '1', label: 'No experience' }
      ]
    },
    {
      category: 'Cognitive Readiness',
      question: 'I can understand complex relationships between different business metrics and KPIs',
      options: [
        { value: '5', label: 'Very easily' },
        { value: '4', label: 'Usually' },
        { value: '3', label: 'Sometimes' },
        { value: '2', label: 'With difficulty' },
        { value: '1', label: 'Very difficult' }
      ]
    },
    {
      category: 'Cognitive Readiness',
      question: 'When faced with a complex problem, I can break it down into smaller parts',
      options: [
        { value: '5', label: 'Always' },
        { value: '4', label: 'Usually' },
        { value: '3', label: 'Sometimes' },
        { value: '2', label: 'Rarely' },
        { value: '1', label: 'Never' }
      ]
    },
    {
      category: 'Ability to Learn',
      question: 'I actively seek feedback to improve my work and skills',
      options: [
        { value: '5', label: 'Always' },
        { value: '4', label: 'Usually' },
        { value: '3', label: 'Sometimes' },
        { value: '2', label: 'Rarely' },
        { value: '1', label: 'Never' }
      ]
    },
    {
      category: 'Ability to Learn',
      question: 'I am comfortable learning new software tools and technologies',
      options: [
        { value: '5', label: 'Very comfortable' },
        { value: '4', label: 'Usually comfortable' },
        { value: '3', label: 'Sometimes comfortable' },
        { value: '2', label: 'Rarely comfortable' },
        { value: '1', label: 'Very uncomfortable' }
      ]
    },
    {
      category: 'Real-World Alignment',
      question: 'I understand that BI work involves both technical skills and business communication',
      options: [
        { value: '5', label: 'Strongly agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly disagree' }
      ]
    },
    {
      category: 'Real-World Alignment',
      question: 'I am interested in roles that bridge technology and business strategy',
      options: [
        { value: '5', label: 'Very interested' },
        { value: '4', label: 'Interested' },
        { value: '3', label: 'Somewhat interested' },
        { value: '2', label: 'Not very interested' },
        { value: '1', label: 'Not interested at all' }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(calculateScores());
    }
  };

  const calculateScores = () => {
    const categories = ['Will (Perseverance)', 'Interest (Long-term)', 'Skill (Current Level)', 'Cognitive Readiness', 'Ability to Learn', 'Real-World Alignment'];
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
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-6 h-6 text-orange-600" />
            <span>WISCAR Analysis</span>
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
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-orange-700 mb-2">
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
              className="bg-orange-600 hover:bg-orange-700"
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