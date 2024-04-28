import React, { createContext, useContext, useEffect, useState } from 'react'

const ResponsiveContext = createContext();

export default function ResponsiveProvider( { children } ) {

 const [ width, setWidth ] = useState( window.innerWidth );

const breakPoints = 
{
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1440
};

 
 const value = 
 {
     isMobile: width < breakPoints.tablet,
     isTablet: width >= breakPoints.tablet && width < breakPoints.desktop,
     isDesktop: width >= breakPoints.desktop,
     isLargeDesktop: width >= breakPoints.largeDesktop
 };

 useEffect(() => {
    const handleResize = () => setWidth( width.innerWidth );
    
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize);
}, [width.innerWidth])

  return (
    <ResponsiveContext.Provider value={value}>
        {children}
    </ResponsiveContext.Provider>
  )
}

export const useResponsive = () => useContext(ResponsiveContext);