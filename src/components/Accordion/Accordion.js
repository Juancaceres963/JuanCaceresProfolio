import { SubTitulo } from "../SubTitulo/SubTitulo.js";
import { Parrafo } from "../Paragraph/Paragraph.js";
import { projects } from "../ProjectsData/ProjectsData.js";
import { useParams } from "react-router-dom";
import "./Accordion.scss";

export const Accordion = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <div className="accordion-tema">
          <h2 class="accordion-header" id="flush-headingOne"></h2>
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <SubTitulo text="Problem" />
          </button>
        </div>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <Parrafo text={project.problem} />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div className="accordion-tema">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <SubTitulo text="Role" />
            </button>
          </h2>
        </div>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <Parrafo text={project.role} />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div className="accordion-tema">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <SubTitulo text="Case Study" />
            </button>
          </h2>
        </div>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <Parrafo text={project.approach} />
            <Parrafo text={project.challenges} />
            <Parrafo text={project.learning} />
            <Parrafo text={project.outcome} />
            <Parrafo text={project.closingNote} />
          </div>
        </div>
      </div>
    </div>
  );
};
