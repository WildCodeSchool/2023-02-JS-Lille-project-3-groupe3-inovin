import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./AtelierCreation.scss";
import BottleContext from "../../contexts/BottleContext";
import UserContext from "../../contexts/UserContext";
import CardBottle from "../../components/CardBottle/CardBottle";
import NameRecipe from "../../components/NameRecipe/NameRecipe";
import AnimationPage from "../../components/AnimationPage/AnimationPage";

function AtelierCreation() {
  const { wineBottleId, wineBottleName, setWineBottleName, setWineBottleId } =
    useContext(BottleContext); // BottleContext to get the current bottles id & name

  /* Content below : we want remove 1 id & 1 bottleName in BottleContext because we had 4 bottle in tasting and 
    we want to keep only 3, we remove the 1 worst rating */

  const [tastingData, setTastingData] = useState(); // stock all tasting table from database
  const { user } = useContext(UserContext); // UserContext to get the current account_id
  const accountID = user; // clearer , translate user to accountID for the comprehension
  const [dataLoaded, setDataLoaded] = useState(false); // state to know if data getted or not and active useEffect
  const [wineBottleData, setWineBottleData] = useState(); // stock all wineBottle table from database

  // function to get ratings and ids by user_account_ID in tastingData(array)
  function getRatingsAndIds(array, rating, bottleId, account_id) {
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

  // function to get the name of bottle we would like to delete
  function getName(array, idToDelete, bottle_name) {
    const bottleNameToDelete = [];
    for (let i = 0; i < array.length; i += 1) {
      if (idToDelete === array[i].id) {
        // compare with id we looking for, then we get the bottle_name
        bottleNameToDelete.push(array[i][bottle_name]);
      }
    }
    return bottleNameToDelete;
  }

  // function to loop in our wineBottleName and verify if including the name we getted previously with getName()
  function deleteBottleName(array, name) {
    const bottleRemove = [];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].includes(name)) {
        bottleRemove.push(array.splice(i, 1));
      }
    }
    return bottleRemove;
  }

  // fetch all tasting data & set the state with response
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

  // fetch all wineBottle data & set the state with response
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

  // function to update the BottleContext with 3 bottles(id & name) calling getName(), deleteBottleName() && set the context
  const updateBottleContext = () => {
    if (tastingData && tastingData.length > 0) {
      const resultRating = getRatingsAndIds(
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

      const idToDelete = arrayOfIds[index]; // stock the id to delete, need it for get the bottleName in getName() below

      const bottleToDelete = getName(wineBottleData, idToDelete, "bottle_name");
      const bottleDeleted = deleteBottleName(wineBottleName, bottleToDelete);

      arrayOfIds.splice(index, 1); // remove the id of the smallest rating
      const updatedWineBottleName = wineBottleName.filter(
        (name) => name !== bottleDeleted
      );
      setWineBottleName(updatedWineBottleName); // update bottleContext with 1 name removed
      setWineBottleId(arrayOfIds); // update bottleContext with 1 id removed
    }
  };

  // at page loading, get the tasting data & wineBottle data with the functions
  useEffect(() => {
    fetchData();
    fetchBottleData();
  }, []);

  // when tastingData & wineBottleData updated with the previous useEffect, call updateBottleContext()
  useEffect(() => {
    if (tastingData && wineBottleData && !dataLoaded) {
      setDataLoaded(true);
      updateBottleContext();
    }
  }, [tastingData, wineBottleData]);

  const [Name1, Name2, Name3] = wineBottleName;
  const [id1, id2, id3] = wineBottleId;

  return (
    <AnimationPage>
      <div className="element-fond">
        <div className="container_atelier">
          <h3 className="title-bottle creation-title">ATELIER CREATION</h3>
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
    </AnimationPage>
  );
}

export default AtelierCreation;
