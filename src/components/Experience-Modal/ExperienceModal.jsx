import React, { useEffect, useState } from "react";
import "./experienceModal.css"; 

export default function ExperienceModal({ onClick = () => {}, JOURNEY = [], EXPERIENCE = [] }) {

    const [height, setHeight] = useState(window.innerHeight <= 768 ? '100px' : '20px');

    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight <= 768 ? '100px' : '20px');

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div>
            {JOURNEY.map(
                ({ image, title, subTitle, textButton, steps: { one, two, three, four } }, index) => (
                    <div key={index} className="experienceContainer">
                        <div>
                            <img 
                                src={image} 
                                alt={title} 
                                loading="lazy" 
                                className="experienceImage" 
                            />
                        </div>
                        <div 
                            dir="ltr" 
                            className="journeyContent" 
                            // style={{padding: '0', width:'85%', display:'flex'}} 
                        >
                            <h2>{title}</h2>
                            <p>{subTitle}</p>
                            <ul>
                                <li>{one}</li>
                                <li>{two}</li>
                                <li>{three}</li>
                                <li>{four}</li>
                            </ul>
                            <button onClick={onClick} className="experienceButton">
                                {textButton}
                            </button>
                        </div>
                    </div>
                )
            )}

            {EXPERIENCE.map(
                ({ image, title, subTitle, textButton, steps: { one, two, three, four } }, index) => (
                    <div key={index} className="experienceContainer" dir="rtl">
                        <div className="experienceImageRight">
                            <img 
                                src={image} 
                                alt={title} 
                                loading="lazy" 
                                className="experienceImage" 
                                height={height}
                            />
                        </div>
                        <div className="experienceContent" dir="ltr">
                            <h2>{title}</h2>
                            <p>{subTitle}</p>
                            <ul>
                                <li>{one}</li>
                                <li>{two}</li>
                                <li>{three}</li>
                                <li>{four}</li>
                            </ul>
                            <button onClick={onClick} className="experienceButton">
                                {textButton}
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
