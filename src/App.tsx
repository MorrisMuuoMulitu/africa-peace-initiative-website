
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogArchive from "./pages/BlogArchive";
import NotFound from "./pages/NotFound";
import DonationPage from "./pages/Donation";
import EventGallery from "./pages/EventGallery";
import DiscussionHighlights from "./pages/DiscussionHighlights";

// Create a client outside of the component to avoid recreation on each render
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/donate" element={<DonationPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/archive" element={<BlogArchive />} />
              <Route path="/event-gallery" element={<EventGallery />} />
              <Route path="/discussion-highlights" element={<DiscussionHighlights />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
