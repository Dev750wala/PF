import React, {useState} from "react";
import { L_bio } from "../../Data";
import { Link as ScrollLink } from "react-scroll";

const Left1 = () => {
  const [isHovered, setIsHovered] = useState([false, false, false, false]);

  return (
    <div className="mb-20 bg-transparent">
      <div className="mb-20 bg-transparent">
        <h1 className="font-extrabold bg-transparent text-4xl pb-1 cursor-pointer">
          Dev Sadisatsowala
        </h1>
        <h5 className="mb-4 md:text-sm lg:text-xl bg-transparent text-base">
          Web3 Development Trainee
        </h5>
        <p className="text-gray-400 bg-transparent">{L_bio.bio}</p>
      </div>

      <div className="bg-transparent lg:block hidden">
        <h6 className="text-sm my-3 bg-transparent group">
          <ScrollLink
            onMouseEnter={() => setIsHovered([true, false, false, false])}
            onMouseLeave={() => setIsHovered([false, false, false, false])}
            className="font-bold bg-transparent no-underline text-gray-400 group-hover:text-gray-200 cursor-pointer tracking-widest text-xs"
            to="about"
            duration={500}
            offset={-120}
            style={{
              letterSpacing: "0.15rem",
              color: isHovered[0] ? "#dfe5f7" : "",
              transitionDuration: "0.2s",
            }}
          >
            ABOUT
          </ScrollLink>
        </h6>
        <h6 className="text-sm my-3 bg-transparent group">
          <ScrollLink
            onMouseEnter={() => setIsHovered([false, true, false, false])}
            onMouseLeave={() => setIsHovered([false, false, false, false])}
            className="font-bold bg-transparent no-underline text-gray-400 group-hover:text-gray-200 cursor-pointer tracking-widest text-xs"
            to="skills"
            duration={500}
            offset={-110}
            style={{
              letterSpacing: "0.15rem",
              color: isHovered[1] ? "#dfe5f7" : "",
              transitionDuration: "0.2s",
            }}
          >
            SKILLS
          </ScrollLink>
        </h6>
        <h6 className="text-sm my-3 bg-transparent group">
          <ScrollLink
            onMouseEnter={() => setIsHovered([false, false, true, false])}
            onMouseLeave={() => setIsHovered([false, false, false, false])}
            className="font-bold bg-transparent no-underline text-gray-400 group-hover:text-gray-200 cursor-pointer tracking-widest text-xs"
            to="projects"
            duration={500}
            offset={-100}
            style={{
              letterSpacing: "0.15rem",
              color: isHovered[2] ? "#dfe5f7" : "",
              transitionDuration: "0.2s",
            }}
          >
            PROJECTS
          </ScrollLink>
        </h6>
        <h6 className="text-sm my-3 bg-transparent group">
          <ScrollLink
            onMouseEnter={() => setIsHovered([false, false, false, true])}
            onMouseLeave={() => setIsHovered([false, false, false, false])}
            className="font-bold bg-transparent no-underline text-gray-400 group-hover:text-gray-200 cursor-pointer tracking-widest text-xs"
            to="education"
            duration={500}
            offset={-100}
            style={{
              letterSpacing: "0.15rem",
              color: isHovered[3] ? "#dfe5f7" : "",
              transitionDuration: "0.2s",
            }}
          >
            EDUCATION
          </ScrollLink>
        </h6>
      </div>
    </div>
  );
};

export default Left1;
