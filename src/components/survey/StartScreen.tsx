
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import { useSurvey } from "@/contexts/SurveyContext";
import { ArrowRight } from "lucide-react";
import FacebookReviews from "@/components/FacebookReviews";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useId } from "react";

// Define logo path at the top for easy reference
const LOGO_IMAGE = "/lovable-uploads/07bbc17e-ed17-4c74-bca2-bcb1eb25135f.png";

const StartScreen = () => {
  const { goToStep } = useSurvey();
  const isMobile = useIsMobile();
  const uniqueId = useId(); // For stable IDs

  const handleStart = () => {
    // Skip directly to results page (step 5)
    goToStep(5);
  };
  
  return (
    <div className="max-w-md mx-auto pb-28 md:pb-6">
      <SurveyHeader title="Great news! You are among the first to join our Ulta Beauty Program!" />
      
      <div className="bg-white p-5 md:p-6 rounded-lg shadow-md mb-5 md:mb-6">
        <p className="text-center text-base md:text-lg mb-4 md:mb-4">
          Get a <span className="text-orange-500 font-semibold">Ulta Beauty Gift Card</span> with the Ulta Beauty Program. Simply click the button below to claim your offer!
        </p>
        
        <p className="text-center mb-4 md:mb-6 text-sm md:text-base">
          Ready to elevate your beauty routine? Click on the <span className="text-orange-500 font-semibold">Start</span> button below.
        </p>
      </div>

      {/* Facebook Review Section shown on the start screen */}
      <div className="mt-6 mb-24 md:mb-6">
        <FacebookReviews />
      </div>

      {/* Enlarged button for mobile users */}
      <Button 
        onClick={handleStart} 
        id={`start-button-${uniqueId}`}
        className={`w-full bg-orange-500 hover:bg-orange-600 text-xl md:text-lg py-6 md:py-6 shadow-lg font-bold ${
          isMobile ? 'fixed bottom-4 left-0 right-0 max-w-[92%] mx-auto z-50 rounded-xl h-16 text-2xl' : ''
        }`}
      >
        Start <ArrowRight className="ml-2 h-6 w-6" />
      </Button>
    </div>
  );
};

// Add displayName for better debugging
StartScreen.displayName = 'StartScreen';

export default StartScreen;
