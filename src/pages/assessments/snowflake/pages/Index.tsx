import { useState } from "react";
import { AssessmentIntro } from "../components/AssessmentIntro";
import { QuestionCard } from "../components/QuestionCard";
import { AssessmentResults } from "../components/AssessmentResults";
import { ProgressBar } from "../components/ProgressBar";
import { SectionTabs } from "../components/SectionTabs";
import { assessmentSections, getTotalQuestions } from "../data/questions";
import { calculateAssessmentResults } from "../utils/scoring";
import { AssessmentAnswer, UserProgress, AssessmentResults as Results } from "../types/assessment";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AssessmentLayout from "../../../../components/AssessmentLayout";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [results, setResults] = useState<Results | null>(null);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const totalQuestions = getTotalQuestions();
  const progress = (answers.length / totalQuestions) * 100;

  const getCurrentSection = () => {
    if (currentSection === 0) return null; // Introduction
    if (currentSection === 4) return null; // Results
    return assessmentSections[currentSection - 1];
  };

  const getCurrentQuestion = () => {
    const section = getCurrentSection();
    if (!section) return null;
    return section.questions[currentQuestionIndex] || null;
  };

  const handleStartAssessment = () => {
    setCurrentSection(1);
    setCurrentQuestionIndex(0);
    toast({
      title: "Assessment Started",
      description: "Good luck! Take your time with each question.",
    });
  };

  const handleAnswer = (value: number | string) => {
    const question = getCurrentQuestion();
    if (!question) return;

    const newAnswer: AssessmentAnswer = {
      questionId: question.id,
      value
    };

    const updatedAnswers = answers.filter(a => a.questionId !== question.id);
    updatedAnswers.push(newAnswer);
    setAnswers(updatedAnswers);

    // Move to next question
    const section = getCurrentSection();
    if (!section) return;

    if (currentQuestionIndex < section.questions.length - 1) {
      // Next question in current section
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Move to next section
      const completedSectionId = currentSection;
      setCompletedSections(prev => [...prev, completedSectionId]);
      
      if (currentSection < 3) {
        setCurrentSection(currentSection + 1);
        setCurrentQuestionIndex(0);
        toast({
          title: "Section Complete",
          description: `Great job! Moving to the next section.`,
        });
      } else {
        // Assessment complete
        const finalResults = calculateAssessmentResults(updatedAnswers);
        setResults(finalResults);
        setCurrentSection(4);
        toast({
          title: "Assessment Complete!",
          description: "Your personalized results are ready.",
        });
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSection > 1) {
      const prevSection = currentSection - 1;
      const prevSectionData = assessmentSections[prevSection - 1];
      setCurrentSection(prevSection);
      setCurrentQuestionIndex(prevSectionData.questions.length - 1);
    }
  };

  const handleRestartAssessment = () => {
    setCurrentSection(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults(null);
    setCompletedSections([]);
    toast({
      title: "Assessment Reset",
      description: "Starting fresh! Good luck!",
    });
  };

  const getCurrentAnswer = () => {
    const question = getCurrentQuestion();
    if (!question) return undefined;
    return answers.find(a => a.questionId === question.id)?.value;
  };

  const canGoPrevious = currentSection > 1 || currentQuestionIndex > 0;
  const questionNumber = answers.length + 1;

  return (
    <AssessmentLayout>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Should I Learn Snowflake?
              </h1>
              <p className="text-gray-600 text-sm">
                A Smart Assessment to Explore Your Fit for Cloud Data Engineering
              </p>
            </div>
            {currentSection > 0 && currentSection < 4 ? (
              <Badge variant="outline" className="text-sm">
                {Math.round(progress)}% Complete
              </Badge>
            ) : null}
          </div>

          {/* Progress Bar */}
          {currentSection > 0 && currentSection < 4 && (
            <div className="mt-4">
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Section Navigation */}
          <div className="flex mt-4 space-x-4 overflow-x-auto">
            <SectionTabs 
              currentSection={currentSection}
              completedSections={completedSections}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {currentSection === 0 && (
          <AssessmentIntro onStartAssessment={handleStartAssessment} />
        )}

        {currentSection > 0 && currentSection < 4 && (
          <div className="max-w-3xl mx-auto">
            {/* Section Card UI, matching reference */}
            {(() => {
              const section = getCurrentSection();
              const sectionQuestions = section?.questions || [];
              // Count how many questions in this section have an answer
              const answeredInSection = sectionQuestions.filter(q => answers.some(a => a.questionId === q.id)).length;
              const sectionProgress = (answeredInSection / (sectionQuestions.length || 1)) * 100;
              return (
                <Card className={
                  currentSection === 1 ? "border-2 border-purple-200" :
                  currentSection === 2 ? "border-2 border-green-200" :
                  currentSection === 3 ? "border-2 border-orange-200" :
                  "border"
                }>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {currentSection === 1 && <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 13a5 5 0 00-10 0v3a5 5 0 0010 0v-3z" /><circle cx="12" cy="7" r="4" /></svg>}
                      {currentSection === 2 && <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.75 17L9 21l3-1 3 1-.75-4M9 13h6M9 9h6M9 5h6" /></svg>}
                      {currentSection === 3 && <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
                      <span>{section?.title} Assessment</span>
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Question {currentQuestionIndex + 1} of {sectionQuestions.length}</span>
                        <span>{Math.round(sectionProgress)}% Complete</span>
                      </div>
                      <Progress value={sectionProgress} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent className={
                    currentSection === 1 ? "bg-purple-50 p-4 rounded-lg" :
                    currentSection === 2 ? "bg-green-50 p-4 rounded-lg" :
                    currentSection === 3 ? "bg-orange-50 p-4 rounded-lg" :
                    "p-4"
                  }>
                    {/* Section label inside the card, left-aligned */}
                    <div className={
                      currentSection === 1 ? "text-xs font-semibold text-purple-700 mb-2 text-left" :
                      currentSection === 2 ? "text-xs font-semibold text-green-700 mb-2 text-left" :
                      currentSection === 3 ? "text-xs font-semibold text-orange-700 mb-2 text-left" :
                      "text-xs font-semibold mb-2 text-left"
                    }>
                      Section: {getCurrentSection()?.title}
                    </div>
                    <div className={
                      currentSection === 1 ? "text-sm font-medium text-purple-700 mb-2" :
                      currentSection === 2 ? "text-sm font-medium text-green-700 mb-2" :
                      currentSection === 3 ? "text-sm font-medium text-orange-700 mb-2" :
                      ""
                    }>
                      {getCurrentSection()?.description}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {getCurrentQuestion()?.question}
                    </h3>
                    {/* Render QuestionCard content only (no card wrapper) */}
                    {getCurrentQuestion() && (
                      <QuestionCard
                        question={getCurrentQuestion()!}
                        onAnswer={handleAnswer}
                        currentAnswer={getCurrentAnswer()}
                      />
                    )}
                  </CardContent>
                </Card>
              );
            })()}
          </div>
        )}

        {currentSection === 4 && results && (
          <div className="max-w-5xl mx-auto">
            <AssessmentResults 
              results={results} 
              onRestart={handleRestartAssessment}
            />
          </div>
        )}
      </div>
    </AssessmentLayout>
  );
};

export default Index;
