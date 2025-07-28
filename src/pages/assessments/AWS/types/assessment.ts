export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'scale' | 'yes-no';
  options?: string[];
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: { min: string; max: string };
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  duration: string;
}

export interface AssessmentResponse {
  questionId: string;
  answer: string | number;
}

export interface AssessmentScores {
  psychometric: number;
  technical: number;
  w: number; // Will
  i: number; // Interest
  s: number; // Skill
  c: number; // Cognitive
  a: number; // Ability to Learn
  r: number; // Real-world Alignment
  overall: number;
}

export interface AssessmentResult {
  scores: AssessmentScores;
  recommendation: 'Yes' | 'Maybe' | 'No';
  confidence: number;
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
  careerPaths: string[];
  alternativeSuggestions?: string[];
}