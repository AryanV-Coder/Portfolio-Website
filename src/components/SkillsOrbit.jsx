import React, { useEffect, useState } from "react";
import { FaPython, FaJava, FaGithub } from "react-icons/fa";
import {
    SiCplusplus, SiDart, SiFastapi, SiFlutter, SiSpringboot, SiMysql, SiDjango, SiFlask,
    SiPostgresql, SiMongodb, SiLangchain
} from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
import "./SkillsOrbit.css";

// Inner orbit skills - Languages & Databases
const skills = [
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <FaJava color="#007396" />, name: "Java" },
    { icon: <SiDart color="#0175C2" />, name: "Dart" },
    { icon: <TbLetterC color="#A8B9CC" />, name: "C" },
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
    { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
];

// Outer orbit skills - Frameworks, AI & Tools
const skill2 = [
    { icon: <SiDjango color="#092E20" />, name: "Django" },
    { icon: <SiFastapi color="#009688" />, name: "FastAPI" },
    { icon: <SiFlask color="#000000" />, name: "Flask" },
    { icon: <SiFlutter color="#02569B" />, name: "Flutter" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <SiLangchain color="#1C3C3C" />, name: "LangChain" },
    { icon: <FaGithub color="#FFFFFF" />, name: "GitHub" },
];

const SkillsOrbit = () => {
    const [rotation, setRotation] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isLoaded) {
                        setIsLoaded(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const currentContainer = containerRef.current;

        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, [isLoaded]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev + 2);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const [radius1, setRadius1] = useState(120);
    const [radius2, setRadius2] = useState(220);

    useEffect(() => {
        const updateRadius = () => {
            const width = window.innerWidth;

            if (width < 480) {
                setRadius1(50);
                setRadius2(90);
            } else if (width < 768) {
                setRadius1(70);
                setRadius2(120);
            } else if (width < 1024) {
                setRadius1(90);
                setRadius2(140);
            } else if (width < 1280) {
                setRadius1(100);
                setRadius2(160);
            } else {
                setRadius1(120);
                setRadius2(220);
            }
        };

        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    return (
        <div ref={containerRef} className={`orbit-container ${isLoaded ? 'loaded' : ''}`}>
            <div className="center-text">Skills</div>

            {/* Inner Orbit */}
            <div className="orbit" style={{ transform: `rotate(${-rotation}deg)` }}>
                {skills.map((skill, index) => {
                    const angle = (360 / skills.length) * index;
                    return (
                        <div
                            key={index}
                            className="orbit-item"
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius1}px) rotate(${rotation - angle}deg)`,
                            }}
                        >
                            {skill.icon}
                        </div>
                    );
                })}
            </div>

            {/* Outer Orbit */}
            <div className="orbit" style={{ transform: `rotate(${rotation}deg)` }}>
                {skill2.map((skill, index) => {
                    const angle = (360 / skill2.length) * index;
                    return (
                        <div
                            key={index}
                            className="orbit-item"
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius2}px) rotate(-${rotation + angle}deg)`,
                            }}
                        >
                            {skill.icon}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsOrbit;
