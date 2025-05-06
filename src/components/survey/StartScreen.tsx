
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import { useSurvey } from "@/contexts/SurveyContext";
import { ArrowRight } from "lucide-react";
import FacebookReviews from "@/components/FacebookReviews";
import { useIsMobile } from "@/hooks/use-mobile";

const StartScreen = () => {
  const { goToStep } = useSurvey();
  const isMobile = useIsMobile();
  
  const handleStart = () => {
    // Skip directly to results page (step 5)
    goToStep(5);
  };
  
  return (
    <div className="max-w-md mx-auto pb-20 md:pb-0">
      <SurveyHeader title="Great news! You are among the first to join our Ultra Beauty Program!" />
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-center text-lg mb-4">
          Get a <span className="text-orange-500 font-semibold">Ulta Beauty Gift Card</span> with the Ultra Beauty Program. Simply click the button below to claim your offer!
        </p>
        
        <p className="text-center mb-6">
          Ready to elevate your beauty routine? Click on the <span className="text-orange-500 font-semibold">Start</span> button below.
        </p>
      </div>

      <Button onClick={handleStart} className={`w-full bg-orange-500 hover:bg-orange-600 text-lg py-6 shadow-lg ${isMobile ? 'fixed bottom-4 left-0 right-0 max-w-xs mx-auto z-10' : ''}`}>
        Start <ArrowRight className="ml-2" />
      </Button>

      {/* Facebook Review Section - kept in the start screen */}
      <FacebookReviews />

      {/* Add some space at the bottom */}
      <div className="h-10"></div>
    </div>
  );
};

export default StartScreen;
