import './personModal.css'
import React, { useEffect, useState } from "react";

export default function PersonModal({ onClick = () => {}, PERSONAL = [], GOALS = [], SKILLS = [] }) {

    const [width, setWidth] = useState(window.innerWidth <= 768 ? '100%' : '50%');

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth <= 768 ? '100%' : '50%');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {PERSONAL.map((person, index) => (
                <div key={index} className="personContainer"dir="rtl">
                     <div className="person-image">
                        <img src={person.image} alt={person.title} />
                    </div>
                    <div className="textContainer" dir="ltr">
                        <h1>{person.title}</h1>
                        <h3>{person.subTitle}</h3>
                        <p>{person.text}</p>
                        <button onClick={onClick}>{person.textButton}</button>
                    </div>
                   
                </div>
            ))}
            {GOALS.map((goal, index) => (
                <div key={index} className="personContainer" dir="ltr">
                    <div className="goal-image">
                        <img src={goal.image} alt={goal.title} />
                    </div>
                    <div 
                        dir="rtl" 
                        className="textContainer" 
                        style={{ width: width, alignItems: 'center',  }}
                    >
                        <h1>{goal.title}</h1>
                        <p style={{paddingRight:'50px'}}>{goal.text}</p>
                        <button onClick={onClick}>{goal.textButton}</button>
                    </div>
                </div>
            ))}
            {SKILLS.map((skill, index) => (
                <div key={index} className="personContainer">
                    <div className="textContainer">
                        <h1>{skill.title}</h1>
                        <p>{skill.text}</p>
                        <button onClick={onClick}>{skill.textButton}</button>
                    </div>
                </div>
            ))}
            <hr/>
        </div>
    );
}
