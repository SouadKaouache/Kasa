import React, { Component } from "react";
import bannerHome from "../assets/bannerHome.png";
import bannerAbout from "../assets/bannerAbout.png";
import "../css/banner.css";

/* J'utilise la méthode class extends afin de créer une classe qui étende les fonctionnalités de la classe parente pour rendre
une bannière différente selon la page consultée. Banner est le composant enfant*/
class Banner extends Component {
  render() {
    // On définit grâce à une fonction ternaire une image différente à afficher selon que l'utilisateur soit sur la page d'Accueil ou sur la page A propos. //
    // Si la page consultée est la page Accueil on renvoie la bannière Home. //
    return this.props.page === "home" ? (
      <div className="banner">
        {/* Cette image est destinée à la bannière de la page d'accueil. */}
        <img
          className="imgbanner"
          src={bannerHome}
          alt="photographie d'une mer avec des falaises"
        />
        <h1 className="texteBanner"> Chez vous, partout et ailleurs </h1>
      </div>
    ) : (
      // Equivalent de 'else', sinon on renvoie la bannière About. //
      <div className="banner">
        {/* Cette image est destinée à la bannière de la page A propos. */}
        <img
          className="imgbanner"
          src={bannerAbout}
          alt="photographie d'un paysage de montagnes enneigées"
        />
      </div>
    );
  }
}

export default Banner;
