import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Apercu from "../../components/Apercu/Apercu";
import "./AtelierCreation.scss";
import BottleContext from "../../contexts/BottleContext";
import UserContext from "../../contexts/UserContext";
// import CardBottle from "../../components/CardBottle/CardBottle";

function AtelierCreation() {
  const { setWineBottleId } = useContext(BottleContext); // BottleContext to get the current bottles id & name
  const [tastingData, setTastingData] = useState();
  const { user } = useContext(UserContext); // UserContext to get the current account_id
  const accountID = user; // clearer
  const [dataLoaded, setDataLoaded] = useState(false); // state to know if data getted or not

  // console.log(`wineBottleId c'est ${wineBottleId}`);
  // console.log(`wineBottleName c'est ${wineBottleName}`);

  // function to get ratings by user_account_ID in tastingData(array) with account_id by userContext
  function getRatings(array, rating, bottleId, account_id, bottleName) {
    const outputRatings = []; // array to stock ratings
    const outputBottleIds = []; // array to stock the wineBottleId linked with ratings
    const outputName = []; // array to stock the name linked with ratings

    for (let i = 0; i < array.length; i += 1) {
      if (account_id === array[i].user_account_ID) {
        // check only the current account_id
        outputRatings.push(array[i][rating]); // add rating in outputRatings
        outputBottleIds.push(array[i][bottleId]); // add wineBottleId in outputBottleIds
        outputName.push(array[i][bottleName]); // add name in outputName
      }
    }

    return { ratings: outputRatings, ids: outputBottleIds, name: outputName }; // return an object with ratings & ids
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

  // function to update the BottleContext with 3 bottles, calling the getRatings function
  const updateBottleId = () => {
    if (tastingData && tastingData.length > 0) {
      const result = getRatings(
        tastingData,
        "rating",
        "wineBottle_id",
        accountID,
        "wineBottleName"
      );
      const arrayOfRatings = result.ratings; // array of ratings
      const arrayOfIds = result.ids; // aray of wine bottle ids
      const arrayOfNames = result.name; // array of wine bottle name
      const arrayOfRatingsSmallest = Math.min(...arrayOfRatings); // find the smallest rating
      const index = arrayOfRatings.indexOf(arrayOfRatingsSmallest); // find the index of smallest rating
      arrayOfRatings.splice(index, 1); // remove the smallest rating
      arrayOfIds.splice(index, 1); // remove the id of the smallest rating
      arrayOfNames.splice(index, 1); // remove the name of the smallest rating

      setWineBottleId(arrayOfIds); // update bottleContext with 1 id removed
      // console.log(`wineBottleId context c'est : ${arrayOfIds}`); // check if ok
    }
  };

  // at page loading, get the tasting data with the fetchData function
  useEffect(() => {
    fetchData();
  }, []);

  // when tastingData updated with the previous useEffect, call updateBottleId()
  useEffect(() => {
    if (tastingData && !dataLoaded) {
      setDataLoaded(true);
      updateBottleId();
    }
  }, [tastingData]);

  // const [Name1, Name2, Name3] = wineBottleName;

  // const [id1, id2, id3] = wineBottleId;

  return (
    <div className="element-fond">
      <div className="container_atelier">
        <div className="container-bottle">
          {/*           <CardBottle wineBottleName={Name1} wineBottleId={id1} />
          <CardBottle wineBottleName={Name2} wineBottleId={id2} />
          <CardBottle wineBottleName={Name3} wineBottleId={id3} /> */}
        </div>
        <Apercu />
      </div>
    </div>
  );
}

export default AtelierCreation;
