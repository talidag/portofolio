import NavEl from "../atoms/NavEl";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <NavEl key={index} link={link} index={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
