import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Brain, 
  Code, 
  Target, 
  ChevronRight, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Users,
  BookOpen,
  ExternalLink,
  Star,
  Award
} from 'lucide-react';

interface ResultsSectionProps {
  assessmentData: any;
}

const ResultsSection = ({ assessmentData }: ResultsSectionProps) => {
  const { psychometric, technical, wiscar } = assessmentData;

  // Calculate overall recommendation
  const calculateOverallRecommendation = () => {
    const psychScore = psychometric?.overall || 0;
    const techScore = technical?.overall || 0;
    const wiscarScore = wiscar?.overall || 0;
    
    const overallScore = Math.round((psychScore + techScore + wiscarScore) / 3);
    
    if (overallScore >= 75) {
      return {
        recommendation: 'YES',
        title: 'AWS is an Excellent Fit for You!',
        color: 'green',
        icon: CheckCircle,
        description: 'You show strong alignment across psychological fit, technical readiness, and holistic assessment dimensions.',
        score: overallScore
      };
    } else if (overallScore >= 60) {
      return {
        recommendation: 'MAYBE',
        title: 'AWS Could Be Right with Preparation',
        color: 'orange',
        icon: AlertTriangle,
        description: 'You have potential but may need to strengthen certain areas before diving deep into AWS.',
        score: overallScore
      };
    } else {
      return {
        recommendation: 'NO',
        title: 'Consider Alternative Paths',
        color: 'red',
        icon: XCircle,
        description: 'Based on your current profile, other technology paths might be a better fit for your interests and skills.',
        score: overallScore
      };
    }
  };

  const recommendation = calculateOverallRecommendation();
  const RecommendationIcon = recommendation.icon;

  const careerPaths = [
    {
      title: 'AWS Cloud Engineer',
      description: 'Build and manage cloud infrastructure',
      skillMatch: Math.max(technical?.overall || 0, 70),
      requirements: ['AWS Services', 'Infrastructure as Code', 'DevOps Practices']
    },
    {
      title: 'Solutions Architect',
      description: 'Design scalable cloud solutions',
      skillMatch: Math.max(psychometric?.overall || 0, 75),
      requirements: ['System Design', 'AWS Architecture', 'Business Analysis']
    },
    {
      title: 'DevOps Engineer',
      description: 'Automate deployment and operations',
      skillMatch: Math.max(technical?.overall || 0, 70),
      requirements: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring']
    },
    {
      title: 'Cloud Security Specialist',
      description: 'Secure AWS environments',
      skillMatch: Math.max(wiscar?.wiscar?.s || 0, 65),
      requirements: ['Security Best Practices', 'IAM Management', 'Compliance']
    }
  ];

  const learningPath = [
    {
      stage: 'Foundation',
      modules: ['AWS Cloud Practitioner', 'Basic Cloud Concepts', 'AWS Console Navigation'],
      duration: '2-4 weeks',
      completed: false
    },
    {
      stage: 'Intermediate',
      modules: ['EC2 & VPC Fundamentals', 'S3 Storage Solutions', 'IAM Security'],
      duration: '6-8 weeks',
      completed: false
    },
    {
      stage: 'Advanced',
      modules: ['Solutions Architect Associate', 'DevOps Practices', 'Advanced Services'],
      duration: '8-12 weeks',
      completed: false
    },
    {
      stage: 'Certification',
      modules: ['Practice Exams', 'Hands-on Projects', 'Portfolio Building'],
      duration: '4-6 weeks',
      completed: false
    }
  ];

  const alternatives = [
    { title: 'Microsoft Azure', reason: 'Similar cloud platform with enterprise focus' },
    { title: 'Google Cloud Platform', reason: 'Data and AI-focused cloud services' },
    { title: 'DevOps Engineering', reason: 'Automation and infrastructure focus' },
    { title: 'System Administration', reason: 'Traditional IT infrastructure management' }
  ];

  const getStrengths = () => {
    const strengths = [];
    
    if (psychometric?.overall >= 70) {
      strengths.push('Strong psychological fit for cloud engineering');
    }
    if (technical?.overall >= 70) {
      strengths.push('Good technical foundation');
    }
    if (wiscar?.wiscar?.w >= 70) {
      strengths.push('High motivation and drive');
    }
    if (wiscar?.wiscar?.i >= 70) {
      strengths.push('Strong interest in technology');
    }
    if (wiscar?.wiscar?.s >= 70) {
      strengths.push('Good technical skills');
    }
    
    return strengths.length > 0 ? strengths : ['You have a balanced profile with room for growth'];
  };

  const getImprovements = () => {
    const improvements = [];
    
    if (technical?.overall < 50) {
      improvements.push('Strengthen technical fundamentals');
    }
    if (wiscar?.wiscar?.s < 50) {
      improvements.push('Gain more hands-on experience');
    }
    if (wiscar?.wiscar?.c < 50) {
      improvements.push('Develop analytical thinking skills');
    }
    if (psychometric?.overall < 50) {
      improvements.push('Build confidence in technical problem-solving');
    }
    
    return improvements.length > 0 ? improvements : ['Continue building on your current strengths'];
  };

  const getNextSteps = () => {
    const overallScore = assessmentData.completed 
      ? (assessmentData.psychometric.score || 0) + (assessmentData.technical.score || 0) + (assessmentData.wiscar.score || 0)
      : 0;
    if (overallScore >= 75) {
      return [
        'Start with AWS Cloud Practitioner certification',
        'Set up an AWS free tier account',
        'Complete hands-on labs with EC2 and S3',
        'Practice with AWS CLI and basic scripting'
      ];
    } else if (overallScore >= 50) {
      return [
        'Begin with basic IT fundamentals',
        'Learn Linux command line basics',
        'Study networking fundamentals',
        'Practice with Docker containers'
      ];
    } else {
      return [
        'Focus on general IT skills first',
        'Learn basic programming concepts',
        'Understand fundamental networking',
        'Consider IT support roles as a starting point'
      ];
    }
  };

  const getCareerPaths = () => {
    const overallScore = assessmentData.completed 
      ? (assessmentData.psychometric.score || 0) + (assessmentData.technical.score || 0) + (assessmentData.wiscar.score || 0)
      : 0;
    if (overallScore >= 75) {
      return [
        'AWS Cloud Engineer',
        'Solutions Architect',
        'DevOps Engineer',
        'Cloud Security Specialist'
      ];
    } else if (overallScore >= 50) {
      return [
        'Junior Cloud Engineer',
        'IT Support Specialist',
        'System Administrator',
        'Network Technician'
      ];
    } else {
      return [
        'IT Support Technician',
        'Help Desk Specialist',
        'Desktop Support',
        'Network Support'
      ];
    }
  };

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
            {recommendation.title}
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
            Recommendation: {recommendation.recommendation}
          </Badge>
        </CardHeader>
      </Card>

      {/* Score Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span>Psychological Fit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold text-purple-600">
                    {psychometric?.overall || 0}%
                  </span>
                  <Badge variant={
                    (psychometric?.overall || 0) >= 75 ? 'default' :
                    (psychometric?.overall || 0) >= 60 ? 'secondary' : 'destructive'
                  }>
                    {(psychometric?.overall || 0) >= 75 ? 'Excellent' :
                     (psychometric?.overall || 0) >= 60 ? 'Good' : 'Needs Work'}
                  </Badge>
                </div>
                <Progress value={psychometric?.overall || 0} className="h-3" />
              </div>
              <div className="space-y-2">
                {psychometric?.categories && Object.entries(psychometric.categories).map(([category, score]) => (
                  <div key={category} className="flex justify-between text-sm">
                    <span className="text-gray-600">{category.replace(/\(.*\)/, '').trim()}</span>
                    <span className="font-medium">{typeof score === 'number' ? score : 0}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-600" />
              <span>Technical Readiness</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold text-green-600">
                    {technical?.overall || 0}%
                  </span>
                  <Badge variant={
                    (technical?.overall || 0) >= 75 ? 'default' :
                    (technical?.overall || 0) >= 60 ? 'secondary' : 'destructive'
                  }>
                    {(technical?.overall || 0) >= 75 ? 'Strong' :
                     (technical?.overall || 0) >= 60 ? 'Moderate' : 'Developing'}
                  </Badge>
                </div>
                <Progress value={technical?.overall || 0} className="h-3" />
              </div>
              <div className="text-sm text-gray-600">
                Correct: {technical?.correctAnswers || 0} / {technical?.totalQuestions || 0}
              </div>
              <div className="space-y-2">
                {technical?.categories && Object.entries(technical.categories).map(([category, score]) => (
                  <div key={category} className="flex justify-between text-sm">
                    <span className="text-gray-600">{category}</span>
                    <span className="font-medium">{typeof score === 'number' ? score : 0}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-orange-600" />
              <span>WISCAR Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold text-orange-600">
                    {wiscar?.overall || 0}%
                  </span>
                  <Badge variant="outline" className="bg-orange-50 text-orange-700">
                    {wiscar?.quadrant || 'Assessment Needed'}
                  </Badge>
                </div>
                <Progress value={wiscar?.overall || 0} className="h-3" />
              </div>
              <div className="space-y-2">
                {wiscar?.wiscar && Object.entries(wiscar.wiscar).map(([dimension, score]) => (
                  <div key={dimension} className="flex justify-between text-sm">
                    <span className="text-gray-600">{dimension.split(' ')[0]}</span>
                    <span className="font-medium">{typeof score === 'number' ? score : 0}%</span>
                  </div>
                ))}
              </div>
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

      {/* Next Steps */}
      {recommendation.recommendation === 'YES' && (
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span>Your Learning Path</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {learningPath.map((stage, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-semibold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                      <Badge variant="outline">{stage.duration}</Badge>
                    </div>
                    <div className="space-y-1">
                      {stage.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="text-sm text-gray-600">
                          • {module}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Recommended Next Steps:</h4>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Join the AWS Developer Community</li>
                <li>• Sign up for AWS Free Tier account</li>
                <li>• Start with "AWS Cloud Practitioner" course</li>
                <li>• Practice with hands-on labs and tutorials</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Alternative Recommendations */}
      {recommendation.recommendation !== 'YES' && (
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-blue-600" />
              <span>Alternative Career Paths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Based on your assessment results, here are some alternative technology paths that might be a better fit:
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
        {recommendation.recommendation === 'YES' && (
          <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
            View Learning Resources
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResultsSection; 