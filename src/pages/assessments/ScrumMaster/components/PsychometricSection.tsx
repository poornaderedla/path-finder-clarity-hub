
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Brain, Users, Target } from "lucide-react";

interface PsychometricSectionProps {
  onNext: () => void;
  onPrev: () => void;
  onUpdateData: (section: string, data: any) => void;
}

const PsychometricSection: React.FC<PsychometricSectionProps> = ({ 
  onNext, 
  onPrev, 
  onUpdateData 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const questions = [
    {
      category: "Facilitation & Leadership",
      text: "I enjoy coaching individuals to achieve their potential.",
      construct: "Big Five: Agreeableness"
    },
    {
      category: "Emotional Stability", 
      text: "I stay calm when conflicts arise in team settings.",
      construct: "Big Five: Emotional Stability"
    },
    {
      category: "Adaptability",
      text: "I adapt quickly to changing team dynamics and priorities.",
      construct: "Growth Mindset"
    },
    {
      category: "Communication",
      text: "I find it easy to facilitate discussions between different viewpoints.",
      construct: "Holland: Social"
    },
    {
      category: "Process Orientation",
      text: "I prefer structured approaches to problem-solving while remaining flexible.",
      construct: "Big Five: Conscientiousness"
    },
    {
      category: "Team Focus",
      text: "I am more energized by helping teams succeed than individual recognition.",
      construct: "Intrinsic Motivation"
    },
    {
      category: "Resilience",
      text: "When faced with setbacks, I focus on learning and continuous improvement.",
      construct: "Grit & Growth Mindset"
    },
    {
      category: "Active Listening",
      text: "I can understand different perspectives even when I disagree.",
      construct: "Big Five: Agreeableness"
    },
    {
      category: "Change Management",
      text: "I thrive in environments where priorities and processes evolve regularly.",
      construct: "Holland: Enterprising"
    },
    {
      category: "Stakeholder Management",
      text: "I enjoy building bridges between different departments and stakeholders.",
      construct: "Holland: Social + Enterprising"
    }
  ];

  const scaleLabels = [
    "Strongly Disagree",
    "Disagree", 
    "Neutral",
    "Agree",
    "Strongly Agree"
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: parseInt(value) };
    setAnswers(newAnswers);
    onUpdateData('psychometric', newAnswers);
  };

  const canProceed = () => {
    return Object.keys(answers).length === questions.length;
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
              {questions[currentQuestion].text}
            </h3>
            <RadioGroup
              value={answers[currentQuestion]?.toString() || ''}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {scaleLabels.map((label, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={(index + 1).toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-sm cursor-pointer flex-1 py-2 px-3 rounded hover:bg-white/50 transition-colors"
                  >
                    {label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Evaluating: {questions[currentQuestion].construct}
            </div>
            {currentQuestion < questions.length - 1 ? (
              <Button 
                onClick={nextQuestion}
                disabled={answers[currentQuestion] === undefined}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Next Question
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button 
                onClick={onNext}
                disabled={Object.keys(answers).length !== questions.length}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Next Section
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PsychometricSection;
