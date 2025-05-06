
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    // Use resize observer for better performance than resize event
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check immediately
    checkMobile()
    
    // Use ResizeObserver if available, with fallback to event listener
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(checkMobile);
      resizeObserver.observe(document.body);
      return () => resizeObserver.disconnect();
    } else {
      // Fallback to resize event with debouncing
      let timeoutId: number | undefined;
      const debouncedResize = () => {
        if (timeoutId) window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(checkMobile, 100);
      };
      
      window.addEventListener("resize", debouncedResize);
      return () => {
        window.removeEventListener("resize", debouncedResize);
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    }
  }, [])

  return isMobile
}
