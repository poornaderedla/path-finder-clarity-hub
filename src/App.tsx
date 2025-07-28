import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Assessments from "./pages/Assessments";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import GoogleCloudPlatformAssessment from "./pages/assessments/GoogleCloudPlatform/pages/Index";
import BlockchainAssessment from "./pages/assessments/Blockchain/pages/Index";
import FullStackPythonAssessment from "./pages/assessments/fullstackpython/pages/Index";
import BusinessAnalystAssessment from "./pages/assessments/bussinessanalyst/pages/Index";
import SnowflakeAssessment from "./pages/assessments/snowflake/App";
import OracleCloudAssessment from "./pages/assessments/OracleCloud/pages/Index";
import DataScienceAssessment from "./pages/assessments/DataScience/pages/Index";
import AIMLAssessment from "./pages/assessments/AIML/pages/Index";
import PythonDataAnalyticsAssessment from "./pages/assessments/PythonwithDataAnalytics/pages/Index";
import CyberSecurityAssessment from "./pages/assessments/CyberSecurity/pages/Index";
import FullStackDotNetAssessment from "./pages/assessments/FullStackDotNet/pages/Index";
import EthicalHackingAssessment from "./pages/assessments/EthicalHacking/pages/Index";
import DevOpsAssessment from "./pages/assessments/DevOps/pages/Index";
import GenAIAssessment from "./pages/assessments/GenAI/pages/Index";
import MERNStackAssessment from "./pages/assessments/MERNStack/pages/Index";
import MultiCloudEngineerAssessment from "./pages/assessments/MultiCloudEngineer/pages/Index";
import ScrumMasterAssessment from "./pages/assessments/ScrumMaster/pages/Index";
import AWSAssessment from "./pages/assessments/AWS/pages/Index";
import FullStackJAVAAssessment from "./pages/assessments/FullStackJAVA/pages/Index";
import ServicenowAssessment from "./pages/assessments/Servicenow/pages/Index";
import PowerBIAssessment from "./pages/assessments/PowerBI/pages/Index";
import Microsoft365Assessment from "./pages/assessments/Microsoft365/pages/Index";
import DigitalMarketingAssessment from "./pages/assessments/DigitalMarketing/pages/Index";
import MedicalCodingAssessment from "./pages/assessments/MedicalCoding/pages/Index";
import ReactJSAssessment from "./pages/assessments/ReactJS/pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessments" element={<Assessments />} />
          {/* Direct route for Google Cloud Platform assessment */}
          <Route path="/assessments/google-cloud-platform/*" element={<GoogleCloudPlatformAssessment />} />
          {/* Direct route for Blockchain assessment */}
          <Route path="/assessments/block-chain/*" element={<BlockchainAssessment />} />
          {/* Direct route for Full Stack Python assessment */}
          <Route path="/assessments/full-stack-python/*" element={<FullStackPythonAssessment />} />
          {/* Direct route for Business Analyst assessment */}
          <Route path="/assessments/business-analyst/*" element={<BusinessAnalystAssessment />} />
          {/* Direct route for Snowflake assessment */}
          <Route path="/assessments/snowflake/*" element={<SnowflakeAssessment />} />
          {/* Direct route for Oracle Cloud assessment */}
          <Route path="/assessments/oracle-cloud/*" element={<OracleCloudAssessment />} />
          {/* Direct route for Data Science assessment */}
          <Route path="/assessments/data-science/*" element={<DataScienceAssessment />} />
          {/* Direct route for AI/ML assessment */}
          <Route path="/assessments/ai-ml/*" element={<AIMLAssessment />} />
          {/* Direct route for Python Data Analytics assessment */}
          <Route path="/assessments/python-data-analytics/*" element={<PythonDataAnalyticsAssessment />} />
          {/* Direct route for Cyber Security assessment */}
          <Route path="/assessments/cyber-security/*" element={<CyberSecurityAssessment />} />
          {/* Direct route for Full Stack DotNet assessment */}
          <Route path="/assessments/full-stack-dotnet/*" element={<FullStackDotNetAssessment />} />
          {/* Direct route for Ethical Hacking assessment */}
          <Route path="/assessments/ethical-hacking/*" element={<EthicalHackingAssessment />} />
          {/* Direct route for DevOps assessment */}
          <Route path="/assessments/devops/*" element={<DevOpsAssessment />} />
          {/* Direct route for Gen AI assessment */}
          <Route path="/assessments/gen-ai/*" element={<GenAIAssessment />} />
          {/* Direct route for MERN Stack assessment */}
          <Route path="/assessments/mern-stack/*" element={<MERNStackAssessment />} />
          {/* Direct route for Multi Cloud Engineer assessment */}
          <Route path="/assessments/multi-cloud-engineer/*" element={<MultiCloudEngineerAssessment />} />
          {/* Direct route for Scrum Master assessment */}
          <Route path="/assessments/scrum-master/*" element={<ScrumMasterAssessment />} />
          {/* Direct route for AWS assessment */}
          <Route path="/assessments/aws/*" element={<AWSAssessment />} />
          {/* Direct route for Full Stack JAVA assessment */}
          <Route path="/assessments/full-stack-java/*" element={<FullStackJAVAAssessment />} />
          {/* Direct route for ServiceNow assessment */}
          <Route path="/assessments/servicenow/*" element={<ServicenowAssessment />} />
          {/* Direct route for Power BI & Tableau assessment */}
          <Route path="/assessments/powerbi-tableau/*" element={<PowerBIAssessment />} />
          {/* Direct route for Microsoft Dynamics 365 assessment */}
          <Route path="/assessments/microsoft-dynamics-365/*" element={<Microsoft365Assessment />} />
          {/* Direct route for Digital Marketing assessment */}
          <Route path="/assessments/digital-marketing/*" element={<DigitalMarketingAssessment />} />
          {/* Direct route for Medical Coding assessment */}
          <Route path="/assessments/medical-coding/*" element={<MedicalCodingAssessment />} />
          {/* Direct route for React JS assessment */}
          <Route path="/assessments/react-js/*" element={<ReactJSAssessment />} />
          {/* Add more assessment routes here, e.g. /assessments/aws, /assessments/azure, etc. */}
          <Route path="/assessment/:id" element={<Assessment />} />
          <Route path="/results/:id" element={<Results />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
