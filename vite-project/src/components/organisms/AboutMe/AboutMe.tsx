import HeadingEl from "../../atoms/HeadingEl";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <HeadingEl number={2} text="About Me" />
      <div className="about__text">
        <p>Hey there!</p>
        <p>
          I'm a frontend developer with a passion for design and a love for
          turning ideas into stunning, user-friendly websites. My journey into
          the world of coding began with learning Python, but it didn't take
          long for me to discover my true love for frontend development.
        </p>
        <p>
          Frontend development is my canvas, and I am the artist. With a touch
          of wizardry and a sprinkle of magic, I transform code into captivating
          digital experiences.
        </p>
        <p>
          Accessibility is at the heart of everything I build because I believe
          that the web should be a place where everyone can explore and engage
          without barriers.
        </p>
        <p>Let's connect and create something amazing together! ⭐</p>
      </div>
    </section>
  );
};

export default AboutMe;
