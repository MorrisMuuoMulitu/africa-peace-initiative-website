
import * as React from "react"

export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1400
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.md)
    }
    
    // Check on mount
    checkMobile()
    
    // Modern event listener approach
    const handleResize = () => {
      checkMobile()
    }
    
    // Use matchMedia for better performance
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.md - 1}px)`)
    
    mql.addEventListener("change", handleResize)
    window.addEventListener("resize", handleResize)
    
    return () => {
      mql.removeEventListener("change", handleResize)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile
}

export function useBreakpoint(breakpoint: keyof typeof BREAKPOINTS) {
  const [isBelow, setIsBelow] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkBreakpoint = () => {
      setIsBelow(window.innerWidth < BREAKPOINTS[breakpoint])
    }
    
    // Check on mount
    checkBreakpoint()
    
    // Use matchMedia for better performance
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`)
    
    const handleChange = () => {
      checkBreakpoint()
    }
    
    mql.addEventListener("change", handleChange)
    window.addEventListener("resize", handleChange)
    
    return () => {
      mql.removeEventListener("change", handleChange)
      window.removeEventListener("resize", handleChange)
    }
  }, [breakpoint])

  return isBelow
}
