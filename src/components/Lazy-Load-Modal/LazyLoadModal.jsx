import React, { useEffect, useRef, useState, forwardRef } from 'react';
import Loading from '../Loading/Loading';

const LazyLoadModal = forwardRef(({ children, as = 'div', ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const internalRef = useRef(null);

    // Combined ref function that updates both internal and forwarded ref
    const setRef = (node) => {
        internalRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            console.log("Observation:", entries);  // Log entries to see what's being observed
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
    
        const currentElement = internalRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }
    
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [internalRef]); // Use internalRef directly

    const Tag = as;

    return (
        <Tag ref={setRef} {...props}>
            {isVisible ? children : <Loading />}
        </Tag>
    );
});

export default LazyLoadModal;
