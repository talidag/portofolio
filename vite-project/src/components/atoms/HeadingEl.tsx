interface HeadingElProps {
  number: number;
  text: string;
}

const HeadingEl = ({ number, text }: HeadingElProps) => {
  return (
    <div className="heading-el">
      <p className="heading-el__number">{`No. 0${number}`}</p>
      <p className="heading-el__text">{text}</p>
    </div>
  );
};

export default HeadingEl;
