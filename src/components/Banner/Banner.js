import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useIsTablet } from "../../hooks/useIsTablet";
import headderImg from "../../assets/img/FotoJuanPortada.png";
import "./Banner.css"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Developer",
    "Software Developer",
    "Digital Product Builder",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const isTablet = useIsTablet();

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  if (isTablet) {
    return (
      <section className="banner" id="home">
        <Container style={{ marginTop: -130 }}>
          {/* Acá ponés la versión "tablet": dos Rows, imagen + texto arriba, p + botón abajo */}
          <Row className="align-items-center">
            {
              <section className="banner" id="home" style={{ paddingTop: 100 }}>
                <Container style={{ marginTop: -130 }}>
                  <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                      <img
                        className="banner-img"
                        src={headderImg}
                        alt="Headder Img de Juan Cáceres"
                      />
                    </Col>
                    <Col xs={12} md={6} xl={7} className="banner-col-text">
                      <span style={{ color: "#fff" }} className="tagline">
                        Welcome to my Profolio
                      </span>
                      <div>
                        <h1 className="container_banner_h1">
                          {`Hi, I'm Juan Cácere`}
                          <br />
                          <span className="wrap">{text}</span>
                        </h1>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Col
                      xs={10}
                      className="text-center"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 20,
                      }}
                    >
                      <p
                        className="banner-paragraph"
                        style={{
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        Building the future with well-designed, <br />
                        scalable, and maintainable software solutions.
                      </p>
                      <button
                        style={{
                          padding: 0,
                          margin: 0,
                        }}
                        onClick={() => {
                          const textarea = document.getElementById("message");
                          if (textarea) {
                            textarea.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                            textarea.focus();
                          }
                        }}
                      >
                        Drop me a message <ArrowRightCircle size={25} />
                      </button>
                    </Col>
                  </Row>
                </Container>
              </section>
            }
          </Row>
          <Row className="justify-content-center">
            {/* p + botón en otra fila */}
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="banner" id="home">
      <Container style={{ marginTop: -130 }}>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <img
              className="banner-img"
              src={headderImg}
              alt="Headder Img de Juan Cáceres"
            />
          </Col>
          <Col xs={12} md={6} xl={7} className="banner-col-text">
            <span style={{ color: "#fff" }} className="tagline">
              Welcome to my Profolio
            </span>
            <div>
              <h1 className="container_banner_h1">
                {`Hi, I'm Juan Cáceres`}
                <br />
                <span className="wrap">{text}</span>
              </h1>
            </div>
            <p className="banner-paragraph">
              Building the future with well-designed, <br />
              scalable, and maintainable software solutions.
            </p>
            <button
              onClick={() => {
                const textarea = document.getElementById("message");
                if (textarea) {
                  textarea.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  textarea.focus();
                }
              }}
            >
              Drop me a message <ArrowRightCircle size={40} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;