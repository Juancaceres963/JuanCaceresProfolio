import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/img/Logo_JCcode.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.png";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./Navigation.css"

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (section) => {
    setActiveLink(section);

    const isHome = location.pathname === "/";
    const allowedLocalScrolls = ["contact"];

    if (allowedLocalScrolls.includes(section)) {
      // Siempre hace scroll dentro de la misma página actual
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${section}`);
      }
      setTimeout(() => setExpanded(false), 300);
      return;
    }

    if (!isHome) {
      // Redirige a inicio con el hash si no estamos en home
      navigate(`/#${section}`);
      setTimeout(() => setExpanded(false), 100);
    } else {
      // Ya estamos en home, solo hacer scroll
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${section}`);
      }
      setTimeout(() => setExpanded(false), 300);
    }
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className={scrolled || expanded ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand
          onClick={() => {
            setExpanded(false);

            const isHome = location.pathname === "/";
            const hasHash = location.hash;

            if (!isHome) {
              navigate("/");
            } else if (hasHash) {
              // Usamos la API nativa para limpiar el hash sin recargar
              setTimeout(() => {
                window.history.replaceState(null, "", "/JuanCaceresProfolio");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 0);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img style={{ width: 160 }} src={logo} alt="logo" />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => handleNavigation("mystory")}
              className={
                activeLink === "mystory" ? "active navbar-link" : "navbar-link"
              }
            >
              My Story
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("projects")}
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("contact")}
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/juan-caceres-orellana/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Juancaceres963" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/jc.code/" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/juan-caceres-orellana/",
                  "_blank"
                )
              }
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};