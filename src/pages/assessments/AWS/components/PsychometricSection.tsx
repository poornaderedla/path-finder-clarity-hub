import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Brain, ArrowRight } from 'lucide-react';

interface PsychometricSectionProps {
  onComplete: (data: any) => void;
}

const PsychometricSection = ({ onComplete }: PsychometricSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      category: 'Personality & Motivation',
      question: 'I find it exciting to build scalable backend systems and infrastructure.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
      ]
    },
    {
      category: 'Cognitive Style',
      question: 'I enjoy structured, analytical work over unstructured brainstorming.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
      ]
    },
    {
      category: 'Problem Solving',
      question: 'I prefer problems with logical steps and clear answers.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
      ]
    },
    {
      category: 'Motivation',
      question: 'I can stay motivated even when learning gets challenging.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
      ]
    },
    {
      category: 'Process Optimization',
      question: 'I enjoy automating repetitive tasks and optimizing processes.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
      ]
    },
    {
      category: 'Problem Solving',
      question: 'How do you typically approach complex technical problems?',
      options: [
        { value: '4', label: 'Break them down into smaller, manageable parts' },
        { value: '3', label: 'Look for similar problems others have solved' },
        { value: '2', label: 'Experiment with different approaches until something works' },
        { value: '1', label: 'Seek help from colleagues or online communities' }
      ]
    },
    {
      category: 'Adaptability',
      question: 'I thrive in environments with constant technological change.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
      ]
    },
    {
      category: 'Attention to Detail',
      question: 'I pay close attention to details and thoroughly test my work.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
      ]
    },
    {
      category: 'Work Environment',
      question: 'Which work environment energizes you most?',
      options: [
        { value: '4', label: 'Collaborative team projects with regular communication' },
        { value: '3', label: 'Independent work with occasional team check-ins' },
        { value: '4', label: 'Mix of both collaborative and independent work' },
        { value: '2', label: 'Fast-paced environment with tight deadlines' }
      ]
    },
    {
      category: 'Learning Orientation',
      question: 'I enjoy learning new technologies and staying updated with industry trends.',
      options: [
        { value: '5', label: 'Strongly Agree' },
        { value: '4', label: 'Agree' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Disagree' },
        { value: '1', label: 'Strongly Disagree' }
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
    const categories = ['Personality & Motivation', 'Cognitive Style', 'Problem Solving', 'Motivation', 'Process Optimization', 'Adaptability', 'Attention to Detail', 'Work Environment', 'Learning Orientation'];
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
      <Card className="border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-purple-600" />
            <span>Psychological Fit Assessment</span>
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
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-purple-700 mb-2">
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
              className="bg-purple-600 hover:bg-purple-700"
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

export default PsychometricSection; 