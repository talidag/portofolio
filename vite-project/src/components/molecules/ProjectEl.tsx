import "../organisms/Projects/Projects.scss";

interface ProjectElProps {
  name: string;
  img: string;
  text: string;
  link: string;
}
const ProjectEl = ({ name, img, text, link }: ProjectElProps) => {
  return (
    <div className="project">
      <a href={link} target="_blank">
        <img src={img} alt="" />
      </a>
      <p className="project__name">{name}</p>
      <p className="project__description">{text}</p>
    </div>
  );
};

export default ProjectEl;
