import React from "react";
import { useState } from "react";
import "../css/equipmentsResidence.css";

function EquipmentsResidence({ title, content }) {
  // Au chargement de la page le contenu et masqué. //
  const [Open, setOpen] = useState(false);
  // Cette fonction nous permet de basculer entre l'ouverture et la fermeture du contenu au clic. //
  // Si c'est ouvert et que l'utilisateur clique alors on ferme et si c'est fermé on ouvre. //
  const failover = () => {
    setOpen((Open) => !Open);
  };

  return (
    <div className="equipmentsResidenceDetail">
      <div className="collapseAboutItem">
        <div onClick={failover} className="collapseAboutTitle">
          <h2>{title}</h2>
          {/* Lorsque Open est false et que l'utilisateur clique sur le contenu on déclenche l'ouverture du contenu masqué. */}
          {Open ? (
            <span>
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </span>
          ) : (
            /* ":" fait office de 'else' c'est une condition ternaire. 
          Si open est false et que l'utilisateur clique alors on déclenche la fermeture du contenu. */
            <span>
              <i className="fa-sharp fa-solid fa-chevron-up"></i>
            </span>
          )}
        </div>
        <ul className="collapseAboutContent">
          {/* On map afin de parcourir les équipements contenu dans le fichier data.json.
          Pour chaque élément dans ce tableau, il crée une liste <li> avec l'élément de l'équipement comme contenu de la liste .
          La liste d'équipements est affichée uniquement si la variable "Open" est vraie. 
          L'attribut "key" est utilisé pour donner un identifiant unique à chaque élément de la liste*/}
          {Open &&
            content.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default EquipmentsResidence;
