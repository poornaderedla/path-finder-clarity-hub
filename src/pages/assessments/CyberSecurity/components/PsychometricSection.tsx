
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowRight } from "lucide-react";

interface PsychometricSectionProps {
  onComplete: (scores: PsychometricScores) => void;
  onBack: () => void;
}

export interface PsychometricScores {
  interest: number;
  ethics: number;
  curiosity: number;
  stressTolerance: number;
  selfEfficacy: number;
  overallScore: number;
}

const PsychometricSection = ({ onComplete, onBack }: PsychometricSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      category: "Interest",
      question: "Do you enjoy solving logic puzzles and complex problems?",
      options: [
        "Strongly Disagree",
        "Disagree", 
        "Neutral",
        "Agree",
        "Strongly Agree"
      ]
    },
    {
      category: "Ethics",
      question: "I prefer to report security flaws rather than exploit them for personal gain.",
      options: [
        "Strongly Disagree",
        "Disagree",
        "Neutral", 
        "Agree",
        "Strongly Agree"
      ]
    },
    {
      category: "Curiosity",
      question: "I often wonder how software and systems work internally.",
      options: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree", 
        "Strongly Agree"
      ]
    },
    {
      category: "Stress Tolerance",
      question: "I can handle high-pressure situations and work calmly under stress.",
      options: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
      ]
    },
    {
      category: "Self-Efficacy",
      question: "I believe I can learn cybersecurity skills even if they seem challenging at first.",
      options: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
      ]
    },
    {
      category: "Persistence",
      question: "When faced with a difficult technical problem, I prefer to work through it systematically rather than give up.",
      options: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
      ]
    },
    {
      category: "Attention to Detail",
      question: "I naturally notice small inconsistencies or anomalies that others might miss.",
      options: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
      ]
    },
    {
      category: "Learning Motivation",
      question: "I actively seek out new information about technology and security trends.",
      options: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate scores
      const scoresArr = answers.map(val => parseInt(val || '3'));
      const totalScore = scoresArr.reduce((sum, score) => sum + score, 0);
      const maxScore = questions.length * 5;
      const overallScore = Math.round((totalScore / maxScore) * 100);
      const scores: PsychometricScores = {
        interest: Math.round(((scoresArr[0] || 0) / 5) * 100),
        ethics: Math.round(((scoresArr[1] || 0) / 5) * 100),
        curiosity: Math.round(((scoresArr[2] || 0) / 5) * 100),
        stressTolerance: Math.round(((scoresArr[3] || 0) / 5) * 100),
        selfEfficacy: Math.round(((scoresArr[4] || 0) / 5) * 100),
        overallScore
      };
      onComplete(scores);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

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
              onValueChange={handleAnswerSelect}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-sm cursor-pointer flex-1 py-2 px-3 rounded hover:bg-white/50 transition-colors"
                  >
                    {option}
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
              disabled={answers[currentQuestion] === undefined}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {currentQuestion === questions.length - 1 ? 'Complete Section' : 'Next Question'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PsychometricSection;
