import React from "react";
import { useState } from "react";
import "../css/equipmentsResidence.css";

function CollapseResidence({ title, content }) {
  // Au chargement de la page le contenu et masqué. //
  const [Open, setOpen] = useState(false);
  // Cette fonction nous permet de basculer entre l'ouverture et la fermeture du contenu au clic. //
  // Si c'est ouvert et que l'utilisateur clique alors on ferme et si c'est fermé on ouvre. //
  const failover = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="equipmentsResidenceDetail">
      <div className="collapseAboutItem">
        <div onClick={failover} className="collapseAboutTitle">
          <h2>{title}</h2>

          {Open ? (
            <span>
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </span>
          ) : (
            <span>
              <i className="fa-sharp fa-solid fa-chevron-up"></i>
            </span>
          )}
        </div>
        {/*La condition ternaire Open && content vérifie si la variable Open est vraie. 
Si c'est le cas, cela signifie que le contenu doit être affiché, donc "content" est retourné. 
        Sinon, rien n'est retourné, ce qui signifie que le contenu est masqué. */}
        <div className="collapseAboutContent">{Open && content}</div>
      </div>
    </div>
  );
}

export default CollapseResidence;
