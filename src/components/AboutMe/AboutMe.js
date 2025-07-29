import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import { Paragraph } from "../Paragraph/Paragraph";
import { StarBackground } from "../StarBackground/StarBackground";
import "./AboutMe.css";

export const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="about-me-section">
      <Container className="about-me">
        <StarBackground />
        <Row>
          <Col>
            <SubTitulo tamano="grande" text="About Me" id="aboutme" />
            <div
              className={`about-me-text ${expanded ? "expanded" : "collapsed"}`}
            >
              <Paragraph text="I’m a self-taught software developer with 3+ years of experience building web solutions that improve operations and enhance user experience. I specialize in frontend and backend development using technologies like React, JavaScript, C#, VB, ASP.Net, SQL, and AppSheet. I focus on solving real-world problems through clean, scalable code and practical design." />
              <Paragraph text="I’ve worked on a variety of projects, from custom-coded platforms to no-code tools and UI/UX designs. I enjoy building functional products that are visually clean, user-friendly, and impactful. I hold certifications in JavaScript, CSS, algorithms, and cloud fundamentals (Microsoft AZ-900), and I’m always seeking to grow both technically and professionally." />
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
