
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check on mount
    checkMobile()
    
    // Check on resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern event listener approach
    const handleChange = () => {
      checkMobile()
    }
    
    mql.addEventListener("change", handleChange)
    window.addEventListener("resize", handleChange)
    
    return () => {
      mql.removeEventListener("change", handleChange)
      window.removeEventListener("resize", handleChange)
    }
  }, [])

  return isMobile
}
