
import { useEffect } from "react";
import { useSurvey } from "@/contexts/SurveyContext";
import StartScreen from "@/components/survey/StartScreen";
import Results from "@/components/survey/Results";
import Timer from "@/components/Timer";
import FacebookReviews from "@/components/FacebookReviews";

const SurveyContainer = () => {
  const { currentStep } = useSurvey();

  // Scroll to top when step changes - crucial for mobile UX
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Smoother scrolling for better user experience
    });
  }, [currentStep]);

  return (
    <div className="w-full max-w-lg mx-auto px-3 sm:px-4 py-4 md:py-8">
      {/* Timer only visible on the results page - 2 minutes timer */}
      {currentStep === 5 && <Timer minutes={2} />}
      
      {/* Simplified steps - only start and results */}
      {currentStep === 0 && <StartScreen />}
      {currentStep === 5 && <Results />}
      
      {/* Facebook Reviews - shown in results step */}
      {currentStep === 5 && <div className="mb-20 md:mb-0"><FacebookReviews /></div>}
    </div>
  );
};

export default SurveyContainer;
