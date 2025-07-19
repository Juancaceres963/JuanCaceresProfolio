// ───── Librerías externas ─────
import { useEffect } from "react";
import { useLocation, useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ───── Estilos globales ─────
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';

// ───── Hooks personalizados ─────
import useScrollManager from './hooks/useScrollManager';

// ───── Componentes ─────
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { MyStory } from './components/MyStory/MyStory';
import { Navigation } from './components/NavBar/Navigation';
import { Projects } from './components/Projects/Projects';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';

function App() {
  useScrollManager();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Eliminar el hash de la URL cuando cargamos desde un ancla
    if (location.pathname === "/JuanCaceresProfolio" && location.hash) {
      setTimeout(() => {
        window.history.replaceState(null, "", "/JuanCaceresProfolio");
      }, 10);
    }
  }, [location]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <BackgroundVideo />
            <Banner />
            <MyStory />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
