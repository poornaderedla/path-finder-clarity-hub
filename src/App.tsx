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
