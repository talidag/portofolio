interface SkillElProps {
  name: string;
  icon: string;
}

const SkillEl = ({ name, icon }: SkillElProps) => {
  return (
    <div className="skill-el">
      <img src={icon} alt={`${name} icon`} />
      <p>{name}</p>
    </div>
  );
};

export default SkillEl;
