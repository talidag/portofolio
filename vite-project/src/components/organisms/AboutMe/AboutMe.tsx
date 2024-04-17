import HeadingEl from "../../atoms/HeadingEl";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about">
      <HeadingEl number={2} text="About Me" />
      <div className="about__text">
        <p>Hey there!</p>
        <p>
          I'm a self-taught frontend developer, previously juggling code and
          diapers as a stay-at-home mom.
        </p>
        <p>
          My working journey began in a call center, where I witnessed firsthand
          people's tech struggles, especially among the elderly. This experience
          motivated me to start my coding adventure.
        </p>
        <p>
          My journey began with VBA programming, but my passion for visual
          elements led me to frontend.
        </p>
        <p>
          I'm dedicated to making the internet a better place for everyone,
          especially those who need it most.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
