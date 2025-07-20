import { useParams } from "react-router-dom";
import { projects } from "../ProjectsData/ProjectsData.js";
import { Parrafo } from "../Paragraph/Paragraph.js";
import { Accordion } from "../Accordion/Accordion.js";
import { Carrousel } from "../Carrousel/Carrousel.js"
import { Footer } from "../Footer/Footer.js";
import { Container } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projectDetails.scss";

export const ProjectDetails = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const project = projects.find((p) => p.id === id);


  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <div>
      <Container>
        <div className="project-details-inicio">
          <h1>{project.title}</h1>
          <img src={project.mainImage} />
          <h3>{project.subtitle}</h3>
          <div className="project-links">
            <a href={project.githubRepo} target="_blank">
              Repo GitHub
            </a>
            <a href={project.post} target="_blank">
              Post VideoDemo
            </a>
          </div>
          <ul>
            {project.tags.map((tags, index) => (
              <li key={index}>{tags}</li>
            ))}
          </ul>
        </div>
        <div className="project-details-descripcion">
          <div className="temas">
            <Accordion />
          </div>
          <Carrousel />
          <ul>
            <li>{project.duration}</li>
            <li>{project.type}</li>
          </ul>
          <Parrafo text={project.status} />
        </div>
      </Container>
      <Footer />
    </div>
  );
};
