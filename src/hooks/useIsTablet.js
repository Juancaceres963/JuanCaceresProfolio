import { useState, useEffect } from "react";

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 991);
    };

    checkSize(); // verificar al cargar

    window.addEventListener("resize", checkSize); // verificar al redimensionar
    return () => window.removeEventListener("resize", checkSize); // limpiar listener
  }, []);

  return isTablet;
};