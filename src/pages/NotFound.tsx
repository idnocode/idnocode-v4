
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedButton from "../components/AnimatedButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Erreur: L'utilisateur a tenté d'accéder à une route inexistante:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c0c12] text-white">
      <div className="text-center max-w-md px-4">
        <div className="text-8xl font-light mb-4 text-white/20">404</div>
        <h1 className="text-2xl font-light mb-4 tracking-wide">Page non trouvée</h1>
        <p className="text-white/60 mb-8 text-sm">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <AnimatedButton variant="primary">
            Retour à l'accueil
          </AnimatedButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
