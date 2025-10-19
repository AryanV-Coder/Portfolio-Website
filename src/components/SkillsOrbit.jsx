import React, { useEffect, useState } from "react";
import { FaPython, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiCplusplus, SiExpress, SiTypescript, SiNextdotjs, SiTailwindcss,
    SiMongodb
} from "react-icons/si";
import { DiMysql, DiPhp } from "react-icons/di";
import { TbLetterC } from "react-icons/tb";
import "./SkillsOrbit.css";

// Inner orbit skills - exactly as shown in reference
const skills = [
    { icon: <TbLetterC color="#A8B9CC" /> }, // C
    { icon: <SiCplusplus color="#00599C" /> }, // C++
    { icon: <FaPython color="#3776AB" /> }, // Python
    { icon: <FaJs color="#F7DF1E" /> }, // JavaScript
    { icon: <DiMysql color="#4479A1" /> }, // MySQL
    { icon: <DiPhp color="#777BB4" /> }, // PHP
];

// Outer orbit skills - exactly as shown in reference
const skill2 = [
    { icon: <FaReact color="#61DBFB" /> }, // React
    { icon: <FaNodeJs color="#8CC84B" /> }, // Node.js
    { icon: <SiTypescript color="#3178C6" /> }, // TypeScript
    { icon: <SiNextdotjs color="#FFFFFF" /> }, // Next.js (white)
    { icon: <SiExpress color="#FFFFFF" /> }, // Express (white)
    { icon: <SiMongodb color="#4DB33D" /> }, // MongoDB
    { icon: <SiTailwindcss color="#38B2AC" /> }, // Tailwind CSS
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
