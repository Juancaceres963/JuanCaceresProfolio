import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 🔴 Forzamos scroll instantáneo
      html.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0 });

      // ✅ Restauramos el smooth después de hacer el scroll
      setTimeout(() => {
        html.style.scrollBehavior = 'smooth';
      }, 100);
    }
  }, [location]);
}