
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Target,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Award,
  BookOpen,
  Users,
  AlertTriangle,
  XCircle,
  Star,
  ExternalLink
} from "lucide-react";

interface ResultsPageProps {
  onNext?: () => void;
  onPrev: () => void;
  onUpdateData?: (section: string, data: any) => void;
  assessmentData: any;
  currentStep?: number;
  totalSteps?: number;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ onPrev, assessmentData }) => {
  // Use assessmentData if available, otherwise fallback to sample scores
  const psychometric = assessmentData?.psychometric || { overall: 78 };
  const technical = assessmentData?.technical || { overall: 85 };
  const wiscar = assessmentData?.wiscar || { overall: 82 };
  const psychometricScore = psychometric.overall;
  const technicalScore = technical.overall;
  const wiscarScore = wiscar.overall;
  const overallScore = Math.round((psychometricScore + technicalScore + wiscarScore) / 3);

  const getRecommendation = (score: number) => {
    if (score >= 75) return {
      verdict: "YES",
      status: "Strong Match",
      color: "green",
      icon: CheckCircle,
      description: "You show strong alignment across psychological fit, technical readiness, and holistic assessment dimensions."
    };
    if (score >= 60) return {
      verdict: "MAYBE",
      status: "Potential Match",
      color: "orange",
      icon: AlertTriangle,
      description: "You have potential but may need to strengthen certain areas before diving deep into this path."
    };
    return {
      verdict: "NO",
      status: "Not the Right Fit",
      color: "red",
      icon: XCircle,
      description: "Based on your current profile, other career paths might be a better fit for your interests and skills."
    };
  };

  const recommendation = getRecommendation(overallScore);
  const RecommendationIcon = recommendation.icon;

  // Example career paths and alternatives (customize as needed)
  const careerPaths = [
    {
      title: 'Scrum Master',
      description: 'Facilitate Agile teams and drive continuous improvement',
      skillMatch: technicalScore,
      requirements: ['Facilitation', 'Agile Knowledge', 'Team Leadership']
    },
    {
      title: 'Agile Coach',
      description: 'Mentor teams and organizations in Agile practices',
      skillMatch: psychometricScore,
      requirements: ['Coaching', 'Empathy', 'Agile Transformation']
    },
    {
      title: 'Project Manager (Agile)',
      description: 'Lead projects with Agile methodologies',
      skillMatch: wiscarScore,
      requirements: ['Project Management', 'Scrum', 'Stakeholder Management']
    },
    {
      title: 'Product Owner Associate',
      description: 'Bridge business needs with Agile teams',
      skillMatch: Math.round((psychometricScore + wiscarScore) / 2),
      requirements: ['Requirements Analysis', 'Prioritization', 'Communication']
    }
  ];

  const alternatives = [
    { title: 'Project Coordinator', reason: 'Support project delivery and coordination' },
    { title: 'Business Analyst', reason: 'Bridge business and technical teams' },
    { title: 'Product Owner', reason: 'Focus on product vision and backlog' },
    { title: 'Agile Delivery Support', reason: 'Assist Agile teams in delivery' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Overall Recommendation */}
      <Card className={`border-2 ${
        recommendation.color === 'green' ? 'border-green-200 bg-green-50' :
        recommendation.color === 'orange' ? 'border-orange-200 bg-orange-50' :
        'border-red-200 bg-red-50'
      }`}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-full ${
              recommendation.color === 'green' ? 'bg-green-100' :
              recommendation.color === 'orange' ? 'bg-orange-100' :
              'bg-red-100'
            }`}>
              <RecommendationIcon className={`w-12 h-12 ${
                recommendation.color === 'green' ? 'text-green-600' :
                recommendation.color === 'orange' ? 'text-orange-600' :
                'text-red-600'
              }`} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            {recommendation.status}
          </CardTitle>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {recommendation.description}
          </p>
          <Badge 
            variant="outline" 
            className={`mt-4 text-lg px-4 py-2 ${
              recommendation.color === 'green' ? 'bg-green-100 text-green-800 border-green-300' :
              recommendation.color === 'orange' ? 'bg-orange-100 text-orange-800 border-orange-300' :
              'bg-red-100 text-red-800 border-red-300'
            }`}
          >
            Recommendation: {recommendation.verdict}
          </Badge>
        </CardHeader>
      </Card>

      {/* Score Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-600" />
              <span>Psychometric</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold text-purple-600">
                    {psychometricScore}%
                  </span>
                  <Badge variant={
                    psychometricScore >= 75 ? 'default' :
                    psychometricScore >= 60 ? 'secondary' : 'destructive'
                  }>
                    {psychometricScore >= 75 ? 'Excellent' :
                     psychometricScore >= 60 ? 'Good' : 'Needs Work'}
                  </Badge>
                </div>
                <Progress value={psychometricScore} className="h-3" />
              </div>
              {/* Add category breakdown if available */}
              {psychometric.categories && (
                <div className="space-y-2">
                  {Object.entries(psychometric.categories).map(([category, score]) => (
                    <div key={category} className="flex justify-between text-sm">
                      <span className="text-gray-600">{category.replace(/\(.*\)/, '').trim()}</span>
                      <span className="font-medium">{typeof score === 'number' ? score : 0}%</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <span>Technical</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold text-green-600">
                    {technicalScore}%
                  </span>
                  <Badge variant={
                    technicalScore >= 75 ? 'default' :
                    technicalScore >= 60 ? 'secondary' : 'destructive'
                  }>
                    {technicalScore >= 75 ? 'Strong' :
                     technicalScore >= 60 ? 'Moderate' : 'Developing'}
                  </Badge>
                </div>
                <Progress value={technicalScore} className="h-3" />
              </div>
              {/* Add category breakdown if available */}
              {technical.categories && (
                <div className="space-y-2">
                  {Object.entries(technical.categories).map(([category, score]) => (
                    <div key={category} className="flex justify-between text-sm">
                      <span className="text-gray-600">{category}</span>
                      <span className="font-medium">{typeof score === 'number' ? score : 0}%</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-orange-600" />
              <span>WISCAR</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold text-orange-600">
                    {wiscarScore}%
                  </span>
                  <Badge variant="outline" className="bg-orange-50 text-orange-700">
                    {wiscar.quadrant || 'Assessment Needed'}
                  </Badge>
                </div>
                <Progress value={wiscarScore} className="h-3" />
              </div>
              {/* Add dimension breakdown if available */}
              {wiscar.dimensions && (
                <div className="space-y-2">
                  {Object.entries(wiscar.dimensions).map(([dimension, score]) => (
                    <div key={dimension} className="flex justify-between text-sm">
                      <span className="text-gray-600">{dimension.split(' ')[0]}</span>
                      <span className="font-medium">{typeof score === 'number' ? score : 0}%</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Career Path Matching */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-blue-600" />
            <span>Career Path Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {careerPaths.map((career, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{career.title}</h4>
                  <Badge variant="outline" className={
                    career.skillMatch >= 75 ? 'bg-green-50 text-green-700' :
                    career.skillMatch >= 60 ? 'bg-orange-50 text-orange-700' :
                    'bg-red-50 text-red-700'
                  }>
                    {career.skillMatch}% Match
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{career.description}</p>
                <div className="mb-3">
                  <Progress value={career.skillMatch} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-gray-500 mb-1">Key Requirements:</div>
                  {career.requirements.map((req, reqIndex) => (
                    <Badge key={reqIndex} variant="secondary" className="mr-1 mb-1 text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps or Alternatives */}
      {recommendation.verdict === 'YES' && (
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span>Your Learning Path</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Recommended Next Steps:</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• Enroll in Certified ScrumMaster (CSM) training</li>
                  <li>• Join local Agile meetups and communities</li>
                  <li>• Shadow experienced Scrum Masters</li>
                  <li>• Practice facilitation skills in your current role</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {recommendation.verdict !== 'YES' && (
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-blue-600" />
              <span>Alternative Career Paths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Based on your assessment results, here are some alternative career paths that might be a better fit:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {alternatives.map((alt, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{alt.title}</h4>
                  <p className="text-sm text-gray-600">{alt.reason}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.location.reload()}
        >
          Retake Assessment
        </Button>
        {recommendation.verdict === 'YES' && (
          <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
            View Learning Resources
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
