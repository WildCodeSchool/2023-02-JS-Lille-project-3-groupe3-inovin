import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./AtelierCreation.scss";
import BottleContext from "../../contexts/BottleContext";
import UserContext from "../../contexts/UserContext";
import CardBottle from "../../components/CardBottle/CardBottle";
import NameRecipe from "../../components/NameRecipe/NameRecipe";
// import { PercentageContext } from "../../contexts/PercentageContext";

function AtelierCreation() {
  const { wineBottleId, wineBottleName, setWineBottleName, setWineBottleId } =
    useContext(BottleContext); // BottleContext pour obtenir l'ID et le nom des bouteilles actuelles

  /* Contenu ci-dessous : nous voulons supprimer un ID et un nom de bouteille dans BottleContext parce que nous avions 4 bouteilles en dégustation
     et nous voulons en garder seulement 3, nous supprimons la note la plus basse */
  // const { progress } = useContext(PercentageContext);
  const [tastingData, setTastingData] = useState(); // stocke toutes les données de dégustation de la base de données
  const { user } = useContext(UserContext); // UserContext pour obtenir l'ID du compte actuel
  const accountID = user; // plus clair, traduit user en accountID pour faciliter la compréhension
  const [dataLoaded, setDataLoaded] = useState(false); // état pour savoir si les données ont été récupérées ou non et activer useEffect
  const [wineBottleData, setWineBottleData] = useState(); // stocke toutes les données de wineBottle de la base de données

  // fonction pour obtenir les notes et les ID par user_account_ID dans tastingData(array)
  function getRatingsAndIds(array, rating, bottleId, account_id) {
    const outputRatings = []; // tableau pour stocker les notes
    const outputBottleIds = []; // tableau pour stocker les wineBottleId liés aux notes

    for (let i = 0; i < array.length; i += 1) {
      if (account_id === array[i].user_account_ID) {
        // vérifie seulement le account_id actuel
        outputRatings.push(array[i][rating]); // ajoute la note à outputRatings
        outputBottleIds.push(array[i][bottleId]); // ajoute le wineBottleId à outputBottleIds
      }
    }

    return { ratings: outputRatings, ids: outputBottleIds }; // retourne un objet avec les notes et les ID
  }

  // fonction pour obtenir le nom de la bouteille que nous voulons supprimer
  function getName(array, idToDelete, bottle_name) {
    const bottleNameToDelete = [];
    for (let i = 0; i < array.length; i += 1) {
      if (idToDelete === array[i].id) {
        // compare avec l'ID que nous recherchons, puis obtenir le nom de la bouteille
        bottleNameToDelete.push(array[i][bottle_name]);
      }
    }
    return bottleNameToDelete;
  }

  // fonction pour parcourir wineBottleName et vérifier s'il contient le nom que nous avons obtenu précédemment avec getName()
  function deleteBottleName(array, name) {
    const bottleRemove = [];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].includes(name)) {
        bottleRemove.push(array.splice(i, 1));
      }
    }
    return bottleRemove;
  }

  // récupère toutes les données de dégustation et définit l'état avec la réponse
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/tasting`
      );
      setTastingData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // récupère toutes les données de wineBottle et définit l'état avec la réponse
  const fetchBottleData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/wineBottles`
      );
      setWineBottleData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // fonction pour mettre à jour BottleContext avec 3 bouteilles (ID et nom) en appelant getName(), deleteBottleName() et définit le contexte
  const updateBottleContext = () => {
    if (tastingData && tastingData.length > 0) {
      const resultRating = getRatingsAndIds(
        tastingData,
        "rating",
        "wineBottle_id",
        accountID
      );

      const arrayOfRatings = resultRating.ratings; // tableau des notes
      const arrayOfIds = resultRating.ids; // tableau des IDs de bouteilles de vin
      const arrayOfRatingsSmallest = Math.min(...arrayOfRatings); // trouve la note la plus basse
      const index = arrayOfRatings.indexOf(arrayOfRatingsSmallest); // trouve l'indice de la note la plus basse
      arrayOfRatings.splice(index, 1); // supprime la note la plus basse

      const idToDelete = arrayOfIds[index]; // stocke l'ID à supprimer, nécessaire pour obtenir le nom de la bouteille dans getName() ci-dessous

      const bottleToDelete = getName(wineBottleData, idToDelete, "bottle_name");
      const bottleDeleted = deleteBottleName(wineBottleName, bottleToDelete);

      arrayOfIds.splice(index, 1); // supprime l'ID de la note la plus basse
      const updatedWineBottleName = wineBottleName.filter(
        (name) => name !== bottleDeleted
      );
      setWineBottleName(updatedWineBottleName); // met à jour BottleContext avec 1 nom supprimé
      setWineBottleId(arrayOfIds); // met à jour BottleContext avec 1 ID supprimé
    }
  };

  // au chargement de la page, récupère les données de dégustation et les données de wineBottle avec les fonctions correspondantes
  useEffect(() => {
    fetchData();
    fetchBottleData();
  }, []);

  // lorsque tastingData & wineBottleData sont mis à jour avec le useEffect précédent, appelle updateBottleContext()
  useEffect(() => {
    if (tastingData && wineBottleData && !dataLoaded) {
      setDataLoaded(true);
      updateBottleContext();
    }
  }, [tastingData, wineBottleData]);

  const [Name1, Name2, Name3] = wineBottleName;
  const [id1, id2, id3] = wineBottleId;

  return (
    <div className="element-fond">
      <div className="container_atelier">
        <div className="container-bottle">
          <CardBottle wineBottleName={Name1} wineBottleId={id1} />
          <CardBottle wineBottleName={Name2} wineBottleId={id2} />
          <CardBottle wineBottleName={Name3} wineBottleId={id3} />
        </div>
        <div className="container-bottle2">
          <NameRecipe />
        </div>
      </div>
    </div>
  );
}

export default AtelierCreation;
