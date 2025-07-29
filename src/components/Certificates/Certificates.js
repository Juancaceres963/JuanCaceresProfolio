import { Container, Row, Col } from "react-bootstrap";
import { SubTitulo } from "../SubTitulo/SubTitulo";
import { Paragraph } from "../Paragraph/Paragraph";
import { CertificateCard } from "../CertificateCard/CertificateCard";
import { certificates } from "../Data/CertificatesData.js";
import "./Certificates.css";

export const Certificates = () => {
  return (
    <section className="certificates-section">
      <Container className="certificates">
        {/* <StarBackground /> */}
        <Row>
          <Col>
            <SubTitulo tamano="grande" text="Certificates" id="certificates" />
            <Paragraph text="Below are some of the courses and certifications I’ve completed, focused on web development, programming fundamentals, and cloud technologies." />
          </Col>
          <div className="certificates-container">
            {certificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                title={cert.title}
                duration={cert.duration}
                date={cert.date}
                image={cert.image}
                link={cert.link}
              />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};
