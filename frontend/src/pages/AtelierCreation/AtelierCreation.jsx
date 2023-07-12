/* import React, { useState, useEffect, useContext } from "react";
import Apercu from "../../components/Apercu/Apercu";
import "./AtelierCreation.scss";
import BottleContext from "../../contexts/BottleContext";
import UserContext from "../../contexts/UserContext";
import CardBottle from "../../components/CardBottle/CardBottle";
import axios from "axios";

function AtelierCreation() {
  const { wineBottleId, setWineBottleId, wineBottleName } =
    useContext(BottleContext);
  const [tastingData, setTastingData] = useState();
  const { user } = useContext(UserContext);
  const accountID = 4; // clearer
  const [dataLoaded, setDataLoaded] = useState(false); // Variable d'état pour suivre si les données sont chargées

  // function to get ratings by user_account_ID in tastingData(array) with account_id by userContext
  function getRatings(array, rating, wineBottleId, id) {
    const output = []; // tableau pour stocker les ratings
    const ids = []; // Tableau pour stocker les wineBottleId correspondants

    for (let i = 0; i < array.length; i++) {
      if (id === array[i].user_account_ID) {
        output.push(array[i][rating]);
        ids.push(array[i][wineBottleId]); // Ajouter wineBottleId au tableau des ids
      }
    }

    return { ratings: output, ids }; // Retourner un objet contenant les notes et les ids
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/tasting`
      );
      setTastingData(response.data);
    } catch (error) {
      // Gérer les erreurs de récupération des données
      console.error(error);
    }
  };

  const updateBottleId = () => {
    if (tastingData && tastingData.length > 0) {
      const result = getRatings(
        tastingData,
        "rating",
        "wineBottle_id",
        accountID
      );
      const arrayOfRatings = result.ratings;
      const arrayOfIds = result.ids;
      const arrayOfRatingsSmallest = Math.min(...arrayOfRatings);
      const index = arrayOfRatings.indexOf(arrayOfRatingsSmallest);
      arrayOfRatings.splice(index, 1);
      arrayOfIds.splice(index, 1);

      setWineBottleId(arrayOfIds);
      console.log(`wineBottleId context c'est : ${arrayOfIds}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (tastingData && !dataLoaded) {
      setDataLoaded(true);
      updateBottleId(); // Appeler la fonction updateBottleId() dès que les données sont chargées
    }
  }, [tastingData]);

  useEffect(() => {
    if (dataLoaded) {
      updateBottleId();
    }
  }, [dataLoaded]);

  /*    function destructuredName() {
    return wineBottleName;
  }
  const [Name1, Name2, Name3] = destructuredName();
  function destructuredId() {
    return wineBottleId;
  }
  const [id1, id2, id3] = destructuredId();  */

// console.log(wineBottleId);
// console.log(wineBottleName);
// return (
// <div className="element-fond">
// <div className="container_atelier">
// <div className="container-bottle">

/* <CardBottle wineBottleName={Name1} wineBottleId={id1} />
          <CardBottle wineBottleName={Name2} wineBottleId={id2} />
          <CardBottle wineBottleName={Name3} wineBottleId={id3} /> */

// </div>
// <Apercu />
// </div>
// </div>
// );
// }

// export default AtelierCreation;
