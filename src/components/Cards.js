import React from "react";
import { Link } from "react-router-dom";
import DataLogements from "../data.json";
import "../css/cards.css";

function Cards() {
  return (
    <div className="cardContainer">
      <ul className="cardList">
        <li className="cardItem">
          {/*  La méthode map() est utilisée pour parcourir tous les éléments de DataLogements qui correspond au fichier data.json. 
          Pour chaque élément, une li est créée avec une classe "cardItem" qui contient le rendu pour chaque élément. 
          Cela permet de générer des cartes pour chaque logement contenu dans DataLogements. */}
          {DataLogements.map((item) => {
            return (
              // Lien qui permet de mettre à jour l'URL en intégrant l'id de l'annonce à l'URL. //
              <Link
                to={`/Residence/${item.id}`}
                className="residenceLink"
                /* L'utilisation de la key permet à React de comprendre quelles parties de la liste ont été modifiées, ajoutées ou supprimées,
                 afin de pouvoir mettre à jour efficacement l'interface utilisateur sans mettre à jour toute la liste. 
                 On utilise l'id comme clé unique. */
                key={item.id}
              >
                {/* Photo de l'annonce. */}
                <img
                  src={item.cover}
                  alt={item.title}
                  className="residenceImage"
                />
                <div className="cardInfo">
                  {/* Titre de l'annonce. */}
                  <h3 className="itemTitle">{item.title}</h3>
                </div>
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default Cards;
