
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSurvey } from "@/contexts/SurveyContext";
import SurveyHeader from "@/components/SurveyHeader";
import { useToast } from "@/components/ui/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

// Optimized beauty image with specified size
const BEAUTY_IMAGE = "/lovable-uploads/e69b8efa-60ee-44d2-9a0f-535b8bcaefd6.png";

const Results = () => {
  const { answers } = useSurvey();
  const { toast } = useToast();
  const [showingOffer, setShowingOffer] = useState(false);
  const isMobile = useIsMobile();

  const handleClaim = () => {
    toast({
      title: "Offer Claimed!",
      description: "Thank you! Check your email for next steps.",
      duration: 5000,
    });
  };

  return (
    <div className="max-w-md mx-auto px-2 md:px-4 pb-28 md:pb-0">
      {!showingOffer ? (
        <>
          <SurveyHeader 
            title="Congratulations!" 
            subtitle="Fantastic news! Your participation is confirmed. Continue to the next step to receive your Ulta Beauty gift card:"
            className="mb-4 md:mb-4"
          />
          
          <div className="mb-5 md:mb-4 space-y-3 md:space-y-3">
            {/* Product Image with native loading optimization */}
            <div className="bg-white p-3 md:p-3 rounded-lg shadow-sm">
              <div className="max-w-[240px] mx-auto">
                <AspectRatio ratio={4/3} className="bg-muted">
                  <img 
                    src={BEAUTY_IMAGE}
                    alt="Ulta Beauty products" 
                    className="rounded-md object-cover w-full h-full"
                    width="240"
                    height="180"
                    decoding="sync"
                    loading="eager"
                  />
                </AspectRatio>
              </div>
            </div>
            
            {/* Orange promotional text */}
            <div className="text-center px-4 py-3 bg-orange-50 rounded-lg border border-orange-100">
              <p className="text-orange-600 font-medium text-sm md:text-sm">
                Upgrade your beauty routine! Claim Ulta Beauty products and elevate your self-care!
              </p>
            </div>
          </div>
          
          {/* Fixed CTA button for mobile with higher z-index to ensure it's always visible */}
          <div className={isMobile ? "fixed bottom-4 left-0 right-0 z-50 px-4" : ""}>
            <a 
              href="https://glstrck.com/aff_c?offer_id=839&aff_id=25969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full"
            >
              <Button 
                className={`w-full bg-green-600 hover:bg-green-700 py-5 md:py-6 text-xl md:text-lg font-bold ${isMobile ? 'shadow-lg rounded-xl h-16 text-2xl' : ''}`}
              >
                Continue to Claim Your Reward
              </Button>
            </a>
          </div>
          
          <p className="text-xs md:text-sm text-center text-gray-500 mt-3 md:mt-4">
            Limited time offer. Your reward is reserved for the time shown in the timer.
          </p>
        </>
      ) : null}
    </div>
  );
};

export default Results;
