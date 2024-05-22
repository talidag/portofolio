interface NavElProps {
  link: string;
  index: number;
  clickedItem?: string | null;
  setClickedItem?: React.Dispatch<React.SetStateAction<string | null>>;
  setClickMenuMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavEl = ({
  link,
  index,
  clickedItem,
  setClickedItem,
  setClickMenuMobile,
}: NavElProps) => {
  return (
    <div className="nav-el">
      <li>
        <a
          className={clickedItem === link ? "clicked-element" : ""}
          href={`${link === "Home" ? "#" : `#${link.toLocaleLowerCase()}`}`}
          onClick={(e) => {
            e.currentTarget.textContent &&
              setClickedItem !== undefined &&
              setClickedItem(e.currentTarget.textContent.slice(2));
            console.log(e.currentTarget.textContent?.slice(2));
            if (setClickMenuMobile !== undefined) {
              setClickMenuMobile(false);
            }
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
