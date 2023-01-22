import React from "react";
import { useState } from "react";
import "../css/collapseAbout.css";

function CollapseAbout({ title, content }) {
  /* useState est une fonction Hook qui permet de gérer l'état d'un composant React et de mettre à jour cette variable en réponse
  à des actions utilisateur.  Open est la valeur initiale, setOpen est la mise à jour de l'état en fonction d'une interaction.
  L'accès aux détails de la page A propos est fermé au chargement de la page de base ou à son actualisation.*/

  const [Open, setOpen] = useState(false);
  // Fonction qui déclenche l'ouverture du contenu masqué. //
  const open = () => {
    setOpen(true);
  };
  // Fonction qui déclenche la fermeture du contenu masqué. //
  const close = () => {
    setOpen(false);
  };

  return (
    <div className="collapseAboutAbout">
      <div className="collapseAboutItem">
        {/* Lorsque Open est false et que l'utilisateur clique sur le contenu on déclenche l'ouverture du contenu masqué en appelant la fonction {open}. */}
        {!Open ? (
          <div onClick={open} className="collapseAboutTitle">
            <h2>{title}</h2>
            <span>
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </span>
          </div>
        ) : (
          /* ":" fait office de 'else' c'est une condition ternaire. 
          Si open est vrai et que l'utilisateur clique alors on déclenche la fermeture du contenu en appelant la fonction {close}. */
          <div onClick={close} className="collapseAboutTitle">
            <h2>{title}</h2>
            <span>
              <i className="fa-solid fa-chevron-up"></i>
            </span>
          </div>
        )}
      </div>
      {/*La condition ternaire Open && content vérifie si la variable Open est vraie. 
Si c'est le cas, cela signifie que le contenu doit être affiché, donc "content" est retourné. 
        Sinon, rien n'est retourné, ce qui signifie que le contenu est masqué. */}
      <div className="collapseAboutContent">{Open && content}</div>
    </div>
  );
}

export default CollapseAbout;
