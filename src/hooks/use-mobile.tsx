
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches : false
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    // Use matchMedia for more efficient mobile detection
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Set initial value
    setIsMobile(mediaQuery.matches);
    
    // Use the more efficient event listener
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    // Use the modern API if available
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [])

  return isMobile
}
