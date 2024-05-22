import "./Header.scss";
import logo from "../../../assets/Logo.svg";
import Navbar from "../../molecules/Navbar";
import github from "../../../assets/icons/github.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import discord from "../../../assets/icons/discord.svg";
import FooterSocial from "../../atoms/FooterSocial";

const Header = () => {
  const socialLinks = [
    {
      icon: github,
      link: "https://github.com/talidag",
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/mihaela-talida-g-66532716a/",
    },
    {
      icon: discord,
      link: "https://discord.com/users/1123986908914139147",
    },
  ];
  return (
    <header id="home">
      <a href="#">
        <img src={logo} alt="Talida Ganciu logo" className="home-logo" />
      </a>
      <Navbar />
      <div className="header__socials">
        {socialLinks.map((el, index) => (
          <FooterSocial key={index} {...el} />
        ))}
      </div>
    </header>
  );
};

export default Header;
