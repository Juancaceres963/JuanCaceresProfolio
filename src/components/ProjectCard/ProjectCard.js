import { Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importar Link para la navegación

export const ProjectCard = ({ id, title, tools, mainImage }) => {
  return (
    <Col sm={12} md={6}>
      <Link to={`/project/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="proj-imgbx">
          <img src={mainImage} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{tools.join(" - ")}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};