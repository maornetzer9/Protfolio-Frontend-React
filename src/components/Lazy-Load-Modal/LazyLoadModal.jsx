// LazyLoadModal.js
import React, { useEffect, useRef, useState, forwardRef } from 'react';

const LazyLoadModal = forwardRef(({ children, as = 'div', ...props }, ref) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const combinedRef = ref || elementRef; // Use provided ref or local ref

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const currentElement = combinedRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [combinedRef]);

    const Tag = as; // Allows the component to use any tag type

    return (
        <Tag ref={combinedRef} {...props}>
            { !isVisible ? children : <div>Loading...</div>}
        </Tag>
    );
});

export default LazyLoadModal;
