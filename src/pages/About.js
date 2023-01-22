import React from "react";
import Banner from "../components/Banner.js";
import CollapseAbout from "../components/CollapseAbout.js";
import "../css/collapseAbout.css";

const About = () => {
  return (
    <div>
      <div>
        {/* On intègre le composant Banner lié à la page About. */}
        <Banner page="About" />
      </div>

      <div>
        {/* Appel de la fonction CollapseAbout afin d'afficher ou masquer le contenu. */}
        <CollapseAbout
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        {/* Appel de la fonction CollapseAbout afin d'afficher ou masquer le contenu. */}
        <CollapseAbout
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        {/* Appel de la fonction CollapseAbout afin d'afficher ou masquer le contenu. */}
        <CollapseAbout
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        {/* Appel de la fonction CollapseAbout afin d'afficher ou masquer le contenu. */}
        <CollapseAbout
          title="Responsabilité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
};

export default About;
