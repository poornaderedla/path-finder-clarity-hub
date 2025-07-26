
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
      category: "Logical Reasoning",
      question: "A team has 5 user stories in their sprint backlog. Story A depends on Story B being completed first. Story C can be done in parallel with A and B. Stories D and E are independent. What's the optimal sequence to minimize dependencies?",
      options: [
        { value: 'A', label: "B → A → C → D → E" },
        { value: 'B', label: "B → (A, C) parallel → (D, E) parallel" },
        { value: 'C', label: "A → B → C → D → E" },
        { value: 'D', label: "(B, C, D, E) parallel → A" }
      ],
      correct: 'B',
      explanation: 'Starting with B (dependency) and running A and C in parallel, then D and E in parallel minimizes total time while respecting dependencies.'
    },
    {
      category: "Process Understanding",
      question: "In Scrum, what is the maximum duration for a Sprint Retrospective in a 4-week Sprint?",
      options: [
        { value: 'A', label: "1 hour" },
        { value: 'B', label: "2 hours" },
        { value: 'C', label: "3 hours" },
        { value: 'D', label: "4 hours" }
      ],
      correct: 'C',
      explanation: 'According to Scrum Guide, Sprint Retrospective timebox is 3 hours for a one-month Sprint.'
    },
    {
      category: "Numerical Aptitude",
      question: "A team's velocity over the last 3 sprints was 23, 27, and 25 story points. They have 180 story points remaining in their backlog. Approximately how many sprints will they need?",
      options: [
        { value: 'A', label: "6 sprints" },
        { value: 'B', label: "7 sprints" },
        { value: 'C', label: "8 sprints" },
        { value: 'D', label: "9 sprints" }
      ],
      correct: 'B',
      explanation: 'Average velocity = (23+27+25)/3 = 25. 180/25 = 7.2, so approximately 7 sprints needed.'
    },
    {
      category: "Scrum Framework",
      question: "Who is responsible for ordering the Product Backlog?",
      options: [
        { value: 'A', label: "Scrum Master" },
        { value: 'B', label: "Development Team" },
        { value: 'C', label: "Product Owner" },
        { value: 'D', label: "Stakeholders" }
      ],
      correct: 'C',
      explanation: 'The Product Owner is accountable for ordering the Product Backlog according to the Scrum Guide.'
    },
    {
      category: "Conflict Resolution",
      question: "Two developers disagree on the technical approach for a user story. As a Scrum Master, your best first step is:",
      options: [
        { value: 'A', label: "Make the technical decision yourself" },
        { value: 'B', label: "Escalate to the Product Owner" },
        { value: 'C', label: "Facilitate a discussion to help them reach consensus" },
        { value: 'D', label: "Assign the story to a different developer" }
      ],
      correct: 'C',
      explanation: 'Scrum Masters facilitate team collaboration and help resolve conflicts through discussion and consensus-building.'
    },
    {
      category: "Metrics & Estimation",
      question: "A burndown chart shows the line trending above the ideal burndown line. This indicates:",
      options: [
        { value: 'A', label: "The team is ahead of schedule" },
        { value: 'B', label: "The team is behind schedule" },
        { value: 'C', label: "The estimates were too high" },
        { value: 'D', label: "The sprint goal will definitely be met" }
      ],
      correct: 'B',
      explanation: 'When the actual burndown line is above the ideal line, it means the team is behind schedule and needs to catch up.'
    },
    {
      category: "Agile Principles",
      question: "Which Agile principle best supports the Scrum Master's role in servant leadership?",
      options: [
        { value: 'A', label: "Working software over comprehensive documentation" },
        { value: 'B', label: "Customer collaboration over contract negotiation" },
        { value: 'C', label: "Individuals and interactions over processes and tools" },
        { value: 'D', label: "Responding to change over following a plan" }
      ],
      correct: 'C',
      explanation: 'Scrum Masters focus on enabling team interactions and removing impediments, aligning with valuing individuals and interactions.'
    },
    {
      category: "Team Dynamics",
      question: "A team member consistently misses Daily Scrum meetings. As Scrum Master, you should:",
      options: [
        { value: 'A', label: "Remove them from the team" },
        { value: 'B', label: "Report them to management" },
        { value: 'C', label: "Have a private conversation to understand impediments" },
        { value: 'D', label: "Make attendance mandatory with penalties" }
      ],
      correct: 'C',
      explanation: 'Scrum Masters should first understand the root cause of the issue through private conversation before taking any disciplinary action.'
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
    const categories = ['Logical Reasoning', 'Process Understanding', 'Numerical Aptitude', 'Scrum Framework', 'Conflict Resolution', 'Metrics & Estimation', 'Agile Principles', 'Team Dynamics'];
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
            <span>Technical & Aptitude Assessment</span>
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
