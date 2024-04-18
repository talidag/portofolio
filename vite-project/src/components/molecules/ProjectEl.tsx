import "../organisms/Projects/Projects.scss";

interface ProjectElProps {
  name: string;
  img: string;
  text: string;
}
const ProjectEl = ({ name, img, text }: ProjectElProps) => {
  return (
    <div className="project">
      <a href="">
        <img src={img} alt="" />
      </a>
      <p className="project__name">{name}</p>
      <p className="project__description">{text}</p>
    </div>
  );
};

export default ProjectEl;
