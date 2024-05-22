import HeadingEl from "../../atoms/HeadingEl";
import "./Skills.scss";
import html from "../../../assets/icons/html.svg";
import css from "../../../assets/icons/css.svg";
import sass from "../../../assets/icons/sass.svg";
import react from "../../../assets/icons/react.svg";
import js from "../../../assets/icons/js.svg";
import ts from "../../../assets/icons/ts.svg";
import github from "../../../assets/icons/github.svg";
import tailwind from "../../../assets/icons/tailwind.svg";
import vectorLeft from "../../../assets/skills-vector-left.svg";
import vectorRight from "../../../assets/skills-vector-right.svg";
import SkillEl from "../../atoms/SkillEl";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "SASS",
      icon: sass,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },

    {
      name: "React",
      icon: react,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "TypeScript",
      icon: ts,
    },
    {
      name: "Github",
      icon: github,
    },
  ];

  return (
    <section className="skills" id="skills">
      <HeadingEl number={3} text="Skills" />
      <p>The skills, tools and technologies I use to bring projects to life</p>
      <div className="skills__list">
        {skills.map((skill, index) => (
          <SkillEl key={index} {...skill} />
        ))}
      </div>
      <div className="skills__current">
        <p>Currently working on:</p>
        <p>Diving deeper in React and designing fun projects.</p>
      </div>
      <img
        src={vectorLeft}
        alt="splash of color"
        className="skills__vector-left"
      />
      <img
        src={vectorRight}
        alt="splash of color"
        className="skills__vector-right"
      />
      <p className="skills-ps">
        PS: Before I entered the tech industry, I was a stay-at-home mom,
        skillfully juggling code and diapers. This unique chapter of my life
        taught me invaluable lessons in patience, creativity, and multitasking —
        skills that I bring to every project I work on.
      </p>
    </section>
  );
};

export default Skills;
