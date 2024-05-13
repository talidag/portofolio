import HeadingEl from "../../atoms/HeadingEl";
import greenmind from "../../../assets/portofolio-1.png";
import omegaCars from "../../../assets/portofolio-2.png";
import asociatie from "../../../assets/portofolio-3.png";
import ProjectEl from "../../molecules/ProjectEl";

const Projects = () => {
  const projectsData = [
    {
      name: "OmegaCars",
      img: omegaCars,
      text: "In a recent collaboration, I partnered with a backend developer to create a form with places-autocomplete and implemented authentication using JWT Tokens with private routes.",
      link: "https://omegacarsbasingstoke.co.uk/",
    },
    {
      name: "Asociatia Oportunitati si Cariere",
      img: asociatie,
      text: "I'm currently leading a frontend team, managing tasks for our website project. We're using plain JavaScript and focusing on improving collaboration.",
      link: "https://peviitor-ro.github.io/oportunitatisicariere/",
    },
    {
      name: "Greenmind",
      img: greenmind,
      text: "In this project, I've integrated TypeScript with Auth0 for authentication and Stripe for payments, ensuring a smooth and secure user experience.",
      link: "https://greenmind-tg.netlify.app/",
    },
  ];
  return (
    <section className="projects" id="projects">
      <HeadingEl number={4} text="Projects" />
      <div className="projects__all">
        {projectsData.map((project, index) => (
          <ProjectEl key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
