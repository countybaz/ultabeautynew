
import { useEffect, lazy, Suspense } from "react";
import { useSurvey } from "@/contexts/SurveyContext";
import Timer from "@/components/Timer";
import FacebookReviews from "@/components/FacebookReviews";

// Regular import for the start screen (critical path)
import StartScreen from "@/components/survey/StartScreen";

// Lazy import for the results screen (loaded only when needed)
const Results = lazy(() => import("@/components/survey/Results"));

const SurveyContainer = () => {
  const { currentStep } = useSurvey();

  // Scroll to top when step changes - crucial for mobile UX
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Smoother scrolling for better user experience
    });
  }, [currentStep]);
  
  // Only render what's needed based on the current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <StartScreen />;
      case 5:
        return (
          <Suspense fallback={<div className="text-center py-8">Loading your results...</div>}>
            <>
              <Results />
              <div className="mb-20 md:mb-0">
                <FacebookReviews />
              </div>
            </>
          </Suspense>
        );
      default:
        // Fallback to start screen if unexpected step
        return <StartScreen />;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-3 sm:px-4 py-4 md:py-8">
      {/* Timer only visible on the results page - 2 minutes timer */}
      {currentStep === 5 && <Timer minutes={2} />}
      
      {/* Render the current step */}
      {renderCurrentStep()}
    </div>
  );
};

export default SurveyContainer;
