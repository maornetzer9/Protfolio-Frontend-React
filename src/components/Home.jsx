import React from "react";
import Section from "./Section";
import { COMPONENTS } from "../assets/data/components";

export default function Home() {
    const componentRefs = [];

    const setRef = (index, el) => (componentRefs[index] = el);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollToNextComponent = (index) => {
        if (index + 1 < componentRefs.length && componentRefs[index + 1]) {
            window.innerWidth <= 768 
              ? window.scrollBy({ top: 770, behavior: 'smooth' })
                : componentRefs[index + 1].scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            {COMPONENTS.length ?
                COMPONENTS.map((target, index) => (
                    <Section key={index} ref={(el) => setRef(index, el)}>
                        <target.Component
                            {...target.props}
                            onClick={() => scrollToNextComponent(index)}
                            scrollToTop={scrollToTop}
                        />
                    </Section>
                )) 
                : null } 
        </div>
    );
}
