interface NavElProps {
  link: string;
  index: number;
  setClickedItem: React.Dispatch<React.SetStateAction<string | null>>;
  setClickMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavEl = ({
  link,
  index,
  setClickedItem,
  setClickMenuMobile,
}: NavElProps) => {
  return (
    <div className="nav-el">
      <li>
        <a
          href={`${link === "Home" ? "#" : `#${link.toLocaleLowerCase()}`}`}
          onClick={(e) => {
            setClickedItem(e.currentTarget.innerHTML);
            setClickMenuMobile(false);
          }}
        >
          <span className="nav-el__number">{`0${index + 1}`}</span>
          <span className="nav-el__link">{link}</span>
        </a>
      </li>
    </div>
  );
};

export default NavEl;
