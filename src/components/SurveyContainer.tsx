
import { useEffect } from "react";
import { useSurvey } from "@/contexts/SurveyContext";
import StartScreen from "@/components/survey/StartScreen";
import Results from "@/components/survey/Results";
import Timer from "@/components/Timer";
import FacebookReviews from "@/components/FacebookReviews";

// Define and preload critical components conditionally
const SurveyContainer = () => {
  const { currentStep } = useSurvey();

  // Scroll to top when step changes - crucial for mobile UX
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Smoother scrolling for better user experience
    });
    
    // Preload the Results component when on the start screen
    if (currentStep === 0) {
      import("@/components/survey/Results");
    }
  }, [currentStep]);

  // Only render what's needed based on the current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <StartScreen />;
      case 5:
        return (
          <>
            <Results />
            <div className="mb-20 md:mb-0">
              <FacebookReviews />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-3 sm:px-4 py-4 md:py-8">
      {/* Timer only visible on the results page - 2 minutes timer */}
      {currentStep === 5 && <Timer minutes={2} />}
      
      {/* Render only the current step */}
      {renderCurrentStep()}
    </div>
  );
};

export default SurveyContainer;
