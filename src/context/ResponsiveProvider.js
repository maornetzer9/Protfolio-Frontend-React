import React, { createContext, useContext, useEffect, useState } from 'react'
import { breakPoints } from '../hooks/breakpoints';

const ResponsiveContext = createContext();

export default function ResponsiveProvider( { children } ) {

 const [ width, setWidth ] = useState( window.innerWidth );

 useEffect(() => {
     const handleResize = () => setWidth( width.innerWidth );
     window.addEventListener('resize', handleResize);
     return window.removeEventListener('resize', handleResize);
 }, [width.innerWidth])

 const value = 
 {
     isMobile: width < breakPoints.tablet,
     isTablet: width >= breakPoints.tablet && width < breakPoints.desktop,
     isDesktop: width >= breakPoints.desktop,
     isLargeDesktop: width >= breakPoints.largeDesktop
 };
 
  return (
    <ResponsiveContext.Provider value={value}>
        {children}
    </ResponsiveContext.Provider>
  )
}

export const useResponsive = () => useContext(ResponsiveContext);