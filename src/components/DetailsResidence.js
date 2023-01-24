import React from "react";
import { useParams } from "react-router-dom";
import DataLogements from "../data.json";
import "../css/detailsResidence.css";

function DetailsResidence() {
  /* useParams() nous permet d'extraire la propriété "id" des paramètres de l'URL courante. 
  Cela permet de récupérer la valeur de l'ID dans l'URL et de l'utiliser dans le composant pour afficher les détails correspondant à cet ID.*/
  const { id } = useParams();
  /* La méthode find() permet de trouver un logement dans le tableau Data qui a un id qui correspond à l'id récupéré dans l'URL.
  On assigne alors cet élément à la variable residence. */
  const residence = DataLogements.find((item) => item.id === id);

  // Initialisation d'un tableau vide destiné aux étoiles rouges correspondant à la note de l'hôte. //
  const redStarsArray = [];
  // Initialise d'un tableau vide pour les étoiles grises. //
  const greyStarsArray = [];
  // La constante rating va nous servir à récupérer la note sur 5 contenue dans le fichier data.json. //
  const rating = residence.rating;
  // La constante greyStar nous permet d'initialiser le nombre d'étoiles vides puis décrémenter en fonction de la note du fichier data.json. //
  const greyStar = 5 - rating;

  // La boucle for nous permet d'incrémenter i tant que i est inférieur à la note. //
  for (let i = 0; i < rating; i++) {
    // On push la valeur 'red' dans le tableau ratingArray, on le push selon la valeur de la note. //
    redStarsArray.push("full");
  }

  // La boucle for nous permet d'incrémenter i tant que i est inférieur à la note. //
  for (let i = 0; i < greyStar; i++) {
    // On push la valeur 'grey' dans le tableau greyStarsArray, on le push selon la valeur de greyStars (5 - rating). //
    greyStarsArray.push("empty");
  }

  return (
    <div className="residenceContainer">
      <div className="details">
        {/* Le titre de l'annonce correspond à title dans le fichier data.json. */}
        <h2 className="residenceTitle">{residence.title}</h2>
        {/* Location correspond à la localisation contenue dans le fichier data.json. */}
        <span className="location">{residence.location}</span>
        <div className="residenceTags">
          {/*  Grâce à la méthode map on itère sur le tableau [tags] du fichier json afin de retourner un rendu pour chaque élément du tableau.
        Tag correspond aux mots clés contenus dans le fichier data.json.  
        Key nous permet de fournir une clé unique pour chaque élément enfant pour aider React à identifier les éléments lors des mises à jour. */}
          {residence.tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="rating">
        <div className="host">
          {/* Le nom de l'hôte de la résidence récupéré dans le fichier data.json. */}
          <span className="hostName">{residence.host.name}</span>
          {/* Renvoie les images contenues dans le fichier data.json. */}
          <img
            className="hostProfil"
            alt="house"
            src={residence.host.picture}
          />
        </div>

        <div className="ratingStars">
          {redStarsArray.map((star, index) => {
            /* On map le tableau des étoiles pleines, pour chaque élément 'full' du tableau, on crée une balise <i> qui a comme key l'index de chaque élément du tableau.
             Le 2e argument correspond automatiquement à l'index du tableau afin d'avoir une key unique. */
            return <i className="fa-solid fa-star red-stars" key={index}></i>;
          })}
          {/* On map le tableau des étoiles vides, pour chaque élément 'empty' du tableau, on crée une balise <i> qui a comme key l'index de chaque élément du tableau.
             Le 2e argument correspond automatiquement à l'index du tableau afin d'avoir une key unique. */}
          {greyStarsArray.map((star, index) => {
            return <i className="fa-solid fa-star grey-stars" key={index}></i>;
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailsResidence;
