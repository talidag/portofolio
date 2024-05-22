import "./Hero.scss";
import heroImg from "../../../assets/hero-img.svg";

const Hero = () => {
  const otherJobs = [
    "mom 👩‍👧",
    "wife 👩‍❤️‍👨",
    "footbal lover ⚽",
    "pescatarian 🐟",
    "stand-up fan 🎤",
    "pilates enthusiast 🧘‍♀️",
    "Saint Bernard snuggler 🐶",
    "cat servant 🐱",
  ];

  return (
    <main id="home">
      <div className="main-left">
        <p>Hello, my name is</p>
        <h1>TALIDA GANCIU</h1>
        <div className="main-left__description">
          <p>
            I'm a <span>Frontend Developer</span> with a passion for
            <span> design</span>
          </p>
          <p className="other-job__p">
            and a
            <div className="other-job">
              <ul className="other-job__container">
                {otherJobs.map((job, index) => (
                  <li key={index} className="other-job__container__item">
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          </p>
        </div>
        <div className="main-left__buttons">
          <button
            className="btn-el connect"
            onClick={() =>
              window.location.assign(
                "mailto:talida.ganciu@gmail.com?subject=Let's connect!"
              )
            }
          >
            Let's Connect
          </button>
          <a
            href="https://www.linkedin.com/in/mihaela-talida-g-66532716a/"
            target="_blank"
          >
            <button className="btn-el media">Linkedin</button>
          </a>
        </div>
      </div>
      <div className="images">
        <img src={heroImg} alt="Talida Ganciu photo" className="main-img" />
      </div>
    </main>
  );
};

export default Hero;
