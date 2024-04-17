import "./Hero.scss";
import heroVector from "../../../assets/hero-vector.svg";

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
    <main>
      <img src={heroVector} alt="splash of color" className="hero-vector" />
      <div className="main-left">
        <p>Hello, my name is</p>
        <h1>TALIDA GANCIU</h1>
        <div className="main-left__description">
          <p>
            I'm a <span>Frontend Developer</span> with a passion for
            <span> Design</span>
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
          <button className="btn-el connect">Let's Connect</button>
          <button className="btn-el media">Linkedin</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
