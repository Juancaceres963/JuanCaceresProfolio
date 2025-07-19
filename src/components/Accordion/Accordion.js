import { SubTitulo } from "../SubTitulo/SubTitulo.js";
import { Parrafo } from "../Paragraph/Paragraph.js";
import "./Accordion.scss";

export const Accordion = ({subtitulo, text}) => {

  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <SubTitulo text={subtitulo} />
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <Parrafo text={text} />
          </div>
        </div>
      </div>
    </div>
  );
};
