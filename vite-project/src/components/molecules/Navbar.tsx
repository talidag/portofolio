import { useState } from "react";
import NavEl from "../atoms/NavEl";
import burger from "../../assets/icons/Burger Menu.svg";
import close from "../../assets/icons/Vector.svg";

const Navbar = () => {
  const [clickMenuMobile, setClickMenuMobile] = useState(false);
  const [clickedItem, setClickedItem] = useState<null | string>(null);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleBurgerClick = () => {
    setClickMenuMobile(true);
  };

  const handleCloseClick = () => {
    setClickMenuMobile(false);
  };

  return (
    <nav>
      <img
        src={burger}
        alt="burger menu"
        className={`burger__menu ${clickMenuMobile ? "hide" : ""}`}
        onClick={handleBurgerClick}
      />
      <img
        src={close}
        alt="x close menu icon"
        className={`close__menu ${clickMenuMobile ? "active" : ""}`}
        onClick={handleCloseClick}
      />
      <ul className={`nav__links ${clickMenuMobile ? "active" : ""}`}>
        {links.map((link, index) => (
          <NavEl
            key={index}
            link={link}
            index={index}
            setClickedItem={setClickedItem}
            setClickMenuMobile={setClickMenuMobile}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
