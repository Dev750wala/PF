import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiSolidity,
  SiEthereum,
} from "react-icons/si";

import { Marquee } from "@devnomic/marquee";
// if you copy ala shadcn, no need import css.
import "@devnomic/marquee/dist/index.css";

const SkillDisplay = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const technologies = [
    { name: "HTML", icon: <SiHtml5 className={`bg-transparent `} /> },
    { name: "CSS", icon: <SiCss3 className="bg-transparent" /> },
    { name: "JavaScript", icon: <SiJavascript className="bg-transparent" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="bg-transparent" /> },
    { name: "Node.js", icon: <SiNodedotjs className="bg-transparent" /> },
    { name: "TypeScript", icon: <SiTypescript className="bg-transparent" /> },
    { name: "Express.js", icon: <SiExpress className="bg-transparent" /> },
    { name: "React.js", icon: <SiReact className="bg-transparent" /> },
    { name: "Next.js", icon: <SiNextdotjs className="bg-transparent" /> },
    { name: "Redux", icon: <SiRedux className="bg-transparent" /> },
    { name: "Python", icon: <SiPython className="bg-transparent" /> },
    { name: "MongoDB", icon: <SiMongodb className="bg-transparent" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="bg-transparent" /> },
    { name: "PrismaORM", icon: <SiPrisma className="bg-transparent" /> },
    { name: "Ethereum", icon: <SiEthereum className="bg-transparent" /> },
    { name: "Solidity", icon: <SiSolidity className="bg-transparent" /> },
  ];

  return (
    <div className="container mx-auto bg-transparent" id="skills">
      <h1 className="block lg:hidden bg-transparent mb-14 font-bold pl-2 text-4xl">
        My Tech Stack
      </h1>
      <div className="flex flex-row flex-wrap md:justify-center gap-20 bg-transparent">
        {/* <Marquee
            className="bg-transparent"
            style={{backgroundColor: "transparent"}}
            fade={true}
        >
          {technologies.map((tech) => (
            <div style={{backgroundColor: "transparent"}} className="text-gray-600 bg-transparent mx-4 w-32 h-32 text-6xl" key={tech.name}>
              {tech.icon}
            </div>
          ))}
        </Marquee> */}
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name + index}
            className="relative flex items-center justify-center rounded-lg px-3 w-24 h-24 bg-transparent m-4 mx-3"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="text-6xl text-gray-600 bg-transparent"
              animate={{
                scale: hoveredIndex === index ? 0 : 1,
                filter:
                  hoveredIndex === null || hoveredIndex === index
                    ? "blur(0px)"
                    : "blur(3px)",
              }}
              transition={{ duration: 0.2 }}
            >
              {tech.icon}
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-blue-600 font-semibold overflow-hidden bg-transparent text-xl"
              style={{ position: "absolute", fontWeight: "bold" }}
              animate={{
                scale: hoveredIndex === index ? 1 : 0,
                opacity: hoveredIndex === index ? 1 : 0,
                visibility: hoveredIndex === index ? "visible" : "hidden",
              }}
              transition={{ duration: 0.2 }}
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillDisplay;
