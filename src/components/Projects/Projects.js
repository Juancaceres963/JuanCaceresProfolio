import { useEffect, useState } from "react";
import {
  Container,
  Row,
  TabContainer,
  TabContent,
  Col,
  Nav,
  Tab,
} from "react-bootstrap";
import { SubTitulo } from "../SubTitulo/SubTitulo.js";
import { Parrafo } from "../Paragraph/Paragraph.js";
import { ProjectCard } from "../ProjectCard/ProjectCard.js";
import { projects } from "../ProjectsData/ProjectsData"; 
import "./Projects.css"

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("second");

  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const { clientX: x, clientY: y } = e;
        const {
          top: t,
          left: l,
          width: w,
          height: h,
        } = el.getBoundingClientRect();
        el.style.setProperty("--posX", x - l - w / 2);
        el.style.setProperty("--posY", y - t - h / 2);
      });
    });

    return () => {
      projects.forEach((el) => {
        el.removeEventListener("pointermove", () => {}); // Limpieza de eventos
      });
    };
  }, []);

  const mensajeCategoriaGeneral = "";

  const categoryDescriptions = {
    first:
      "Interfaces and user flows designed using tools like Figma and Canva, focused on structure, clarity, and usability.",
    second:
      "Custom software solutions developed with technologies such as Visual Basic .NET, C#, React, JavaScript, HTML/CSS, Bootstrap, and SQL.",
    third:
      "Applications and internal tools built with platforms like Google Sheets and AppSheet, aimed at solving specific needs efficiently.",
  };

  const formatTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <section className="project" >
      <Container>
        <Row>
          <Col>
            <SubTitulo text="Projects" id="projects"/>
            <Parrafo
              text="Here are some of the projects I’ve worked on, grouped by focus.
              Whether you're interested in UI/UX design, fully coded apps, or
              solutions built with no-code tools — This breakdown may help you better 
              visualize the type of work I've done on each project."
            />
            <TabContainer
              id="projects-tabs"
              activeKey={selectedCategory}
              onSelect={(key) => setSelectedCategory(key)}
            >
              <Nav
                variant="pills"
                className="nav-pills mt-3 mb-3 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">UI/UX Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Code-Based Applications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">No-Code Systems</Nav.Link>
                </Nav.Item>
              </Nav>
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Parrafo
                  text={formatTextWithLineBreaks(
                    categoryDescriptions[selectedCategory]
                  )}
                />
              </div>
              <TabContent>
                <TabContent className="pt-3">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects
                        .filter((project) => project.category.includes("first")) // Filtra solo los de programación
                        .map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="row-projects-container">
                      {projects
                        .filter((project) =>
                          project.category.includes("second")
                        ) // Filtra solo los de marketing y diseño
                        .map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects
                        .filter((project) => project.category.includes("third")) // Filtra solo los de management
                        .map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                    </Row>
                  </Tab.Pane>
                </TabContent>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
