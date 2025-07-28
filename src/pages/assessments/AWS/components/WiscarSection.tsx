import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Target, ArrowRight } from 'lucide-react';

interface WiscarSectionProps {
  onComplete: (data: any) => void;
}

const WiscarSection = ({ onComplete }: WiscarSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      category: 'Will (Motivation)',
      question: 'Would you persist through complex AWS certification preparation even if it takes 3-6 months?',
      options: [
        { value: '1', label: 'Definitely Not' },
        { value: '2', label: 'Probably Not' },
        { value: '3', label: 'Maybe' },
        { value: '4', label: 'Likely' },
        { value: '5', label: 'Absolutely' }
      ]
    },
    {
      category: 'Will (Motivation)',
      question: 'How important is career advancement to you right now?',
      options: [
        { value: '1', label: 'Not Important' },
        { value: '2', label: 'Somewhat Important' },
        { value: '3', label: 'Important' },
        { value: '4', label: 'Very Important' },
        { value: '5', label: 'Extremely Important' }
      ]
    },
    {
      category: 'Interest',
      question: 'Do you regularly read tech blogs, AWS updates, or cloud computing news?',
      options: [
        { value: '1', label: 'Never' },
        { value: '2', label: 'Rarely' },
        { value: '3', label: 'Sometimes' },
        { value: '4', label: 'Often' },
        { value: '5', label: 'Daily' }
      ]
    },
    {
      category: 'Interest',
      question: 'How excited are you about cloud technology trends?',
      options: [
        { value: '1', label: 'Not Excited' },
        { value: '2', label: 'Somewhat Excited' },
        { value: '3', label: 'Neutral' },
        { value: '4', label: 'Excited' },
        { value: '5', label: 'Very Excited' }
      ]
    },
    {
      category: 'Skill',
      question: 'Have you worked with cloud platforms before?',
      options: [
        { value: '4', label: 'Yes, extensively with AWS or similar platforms' },
        { value: '3', label: 'Some experience with cloud services' },
        { value: '2', label: 'Basic experience with cloud concepts' },
        { value: '1', label: 'No cloud experience' }
      ]
    },
    {
      category: 'Skill',
      question: 'Rate your overall technical skill level:',
      options: [
        { value: '1', label: 'Beginner' },
        { value: '2', label: 'Intermediate' },
        { value: '3', label: 'Advanced' },
        { value: '4', label: 'Expert' },
        { value: '5', label: 'Master' }
      ]
    },
    {
      category: 'Cognitive Readiness',
      question: 'When faced with a system outage, what\'s your first approach?',
      options: [
        { value: '4', label: 'Check logs and monitoring dashboards systematically' },
        { value: '3', label: 'Try the most common fixes first' },
        { value: '2', label: 'Ask for help immediately' },
        { value: '1', label: 'Restart everything and hope for the best' }
      ]
    },
    {
      category: 'Cognitive Readiness',
      question: 'How do you handle learning complex technical concepts?',
      options: [
        { value: '4', label: 'Break it down into smaller parts and practice hands-on' },
        { value: '3', label: 'Read documentation thoroughly before trying' },
        { value: '2', label: 'Learn by following tutorials step-by-step' },
        { value: '1', label: 'Ask others to explain it to me' }
      ]
    },
    {
      category: 'Ability to Learn',
      question: 'Do you actively seek feedback on your technical work?',
      options: [
        { value: '1', label: 'Never' },
        { value: '2', label: 'Rarely' },
        { value: '3', label: 'Sometimes' },
        { value: '4', label: 'Often' },
        { value: '5', label: 'Always' }
      ]
    },
    {
      category: 'Ability to Learn',
      question: 'How do you react when you make technical mistakes?',
      options: [
        { value: '4', label: 'Analyze what went wrong and learn from it' },
        { value: '3', label: 'Feel frustrated but try to fix it' },
        { value: '2', label: 'Ask someone else to help fix it' },
        { value: '1', label: 'Avoid similar tasks in the future' }
      ]
    },
    {
      category: 'Real-world Alignment',
      question: 'Do you enjoy designing scalable infrastructure systems?',
      options: [
        { value: '1', label: 'Not At All' },
        { value: '2', label: 'Somewhat' },
        { value: '3', label: 'Neutral' },
        { value: '4', label: 'Enjoy It' },
        { value: '5', label: 'Love It' }
      ]
    },
    {
      category: 'Real-world Alignment',
      question: 'Which aspect of AWS work appeals to you most?',
      options: [
        { value: '4', label: 'Building and architecting cloud solutions' },
        { value: '3', label: 'Automating deployment and operations' },
        { value: '3', label: 'Securing cloud environments' },
        { value: '2', label: 'Analyzing costs and optimizing resources' }
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
    const categories = ['Will (Motivation)', 'Interest', 'Skill', 'Cognitive Readiness', 'Ability to Learn', 'Real-world Alignment'];
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

    // Calculate WISCAR individual scores
    const w = scores['Will (Motivation)'] || 60;
    const i = scores['Interest'] || 60;
    const s = scores['Skill'] || 60;
    const c = scores['Cognitive Readiness'] || 60;
    const a = scores['Ability to Learn'] || 60;
    const r = scores['Real-world Alignment'] || 60;

    const overallScore = Math.round((w + i + s + c + a + r) / 6);

    return {
      categories: scores,
      wiscar: { w, i, s, c, a, r },
      overall: overallScore,
      answers
    };
  };

  const canProceed = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-6 h-6 text-orange-600" />
            <span>WISCAR Analysis Assessment</span>
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

export default WiscarSection; 