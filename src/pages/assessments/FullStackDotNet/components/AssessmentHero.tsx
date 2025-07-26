
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Cloud, Settings, Server } from "lucide-react";

interface AssessmentHeroProps {
  onStartAssessment: () => void;
}

const AssessmentHero = ({ onStartAssessment }: AssessmentHeroProps) => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl border border-blue-100 shadow-sm p-10 mb-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Discover Your .NET Career Potential
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Take our comprehensive assessment to evaluate your psychological fit, technical readiness, and career alignment for a future in .NET development and administration.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center text-gray-500 text-sm">
              <Settings className="w-4 h-4 mr-2 text-blue-500" />
              25-30 minutes
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Zap className="w-4 h-4 mr-2 text-purple-500" />
              Personalized Results
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Server className="w-4 h-4 mr-2 text-green-500" />
              Career Guidance
            </div>
          </div>
          <Button 
            onClick={onStartAssessment}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-md transition-all duration-200"
          >
            Start Assessment
          </Button>
        </div>
      </div>

      {/* WHAT IS .NET? SECTION */}
      <Card className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-xl mb-8">
        <CardContent className="p-8">
          <div className="flex items-center mb-4">
            <Zap className="w-6 h-6 mr-2 text-blue-500" />
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">What is .NET?</h2>
          </div>
          <p className="text-gray-800 mb-6">
            .NET is a powerful <span className="font-bold">cloud-based platform</span> that specializes in <span className="font-bold">enterprise workflow automation</span>. It empowers organizations to streamline business processes and drive digital transformation across various departments and functions.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 mb-1">Cloud Platform</h3>
              <p className="text-blue-700 text-sm">Scalable, secure, and accessible from anywhere</p>
            </div>
            <div className="flex-1 bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-700 mb-1">Workflow Automation</h3>
              <p className="text-green-700 text-sm">Streamline processes and reduce manual work</p>
            </div>
            <div className="flex-1 bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-700 mb-1">Enterprise Scale</h3>
              <p className="text-purple-700 text-sm">Used by Fortune 500 companies worldwide</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CAREER OPPORTUNITIES */}
      <Card className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-xl mb-8">
        <CardContent className="p-8">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0v2m0 4v.01" /></svg>
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">Career Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="font-semibold text-gray-900">.NET Full Stack Developer</div>
              <div className="text-gray-600 text-sm">Build workflows and automation</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="font-semibold text-gray-900">ASP.NET Core Developer</div>
              <div className="text-gray-600 text-sm">Manage platform and users</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="font-semibold text-gray-900">ITSM Consultant</div>
              <div className="text-gray-600 text-sm">Design enterprise processes</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="font-semibold text-gray-900">Business Analyst</div>
              <div className="text-gray-600 text-sm">Bridge tech and business needs</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="font-semibold text-gray-900">Platform Architect</div>
              <div className="text-gray-600 text-sm">Advanced system design</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* IDEAL TRAITS & SKILLS */}
      <Card className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-xl mb-8">
        <CardContent className="p-8">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">Ideal Traits & Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span className="text-gray-900">Strong analytical thinking</span></li>
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span className="text-gray-900">Logical problem-solving</span></li>
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span className="text-gray-900">Comfort with scripting</span></li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span className="text-gray-900">Process-oriented mindset</span></li>
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span className="text-gray-900">Interest in IT service delivery</span></li>
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span className="text-gray-900">Attention to detail</span></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* WHAT YOU'LL DISCOVER */}
      <Card className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-xl mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">What You'll Discover</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Assessment Modules Box */}
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Assessment Modules:</h3>
              <ul className="space-y-4">
                <li className="flex items-center"><span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold mr-3">1</span><span className="text-gray-900">Psychological Fit Evaluation</span></li>
                <li className="flex items-center"><span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 font-bold mr-3">2</span><span className="text-gray-900">Technical Aptitude Testing</span></li>
                <li className="flex items-center"><span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 text-orange-700 font-bold mr-3">3</span><span className="text-gray-900">WISCAR Framework Analysis</span></li>
              </ul>
            </div>
            {/* Your Results Include Box */}
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Your Results Include:</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Personalized fit score (0-100)</li>
                <li>Detailed trait analysis</li>
                <li>Technical readiness assessment</li>
                <li>Career pathway recommendations</li>
                <li>Next steps and learning resources</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AssessmentHero;
