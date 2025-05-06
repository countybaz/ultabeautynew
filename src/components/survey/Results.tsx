
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSurvey } from "@/contexts/SurveyContext";
import ProductOffer from "@/components/ProductOffer";
import SurveyHeader from "@/components/SurveyHeader";
import { useToast } from "@/components/ui/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";

// Define new beauty image path with optimized sizing
const BEAUTY_IMAGE = "/lovable-uploads/e69b8efa-60ee-44d2-9a0f-535b8bcaefd6.png?q=25&w=400";

const Results = () => {
  const { answers } = useSurvey();
  const { toast } = useToast();
  const [showingOffer, setShowingOffer] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();

  // Immediately set image as loaded for faster perceived performance
  useEffect(() => {
    setImageLoaded(true);
    
    // Still load the actual image for better quality once available
    const img = new Image();
    img.src = BEAUTY_IMAGE;
  }, []);

  const handleClaim = () => {
    toast({
      title: "Offer Claimed!",
      description: "Thank you! Check your email for next steps.",
      duration: 5000,
    });
  };

  return (
    <div className="max-w-md mx-auto px-2 md:px-4">
      {!showingOffer ? (
        <>
          <SurveyHeader 
            title="Congratulations!" 
            subtitle="Fantastic news! Your participation is confirmed. Continue to the next step to receive your Ulta Beauty gift card:"
            className="mb-3 md:mb-4"
          />
          
          <div className="mb-3 md:mb-4 space-y-2 md:space-y-3">
            {/* Product Image - using the beauty products image with proper aspect ratio */}
            <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm">
              <div className="max-w-[240px] mx-auto">
                <AspectRatio ratio={4/3} className="bg-muted">
                  {!imageLoaded ? (
                    <Skeleton className="w-full h-full rounded-md" />
                  ) : (
                    <img 
                      src={BEAUTY_IMAGE} 
                      alt="Ulta Beauty products" 
                      className="rounded-md object-cover w-full h-full"
                      loading="eager"
                      fetchPriority="high"
                      width="240"
                      height="180"
                      decoding="async"
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                </AspectRatio>
              </div>
            </div>
            
            {/* Orange promotional text */}
            <div className="text-center px-3 py-2 bg-orange-50 rounded-lg border border-orange-100">
              <p className="text-orange-600 font-medium text-xs md:text-sm">
                Upgrade your beauty routine! Claim Ulta Beauty products and elevate your self-care!
              </p>
            </div>
          </div>
          
          {/* Fixed CTA button for mobile - Updated with new URL */}
          <div className={isMobile ? "sticky bottom-4 z-10 mt-4 px-1" : ""}>
            <a 
              href="https://glstrck.com/aff_c?offer_id=839&aff_id=25969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full"
            >
              <Button 
                className={`w-full bg-orange-500 hover:bg-orange-600 py-4 md:py-6 text-base md:text-lg ${isMobile ? 'shadow-lg' : ''}`}
              >
                Continue to Claim Your Reward
              </Button>
            </a>
          </div>
          
          <p className="text-xs md:text-sm text-center text-gray-500 mt-3 md:mt-4 pb-16">
            Limited time offer. Your reward is reserved for the time shown in the timer.
          </p>
        </>
      ) : (
        <ProductOffer onClaim={handleClaim} />
      )}
    </div>
  );
};

export default Results;
