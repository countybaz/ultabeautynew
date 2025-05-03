
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import SurveyOption from "@/components/SurveyOption";
import { useSurvey } from "@/contexts/SurveyContext";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Step1 = () => {
  const { goToNextStep, setAnswer } = useSurvey();
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNext = () => {
    if (selected) {
      setAnswer("us_resident", selected);
      
      if (selected === "no") {
        // Redirect to the standalone rejection page
        navigate("/rejection");
      } else {
        goToNextStep();
      }
    }
  };

  return (
    <div className="max-w-md mx-auto pb-20 md:pb-0">
      <SurveyHeader 
        title=""
        subtitle="We need some information to get started."
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Do you live in the United States?</h2>
        <p className="text-sm text-gray-600 mb-4">We are looking for participants from the US only</p>
        <div className="space-y-3">
          <SurveyOption 
            label="Yes" 
            selected={selected === "yes"} 
            onClick={() => setSelected("yes")}
          />
          <SurveyOption 
            label="No" 
            selected={selected === "no"} 
            onClick={() => setSelected("no")}
          />
        </div>
      </div>

      <Button 
        onClick={handleNext} 
        disabled={!selected}
        className={`w-full py-5 text-lg bg-orange-500 hover:bg-orange-600 shadow-lg ${isMobile ? 'fixed bottom-4 left-0 right-0 max-w-xs mx-auto z-10' : ''}`}
      >
        Continue
      </Button>
    </div>
  );
};

export default Step1;
