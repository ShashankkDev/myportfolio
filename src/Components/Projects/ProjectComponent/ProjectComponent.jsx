import { Link } from "react-router-dom";
import "./ProjectComponent.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

const ProjectComponent = () => {
  const projects = [
    {
      title: "ZOCO-X",
      description:
        "Our website offers a wide range of digital equipment, Whether you're a professional gamer in search of a high-performance gaming mouse or a student in need of a reliable laptop for studying, we have you covered. Our collection includes renowned brands known for their quality and innovation.",
      imageUrl: "/images/myimage1.png",
      tech: "REACT",
      sitelink: "https://zoco-x.vercel.app/",
      github: "https://github.com/ShashankkDev/e-comm-project",
    },
    {
      title: "Furoo",
      description:
        "Welcome to our exquisite eCommerce website dedicated to wood-based products! Our platform showcases a stunning collection of wooden items, including doors, windows, cabinets, pianos, beds, and sofas, all meticulously crafted to perfection.",
      imageUrl: "/images/myimage2.jpg",
      tech: "HTML,CSS & JAVASCRIPT",
      sitelink: "https://furoo.vercel.app/",
      github: "https://github.com/ShashankkDev/html-css-js-layout",
    },
    {
      title: "Dice Game",
      description:
        "Welcome to our exciting Dice Game project! Our interactive web application is designed to bring the thrill and excitement of rolling dice right to your screen. Whether you're looking for a fun way to pass the time or want to challenge your friends, our Dice Game has you covered.",
      imageUrl: "/images/myimage3.jpg",
      tech: "REACT",
      sitelink: "https://red-dice-game.vercel.app/",
      github: "https://github.com/ShashankkDev/Dice-Game",
    },
    {
      title: "What ToDo",
      description:
        "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything ",
      imageUrl: "/images/myimage5.jpg",
      tech: "REACT",
      sitelink: "https://todo-app-six-indol.vercel.app/",
      github: "https://github.com/ShashankkDev/TodoApp",
    },
  ];

  return (
    <div className="projects-section">
      {projects.map((project, index) => (
        <div className="projects-map" key={index}>
          <div className="proj-image">
            <Link to={project.sitelink} target=" ">
              <img src={project.imageUrl} alt="image" />
            </Link>
          </div>
          <div className="proj-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h3>{project.tech}</h3>
            <div className="links">
              <Link to={project.sitelink} target=" ">
                <HiOutlineExternalLink />
              </Link>
              <Link to={project.github} target=" ">
                <AiFillGithub />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;
