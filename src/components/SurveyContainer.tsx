
import { useEffect } from "react";
import { useSurvey } from "@/contexts/SurveyContext";
import StartScreen from "@/components/survey/StartScreen";
import Results from "@/components/survey/Results";
import Timer from "@/components/Timer";
import FacebookReviews from "@/components/FacebookReviews";

const SurveyContainer = () => {
  const { currentStep } = useSurvey();

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8">
      {/* Timer only visible on the results page */}
      {currentStep === 5 && <Timer minutes={15} />}
      
      {/* Simplified steps - only start and results */}
      {currentStep === 0 && <StartScreen />}
      {currentStep === 5 && <Results />}
      
      {/* Facebook Reviews - shown in both steps */}
      {currentStep !== 0 && <FacebookReviews />}
    </div>
  );
};

export default SurveyContainer;
