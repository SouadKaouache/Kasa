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
      {/* Le clic sur la flèche de gauche appelle la fonction prev qui renvoie à l'image précédente. */}
      <div onClick={prev} className="left">
        <i className="fa-sharp fa-solid fa-chevron-left"></i>
      </div>
      {/* Le clic sur la flèche de droite appelle la fonction next qui renvoie à l'image suivante. */}
      <div onClick={next} className="right">
        <i className="fa-sharp fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default Slider;
