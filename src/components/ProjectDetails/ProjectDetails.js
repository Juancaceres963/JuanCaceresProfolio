import { useParams } from "react-router-dom";
import { projects } from "../ProjectsData/ProjectsData.js";
import { SubTitulo } from "../SubTitulo/SubTitulo.js";
import { Parrafo } from "../Paragraph/Paragraph.js";
import { Accordion } from "../Accordion/Accordion.js";
import { Footer } from "../Footer/Footer.js";
import { Container, Carousel } from "react-bootstrap";
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
          {/* <UnderConstructionModal /> */}
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
            <Accordion subtitulo="Problem" text={project.problem}/>
          </div>
          <div className="temas">
            <SubTitulo text="Role" />
            <Parrafo text={project.role} />
          </div>
          <div className="temas">
            <SubTitulo text="Case Study" />
            <Parrafo text={project.approach} />
            <Parrafo text={project.challenges} />
            <Parrafo text={project.learning} />
            <Parrafo text={project.outcome} />
            <Parrafo text={project.closingNote} />
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
          <div className="temas">
            <ul>
              <li>{project.duration}</li>
              <li>{project.type}</li>
            </ul>
            <Parrafo text={project.status} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
