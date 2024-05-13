interface NavElProps {
  link: string;
  index: number;
}

const NavEl = ({ link, index }: NavElProps) => {
  return (
    <div className="nav-el">
      <li>
        <a href={`#${link.toLocaleLowerCase()}`}>
          <span className="nav-el__number">{`0${index + 1}`}</span>
          <span className="nav-el__link">{link}</span>
        </a>
      </li>
    </div>
  );
};

export default NavEl;
