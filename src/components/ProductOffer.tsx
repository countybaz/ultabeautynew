
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductOfferProps {
  onClaim: () => void;
}

// Define optimized beauty image path
const BEAUTY_IMAGE = "/lovable-uploads/e69b8efa-60ee-44d2-9a0f-535b8bcaefd6.png";

const ProductOffer = ({ onClaim }: ProductOfferProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-4 md:p-6 max-w-md mx-auto bg-white pb-28 md:pb-6">
      <div className="text-center mb-4 md:mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">Congratulations!</h3>
        <p className="text-green-600 font-medium text-sm md:text-base">You've qualified for our special offer!</p>
      </div>

      <div className="mb-5 md:mb-6">
        {/* Display the beauty image with proper aspect ratio and optimized loading */}
        <div className="w-full relative rounded-md overflow-hidden">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src={BEAUTY_IMAGE}
              alt="Ulta Beauty Products" 
              className="w-full h-full object-cover rounded-md"
              width="400"
              height="300"
              decoding="sync"
              loading="eager"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.onerror = null;
                console.log("Product image failed to load, using fallback");
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </AspectRatio>
        </div>
      </div>

      <div className="mb-5 md:mb-6">
        <h4 className="font-bold text-base md:text-lg mb-3">Ulta Beauty Gift Card</h4>
        <div className="flex items-center mb-2">
          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
          <span className="text-gray-700 text-sm md:text-base">Premium beauty products</span>
        </div>
        <div className="flex items-center mb-2">
          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
          <span className="text-gray-700 text-sm md:text-base">Skincare & makeup essentials</span>
        </div>
        <div className="flex items-center mb-2">
          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
          <span className="text-gray-700 text-sm md:text-base">Use in-store or online</span>
        </div>
      </div>

      <div className="mb-5 md:mb-6 text-center">
        <div className="flex items-center justify-center">
          <span className="text-gray-500 line-through text-base md:text-lg mr-3">$500.00</span>
          <span className="text-xl md:text-2xl font-bold text-green-600">$29.99</span>
        </div>
        <p className="text-orange-500 font-medium text-xs md:text-sm mt-2">+ FREE Shipping</p>
      </div>

      <a 
        href="https://glstrck.com/aff_c?offer_id=839&aff_id=25969" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-full"
      >
        <Button 
          className={`w-full py-5 md:py-6 text-xl font-bold md:text-lg bg-green-600 hover:bg-green-700 shadow-lg ${isMobile ? 'fixed bottom-4 left-0 right-0 max-w-[92%] mx-auto z-50 rounded-xl h-16 text-2xl' : 'mt-4 md:mt-6'}`}
        >
          CLAIM NOW
        </Button>
      </a>

      <p className="text-[10px] md:text-xs text-center text-gray-500 mt-3 md:mt-4">
        Limited quantity available. Offer valid while supplies last.
      </p>
    </div>
  );
};

export default ProductOffer;
