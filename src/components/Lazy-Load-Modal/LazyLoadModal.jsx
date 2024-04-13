import React, { useEffect, useRef, useState, forwardRef } from 'react';
import Loading from '../Loading/Loading';

const LazyLoadModal = forwardRef(({ children, as = 'div', ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [loadingDuration, setLoadingDuration] = useState(2); // Default to 2 seconds
    const internalRef = useRef(null);
    const loadStartTime = useRef(Date.now()); // Start timing on component creation

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
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const loadEndTime = Date.now();
                    const duration = (loadEndTime - loadStartTime.current) / 1000; // Calculate duration in seconds
                    setLoadingDuration(duration);
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
                observer.disconnect(); // Proper cleanup on unmount
            }
        };
    }, []);

    const Tag = as;

    return (
        <Tag ref={setRef} {...props}>
            {isVisible ? children : <Loading duration={loadingDuration} />}
        </Tag>
    );
});

export default LazyLoadModal;
