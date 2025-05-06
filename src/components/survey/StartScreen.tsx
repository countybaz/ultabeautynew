
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import { useSurvey } from "@/contexts/SurveyContext";
import { ArrowRight } from "lucide-react";
import FacebookReviews from "@/components/FacebookReviews";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const StartScreen = () => {
  const { goToStep } = useSurvey();
  const isMobile = useIsMobile();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload logo image for faster perceived load time
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/lovable-uploads/07bbc17e-ed17-4c74-bca2-bcb1eb25135f.png";
  }, []);
  
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

      <Button 
        onClick={handleStart} 
        className={`w-full bg-orange-500 hover:bg-orange-600 text-base md:text-lg py-5 md:py-6 shadow-lg ${isMobile ? 'fixed bottom-4 left-0 right-0 max-w-[92%] mx-auto z-20 rounded-xl' : ''}`}
      >
        Start <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default StartScreen;
