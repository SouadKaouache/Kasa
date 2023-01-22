import React from "react";
import { Link } from "react-router-dom";
import "../css/error.css";

// Fonction permettant d'avertir l'utilisateur que la page demandée n'existe pas et l'invitant à retourner à l'accueil. //
function Error() {
  return (
    <div className="errorContainer">
      <p> 404 </p>
      <p className="errorMessage">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <div>
        {/* Lien permettant la redirection vers la page d'accueil en maintenant l'état de l'application en cours de navigation. */}
        <Link to="/" className="errorlink">
          Retourner à la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
