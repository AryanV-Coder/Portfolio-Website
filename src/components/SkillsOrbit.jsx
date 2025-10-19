import React, { useEffect, useState } from "react";
import { FaPython, FaJava } from "react-icons/fa";
import {
    SiCplusplus, SiDart, SiFastapi, SiFlutter, SiSpringboot, SiMysql
} from "react-icons/si";
import { TbLetterC, TbBrandOpenai } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";
import "./SkillsOrbit.css";

// Inner orbit skills - Your Languages
const skills = [
    { icon: <TbLetterC color="#A8B9CC" />, name: "C" }, 
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <FaJava color="#ED8B00" />, name: "Java" },
    { icon: <SiDart color="#0175C2" />, name: "Dart" },
];

// Outer orbit skills - Your Frameworks & APIs
const skill2 = [
    { icon: <SiFastapi color="#05998B" />, name: "FastAPI" },
    { icon: <SiFlutter color="#02569B" />, name: "Flutter" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { icon: <TbBrandOpenai color="#10A37F" />, name: "OpenAI" },
    { icon: <IoSparkles color="#F97316" />, name: "Gemini" },
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
