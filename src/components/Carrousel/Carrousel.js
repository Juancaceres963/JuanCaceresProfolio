import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../ProjectsData/ProjectsData.js";
import "./Carrousel.scss";

export const Carrousel = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const project = projects.find((p) => p.id === id);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={true}
      indicators={true}
      interval={5000}
      fade
    >
      {project.images.map((img, index) => (
        <Carousel.Item key={index}>
          <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
