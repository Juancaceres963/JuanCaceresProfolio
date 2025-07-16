import { useParams } from "react-router-dom";
import { projects } from "./projectsData"; // ✅ Importamos la lista de proyectos
import { Footer } from "./Footer.js";
import { useEffect } from "react";
import {
  Container,
  Carousel,
  TabContainer,
  TabContent,
  Col,
  Nav,
  Tab,
} from "react-bootstrap";
import UnderConstructionModal from "../components/UnderConstructionModal";
import "../styles/projectDetails.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

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
          {/* <UnderConstructionModal /> */}
          <h1>{project.title}</h1>
          <img src={project.mainImage} />
          <p>{project.subtitle}</p>
        </div>
        <div className="project-details-descripcion">
          <ul>
            {project.tags.map((tags, index) => (
              <li key={index}>{tags}</li>
            ))}
          </ul>
          <div className="temas">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="temas">
            <h3>Role</h3>
            <p>{project.role}</p>
          </div>
          <div className="temas">
          <ul>
            {project.tools.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
            </ul>
          </div>
          <Carousel interval={5000} fade>
            {project.images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="tools">
            <p>{project.duration}</p>
            <p>{project.type}</p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
