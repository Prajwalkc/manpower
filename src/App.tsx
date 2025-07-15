import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Demand from "./pages/Demand";
import RecruitmentAndSelection from "./pages/RecruitmentAndSelection";
import InternationalPlacement from "./pages/InternationalPlacement";
import DocumentationSupport from "./pages/DocumentationSupport";
import CorporateStaffing from "./pages/CorporateStaffing";
import SkillsTraining from "./pages/SkillsTraining";
import EthicalRecruitment from "./pages/EthicalRecruitment";
import Candidates from "./pages/Candidates";
import MasonCandidates from "./pages/candidates/Mason";
import SecurityGuardCandidates from "./pages/candidates/SecurityGuard";
import ElectricianCandidates from "./pages/candidates/Electrician";
import OfficeStaffCandidates from "./pages/candidates/OfficeStaff";
import HousekeeperCandidates from "./pages/candidates/Housekeeper";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/recruitment"
            element={<RecruitmentAndSelection />}
          />
          <Route
            path="/services/international"
            element={<InternationalPlacement />}
          />
          <Route
            path="/services/documentation"
            element={<DocumentationSupport />}
          />
          <Route path="/services/corporate" element={<CorporateStaffing />} />
          <Route path="/services/training" element={<SkillsTraining />} />
          <Route path="/services/ethical" element={<EthicalRecruitment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demand" element={<Demand />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/mason" element={<MasonCandidates />} />
          <Route
            path="/candidates/security-guard"
            element={<SecurityGuardCandidates />}
          />
          <Route
            path="/candidates/electrician"
            element={<ElectricianCandidates />}
          />
          <Route
            path="/candidates/office-staff"
            element={<OfficeStaffCandidates />}
          />
          <Route
            path="/candidates/housekeeper"
            element={<HousekeeperCandidates />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
