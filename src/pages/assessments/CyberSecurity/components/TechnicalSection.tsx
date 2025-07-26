
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Code, ArrowRight } from "lucide-react";

interface TechnicalSectionProps {
  onComplete: (scores: TechnicalScores) => void;
  onBack: () => void;
}

export interface TechnicalScores {
  aptitude: number;
  prerequisites: number;
  cybersecurity: number;
  overallScore: number;
}

const TechnicalSection = ({ onComplete, onBack }: TechnicalSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    // Aptitude Questions
    {
      category: "Logical Reasoning",
      section: "aptitude",
      question: "What comes next in this sequence: 2, 6, 12, 20, 30, ?",
      options: ["40", "42", "44", "46"],
      correct: 1
    },
    {
      category: "Pattern Recognition",
      section: "aptitude", 
      question: "If CYBER is coded as 3-25-2-5-18, what is the code for HACK?",
      options: ["8-1-3-11", "8-1-4-11", "7-1-3-11", "8-2-3-11"],
      correct: 0
    },
    // Prerequisites Questions
    {
      category: "Binary & Hex",
      section: "prerequisites",
      question: "What is the decimal value of binary 1010?",
      options: ["8", "10", "12", "16"],
      correct: 1
    },
    {
      category: "Networking",
      section: "prerequisites",
      question: "What does DNS stand for?",
      options: ["Data Network System", "Domain Name System", "Digital Network Security", "Dynamic Name Server"],
      correct: 1
    },
    {
      category: "Operating Systems",
      section: "prerequisites",
      question: "Which command is used to list files in a Linux terminal?",
      options: ["dir", "show", "ls", "list"],
      correct: 2
    },
    {
      category: "Networking Fundamentals",
      section: "prerequisites",
      question: "What is the default port for HTTPS?",
      options: ["80", "443", "8080", "22"],
      correct: 1
    },
    // Cybersecurity Questions
    {
      category: "Phishing Identification",
      section: "cybersecurity",
      question: "Which of these is most likely a phishing attempt?",
      options: [
        "Email from your bank asking to verify account via phone",
        "Email from 'your bank' with spelling errors asking for login credentials",
        "Email from bank's official domain with no links",
        "Email from bank with your full account number visible"
      ],
      correct: 1
    },
    {
      category: "Security Concepts",
      section: "cybersecurity",
      question: "What is the primary purpose of a firewall?",
      options: [
        "Speed up internet connection",
        "Store passwords securely", 
        "Filter network traffic based on rules",
        "Encrypt data transmission"
      ],
      correct: 2
    },
    {
      category: "Malware Types",
      section: "cybersecurity",
      question: "What type of malware spreads without user intervention?",
      options: ["Virus", "Trojan", "Worm", "Spyware"],
      correct: 2
    },
    {
      category: "Incident Response",
      section: "cybersecurity",
      question: "What should be the first step when a security breach is discovered?",
      options: [
        "Fix the vulnerability immediately",
        "Contain the breach to prevent spread",
        "Notify all users about the breach", 
        "Start investigating the cause"
      ],
      correct: 1
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate scores
      const aptitudeQuestions = questions.filter(q => q.section === "aptitude");
      const prerequisiteQuestions = questions.filter(q => q.section === "prerequisites");
      const cybersecurityQuestions = questions.filter(q => q.section === "cybersecurity");
      let aptitudeScore = 0;
      let prerequisiteScore = 0;
      let cybersecurityScore = 0;
      questions.forEach((question, index) => {
        const isCorrect = answers[index] === question.correct ? 1 : 0;
        if (question.section === "aptitude") {
          aptitudeScore += isCorrect;
        } else if (question.section === "prerequisites") {
          prerequisiteScore += isCorrect;
        } else if (question.section === "cybersecurity") {
          cybersecurityScore += isCorrect;
        }
      });
      const scores: TechnicalScores = {
        aptitude: Math.round((aptitudeScore / aptitudeQuestions.length) * 100),
        prerequisites: Math.round((prerequisiteScore / prerequisiteQuestions.length) * 100),
        cybersecurity: Math.round((cybersecurityScore / cybersecurityQuestions.length) * 100),
        overallScore: Math.round(((aptitudeScore + prerequisiteScore + cybersecurityScore) / questions.length) * 100)
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
              value={answers[currentQuestion] !== undefined ? answers[currentQuestion].toString() : ''}
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
              Category: {questions[currentQuestion].category}
            </div>
            <Button 
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
              className="bg-green-600 hover:bg-green-700"
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

export default TechnicalSection;
