
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PerspectivaPage from "./pages/PerspectivaPage";
import IdeologiaPage from "./pages/IdeologiaPage";
import ChatPage from "./pages/ChatPage";
import VersusPage from "./pages/VersusPage";
import TestsPage from "./pages/TestsPage";
import PerfilPage from "./pages/PerfilPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/perspectiva/:ideologia" element={<PerspectivaPage />} />
          <Route path="/ideologia/:ideologia" element={<IdeologiaPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/versus" element={<VersusPage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
