import React, { useRef } from 'react';
import Loading from '../Loading/Loading';
import { COMPONENTS } from "../../assets/data/components";
import LazyLoadModal from '../../UI/Lazy-Load-Modal/LazyLoadModal';
import ResponsiveProvider from '../../context/ResponsiveProvider';

export default function Home() {
    const componentRefs = useRef([]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollToNextComponent = (index) => {
        if (index + 1 < componentRefs.current.length && componentRefs.current[index + 1]) 
        {
            componentRefs.current[index + 1].scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <ResponsiveProvider>
                <React.Suspense fallback={<Loading />}>
                    {COMPONENTS.map((target, index) => (
                        <LazyLoadModal 
                            key={index} 
                            ref={(el) => componentRefs.current[index] = el}
                        >
                            <target.Component
                                {...target.props}
                                onClick={() => scrollToNextComponent(index)}
                                scrollToTop={scrollToTop}
                            />
                        </LazyLoadModal>
                    ))}
                </React.Suspense>
            </ResponsiveProvider>
        </div>
    );
}
