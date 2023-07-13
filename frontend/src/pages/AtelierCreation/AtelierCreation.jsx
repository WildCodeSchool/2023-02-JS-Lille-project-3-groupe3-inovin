import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Apercu from "../../components/Apercu/Apercu";
import "./AtelierCreation.scss";
import BottleContext from "../../contexts/BottleContext";
import UserContext from "../../contexts/UserContext";
import CardBottle from "../../components/CardBottle/CardBottle";
import NameRecipe from "../../components/NameRecipe/NameRecipe";

function AtelierCreation() {
  const { wineBottleId, wineBottleName, setWineBottleName, setWineBottleId } =
    useContext(BottleContext); // BottleContext to get the current bottles id & name

  function destructuredName() {
    return wineBottleName;
  }
  const [Name1, Name2, Name3] = destructuredName();
  function destructuredId() {
    return wineBottleId;
  }
  const [id1, id2, id3] = destructuredId();

  const [tastingData, setTastingData] = useState();
  const { user } = useContext(UserContext); // UserContext to get the current account_id
  const accountID = user; // clearer
  const [dataLoaded, setDataLoaded] = useState(false); // state to know if data getted or not
  const [wineBottleData, setWineBottleData] = useState();
  const [bottleNameToDelete, setBottleNameToDelete] = useState();

  // console.log(` Au départ wineBottleId c'est ${wineBottleId}`);
  // console.log(` Au départ wineBottleName c'est ${wineBottleName}`);

  // function to get ratings by user_account_ID in tastingData(array) with account_id by userContext
  function getRatings(array, rating, bottleId, account_id) {
    const outputRatings = []; // array to stock ratings
    const outputBottleIds = []; // array to stock the wineBottleId linked with ratings

    for (let i = 0; i < array.length; i += 1) {
      if (account_id === array[i].user_account_ID) {
        // check only the current account_id
        outputRatings.push(array[i][rating]); // add rating in outputRatings
        outputBottleIds.push(array[i][bottleId]); // add wineBottleId in outputBottleIds
      }
    }

    return { ratings: outputRatings, ids: outputBottleIds }; // return an object with ratings & ids
  }

  function getName(array, idToDelete, bottle_name) {
    const bottleToDelete = [];
    for (let i = 0; i < array.length; i += 1) {
      if (idToDelete === array[i].id) {
        bottleToDelete.push(array[i][bottle_name]);
        // console.log(
        //  `dans getName la bottleName a delete c'est : ${bottleToDelete}`
        // );
      }
    }
    return bottleToDelete;
  }

  function deleteBottleName(array, name) {
    const bottleRemove = [];
    for (let i = 0; i < array.length; i += 1) {
      if (name === array[i]) {
        bottleRemove.push(array.splice(i, 1));
        // console.log(`bottle supp c'est ${bottleRemove}`);
      }
    }
    return bottleRemove;
  }

  // fetch all tasting data & set the state with
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

  // fetch all wineBottle data & set the state with
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

  // function to update the BottleContext with 3 bottles, calling the getRatings function
  const updateBottleId = () => {
    if (tastingData && tastingData.length > 0) {
      const resultRating = getRatings(
        tastingData,
        "rating",
        "wineBottle_id",
        accountID
      );

      const arrayOfRatings = resultRating.ratings; // array of ratings
      const arrayOfIds = resultRating.ids; // aray of wine bottle ids
      const arrayOfRatingsSmallest = Math.min(...arrayOfRatings); // find the smallest rating
      const index = arrayOfRatings.indexOf(arrayOfRatingsSmallest); // find the index of smallest rating
      arrayOfRatings.splice(index, 1); // remove the smallest rating

      const idToDelete = arrayOfIds[index]; // stock the id to delete, need it for get the bottleName

      const bottleToDelete = getName(wineBottleData, idToDelete, "bottle_name");
      setBottleNameToDelete(bottleToDelete);
      // console.log(`avant la fonction deleteBottle : wineBottleName = ${wineBottleName} & bottleNameToDelete = ${bottleNameToDelete}`)
      const bottleDeleted = deleteBottleName(wineBottleName, bottleToDelete);

      arrayOfIds.splice(index, 1); // remove the id of the smallest rating
      setWineBottleName(bottleDeleted);
      setWineBottleId(arrayOfIds); // update bottleContext with 1 id removed
      // console.log(` à la fin wineBottleId context c'est : ${wineBottleId}`); // check if ok
      // console.log(` à la finwineBottleName c'est ${wineBottleName}`); // check if ok
    }
  };

  // at page loading, get the tasting data with the fetchData function
  useEffect(() => {
    fetchData();
    fetchBottleData();
  }, []);

  // when tastingData & wineBottleData updated with the previous useEffect, call updateBottleId()
  useEffect(() => {
    if (tastingData && wineBottleData && !dataLoaded) {
      setDataLoaded(true);
      updateBottleId();
    }
  }, [tastingData, wineBottleData]);

  useEffect(() => {
    // console.log(
    // `Après la mise à jour, bottleNameToDelete : ${bottleNameToDelete}`
    // );
  }, [bottleNameToDelete]);

  /*    const [Name1, Name2, Name3] = wineBottleName;

   const [id1, id2, id3] = wineBottleId; */

  return (
    <div className="element-fond">
      <div className="container_atelier">
        <div className="container-bottle">
          <CardBottle wineBottleName={Name1} wineBottleId={id1} />
          <CardBottle wineBottleName={Name2} wineBottleId={id2} />
          <CardBottle wineBottleName={Name3} wineBottleId={id3} />
          <NameRecipe />
        </div>
        <Apercu />
      </div>
    </div>
  );
}

export default AtelierCreation;
