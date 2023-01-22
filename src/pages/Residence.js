import React from "react";
import { useParams } from "react-router-dom";
import DetailsResidence from "../components/DetailsResidence.js";
import EquipmentsResidence from "../components/EquipmentsResidence";
import Slider from "../components/Slider.js";
import Logement from "../data.json";
import "../css/equipmentsResidence.css";
import DescriptionResidence from "../components/DescriptionResidence.js";
import Error from "../components/Error.js";

function Residence() {
  /* useParams() nous permet d'extraire la propriété "id" des paramètres de l'URL courante. 
  Cela permet de récupérer la valeur de l'ID dans l'URL et de l'utiliser pour afficher les détails correspondant à cet ID. */
  const { id } = useParams();
  // On utilise la méthode find() pour trouver un objet dans un tableau "Logement" qui a un champ "id" qui correspond à l'id récupéré dans l'URL. //
  const ResidenceId = Logement.find((item) => item.id === id);
  // S'il n'y a pas de logements trouvés dans le fichier json alors on renvoit vers la page d'erreur. //
  if (!ResidenceId) return <Error />;

  return (
    // Pour chaque logement on retourne les images, la description et les équipements. //
    <div>
      {/* La fonction Slider nous permettra le défilement des images correspondantes au logement. */}
      <Slider pictures={ResidenceId.pictures} />

      <DetailsResidence />

      <div className="container-title-DescriptifResidence">
        <div className="title-DescriptifResidence">
          {/* La fonction DescriptionResidence nous permet d'afficher ou masquer le contenu de la description contenue dans data.json. */}
          <DescriptionResidence
            title="Description"
            content={ResidenceId.description}
          />
        </div>

        <div className="title-DescriptifResidence">
          {/* La fonction EquipmentsResidence nous permet d'afficher ou masquer la liste des équipements contenue dans data.json. */}
          <EquipmentsResidence
            className="listEquipements"
            title="Equipements"
            content={ResidenceId.equipments}
          />
        </div>
      </div>
    </div>
  );
}

export default Residence;
