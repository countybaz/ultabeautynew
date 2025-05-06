
import { createContext, useContext, useState, ReactNode } from "react";

interface SurveyContextType {
  currentStep: number;
  totalSteps: number;
  answers: Record<string, string>;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  setAnswer: (questionId: string, answer: string) => void;
  goToStep: (step: number) => void;
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const useSurvey = () => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error("useSurvey must be used within a SurveyProvider");
  }
  return context;
};

interface SurveyProviderProps {
  children: ReactNode;
}

export const SurveyProvider = ({ children }: SurveyProviderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const totalSteps = 1; // Simplified to just 1 step (Start -> Results)

  const goToNextStep = () => {
    setCurrentStep((prev) => {
      // Skip directly to results (step 5)
      return prev === 0 ? 5 : prev;
    });
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const goToStep = (step: number) => {
    setCurrentStep(Math.max(0, Math.min(step, 5)));
  };

  const setAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <SurveyContext.Provider
      value={{
        currentStep,
        totalSteps,
        answers,
        goToNextStep,
        goToPreviousStep,
        setAnswer,
        goToStep,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};
