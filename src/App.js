import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Residence from "./pages/Residence";
import Error from "./pages/Error";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* BrowserRouter permet de gérer les routes de notre application. 
    Il utilise l'historique du navigateur pour rendre les différentes pages de l'application en fonction de l'URL courante.
    Cela permet une navigation fluide pour l'utilisateur sans rechargement complet de la page. */}
      <BrowserRouter>
        {/* Le composant <Header> sera toujours affiché en haut de la page. */}
        <Header />

        <Routes>
          {/* Cette route est définie avec l'attribut "index", ce qui signifie qu'elle sera utilisée comme route par défaut si aucune autre route ne correspond. */}
          <Route index element={<Home />} />
          {/* Cette route est un chemin dynamique car il s'adapte en fonction de l'id récupéré dans l'URL. */}
          <Route path="/Residence/:id" element={<Residence />} />
          {/* Cette route est définie avec un path de "/Error" et l'élément associé est le composant <Error>. */}
          <Route path="/Error" element={<Error />} />
          {/* Cette route est définie avec un path de "/About" et l'élément associé est le composant <About>. */}
          <Route path="/About" element={<About />} />
          {/* Cette route est définie avec un path de "*" qui est un joker qui correspondra à toutes les autres URL qui ne correspondent pas aux autres routes, et l'élément associé est le composant <Error>. */}
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Le composant <Footer> sera toujours affiché en bas de la page. */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
