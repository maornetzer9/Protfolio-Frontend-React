import React, { forwardRef } from 'react';

const Section = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref}> {children} </div>
  );
});

export default Section;
