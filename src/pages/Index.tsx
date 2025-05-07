
import { SurveyProvider, useSurvey } from "@/contexts/SurveyContext";
import { lazy, Suspense, memo } from "react";
import { Link } from "react-router-dom";

// Import critical components directly
import SurveyContainer from "@/components/SurveyContainer";

// Lazy load non-critical components
const FAQ = lazy(() => import("@/components/FAQ"));

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center">
      <SurveyProvider>
        <header className="shadow-sm py-2 bg-white h-auto md:h-24 flex items-center">
          <div className="container mx-auto px-4 flex items-center justify-center">
            <HeaderContent />
          </div>
        </header>
        
        <main className="container mx-auto relative">
          <SurveyContainer />
        </main>
      </SurveyProvider>

      <footer className="bg-white border-t mt-12 pt-6 pb-24 md:pb-6">
        <div className="container mx-auto px-4 py-4 text-center">
          {/* Legal Links Section - Header stands out, links are Apple-style */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-800 bg-gray-100 inline-block px-4 py-2 rounded-md">Legal Links</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link to="/terms" className="text-orange-500 hover:underline">Terms and Conditions</Link>
              <Link to="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link>
              <Link to="/non-affiliation" className="text-orange-500 hover:underline">Non-Affiliation Disclaimer</Link>
            </div>
          </div>
          
          {/* Legal Disclaimers */}
          <div className="text-xs text-gray-600 space-y-2 px-2">
            <p>Trade names or rights associated with all trademarks on this website are the property of their respective owners and are not associated with this promotion. This offer ends at the end of 2025.</p>
            <p>This website is not part of the Facebook website or of Facebook Inc.</p>
            <p>Furthermore, this website is not endorsed in any way by Facebook. Facebook is a trademark of Facebook, Inc.</p>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} Ulta Beauty Program. All rights reserved.
            <br />
            This is a limited time promotional offer. Terms and conditions apply.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Create an optimized separate component for the header content
const HeaderContent = memo(() => {
  const { goToStep } = useSurvey();
  
  const handleLogoClick = () => {
    goToStep(0);
  };
  
  return (
    <div 
      className="flex flex-col md:flex-row items-center cursor-pointer py-2" 
      onClick={handleLogoClick}
    >
      <img 
        src="/lovable-uploads/07bbc17e-ed17-4c74-bca2-bcb1eb25135f.png" 
        alt="Ulta Beauty Program Logo" 
        className="h-16 md:h-24 mb-2 md:mb-0 md:mr-4"
        loading="eager"
        width="64"
        height="64"
        decoding="async"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/lovable-uploads/07bbc17e-ed17-4c74-bca2-bcb1eb25135f.png";
        }}
      />
      <div className="flex items-center">
        <h1 className="text-lg md:text-xl font-bold text-orange-500">Ulta Beauty Program</h1>
        <div className="ml-3">
          <Suspense fallback={<div className="w-8 h-8" />}>
            <FAQ />
          </Suspense>
        </div>
      </div>
    </div>
  );
});

HeaderContent.displayName = 'HeaderContent';

export default Index;
