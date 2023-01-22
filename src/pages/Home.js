import React from "react";
import Banner from "../components/Banner.js";
import Cards from "../components/Cards.js";

function Home() {
  return (
    <div>
      <div>
        {/* Utilisation du composant Banner lié à la page Accueil. */}
        <Banner page="home" />
        {/* Envoi du composant Cards. */}
        <Cards />
      </div>
    </div>
  );
}

export default Home;
