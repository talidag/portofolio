import "./Header.scss";
import logo from "../../../assets/Logo.svg";
import Navbar from "../../molecules/Navbar";

const Header = () => {
  return (
    <header id="home">
      <a href="">
        <img src={logo} alt="Talida Ganciu logo" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
