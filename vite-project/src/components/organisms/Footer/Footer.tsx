import "./Footer.scss";
import NavEl from "../../atoms/NavEl";
import footerImg from "../../../assets/footer-img.svg";
import github from "../../../assets/icons/github.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import discord from "../../../assets/icons/discord.svg";
import FooterSocial from "../../atoms/FooterSocial";

const Footer = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const socialLinks = [
    {
      icon: github,
      link: "",
    },
    {
      icon: linkedin,
      link: "",
    },
    {
      icon: discord,
      link: "",
    },
  ];
  return (
    <footer id="contact">
      <div className="footer__links">
        {links.map((link, index) => (
          <NavEl key={index} link={link} index={index} />
        ))}
      </div>
      <img src={footerImg} alt="vector" className="footer-img" />
      <div className="footer__socials">
        {socialLinks.map((el, index) => (
          <FooterSocial key={index} {...el} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
