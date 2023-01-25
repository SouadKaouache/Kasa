import React, { useState } from "react";
import "../css/slider.css";

// Fonction prenant pour paramètres pictures et qui permet le défilement des images contenues dans le fichier data.json. //
function Slider({ pictures }) {
  /* La constante current est utilisée pour stocker la valeur actuelle de l'état. La valeur initiale de cet état est définie à 0. 
setCurrent est utilisé pour mettre à jour la valeur de l'état. */
  const [current, setCurrent] = useState(0);
  // La constante length contient la longueur de la liste pictures contenue dans le fichier data.json. //
  const length = pictures.length;

  /* Cette fonction utilise une expression ternaire pour déterminer si l'élément actuel est le premier de la série (current === 0) ou non. 
On décrémente l'index actuel de 1, à moins que l'index actuel ne soit déjà 0, auquel cas elle revient à la dernière image.  */
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  /* Cette fonction utilise également une expression ternaire pour déterminer si l'élément actuel est le dernier de la série (current === length - 1) 
ou non. On incrémente l'index actuel de 1, à moins que l'index actuel ne soit déjà la dernière image, auquel cas elle revient à la première image. */
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    /* Création d'une balise HTML qui contient une image.
La source de l'image est définie par un tableau de photos (pictures) et l'image actuelle est déterminée par la variable current. */
    <div className="sliders">
      <img
        src={pictures[current]}
        className="slideImage"
        alt="présentation de l'appartement"
      />
      {/* Condition ternaire qui vérifie si la longueur de "pictures" est
      différente de 1, c'est-à-dire s'il y a plus d'une image dans le tableau.
      Si c'est le cas, il y a un fragment de code qui crée deux boutons pour
  naviguer entre les images précédente et suivante sinon il n'y a rien. */}
      {length !== 1 && (
        <>
          <div onClick={prev} className="left">
            <i className="fa-sharp fa-solid fa-chevron-left"></i>
          </div>
          <div onClick={next} className="right">
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
