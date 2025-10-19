import React, { useEffect, useState } from "react";
import { FaPython, FaJava, FaGithub } from "react-icons/fa";
import {
    SiCplusplus, SiDart, SiFastapi, SiFlutter, SiSpringboot, SiMysql, SiGooglegemini
} from "react-icons/si";
import { TbLetterC, TbBrandOpenai } from "react-icons/tb";
import "./SkillsOrbit.css";

// Inner orbit skills - Your Languages (Original Brand Colors)
const skills = [
    { icon: <TbLetterC color="#A8B9CC" />, name: "C" }, 
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <FaJava color="#007396" />, name: "Java" }, // Java official color
    { icon: <SiDart color="#0175C2" />, name: "Dart" },
    { icon: <FaGithub color="#FFFFFF" />, name: "GitHub" }, // Added GitHub
];

// Outer orbit skills - Your Frameworks & APIs (Original Brand Colors)
const skill2 = [
    { icon: <SiFastapi color="#009688" />, name: "FastAPI" }, // FastAPI teal
    { icon: <SiFlutter color="#02569B" />, name: "Flutter" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { icon: <TbBrandOpenai color="#412991" />, name: "OpenAI" }, // OpenAI purple
    { icon: <SiGooglegemini color="#8E75B2" />, name: "Gemini" }, // Google Gemini purple
];

const SkillsOrbit = () => {
    const [rotation, setRotation] = useState(0);

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
        <div className="orbit-container">
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
