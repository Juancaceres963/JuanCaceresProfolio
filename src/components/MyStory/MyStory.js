import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import { SubTitulo } from "../SubTitulo/SubTitulo";
import { Parrafo } from "../Paragraph/Paragraph";
import { StarBackground } from "../StarBackground/StarBackground"
import "./MyStory.css";

export const MyStory = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="my-story-section">
      <Container className="my-story">
        <StarBackground />
        <Row>
          <Col>
            <SubTitulo text="My Story" id="mystory" />
            <div
              className={`my-story-text ${expanded ? "expanded" : "collapsed"}`}
            >
              <Parrafo
                text="My professional journey began in the kitchen. I studied culinary
              arts before emigrating from my home country, which allowed me to
              start working quickly after arriving in Argentina. Although I
              always enjoyed providing good service and working with dedication,
              over time I felt that environment limited my growth."
              />
              <Parrafo
                text="Thanks to the support of my brother, who was already a programmer,
              I had the opportunity to fully dedicate myself to studying
              programming and English for a while. I started from scratch,
              guided by his mentorship, and discovered a real passion for the
              world of development—especially in frontend, where I could combine
              technical and creative skills."
              />
              <Parrafo
                text="Although I eventually returned to work to cover my own needs, I
              never completely stopped studying. I’ve participated in many
              projects—some not directly related to technology—yet I still found
              ways to contribute through development or digital organization.
              That reaffirmed to me that this is the path I want to follow."
              />
              <Parrafo
                text="Today, I’m more determined than ever to grow as a software
              developer. I’m motivated not only by what I’m capable of building,
              but also by knowing that I can help others through what I’ve
              learned. I believe in the power of teamwork, in surrounding myself
              with good-hearted people who have healthy ambition, and in
              constantly pushing myself to improve."
              />
              <Parrafo
                text="That’s what I want. I’m here to keep growing, to contribute, and
              to build something meaningful."
              />
            </div>
            <button className="toggle-button" onClick={toggleExpanded}>
              {expanded ? "Leer menos ↑" : "Leer más ↓"}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
