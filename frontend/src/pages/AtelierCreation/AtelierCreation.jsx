import React, { useContext } from "react";
import Apercu from "../../components/Apercu/Apercu";
import "./AtelierCreation.scss";
import BottleContext from "../../contexts/BottleContext";
import CardBottle from "../../components/CardBottle/CardBottle";

function AtelierCreation() {
  const { wineBottleId, wineBottleName } = useContext(BottleContext);

  function destructuredName() {
    return wineBottleName;
  }
  const [Name1, Name2, Name3] = destructuredName();
  function destructuredId() {
    return wineBottleId;
  }
  const [id1, id2, id3] = destructuredId();
  // console.log(wineBottleId);
  // console.log(wineBottleName);
  return (
    <div className="element-fond">
      <div className="container_atelier">
        <div className="container-bottle">
          <CardBottle wineBottleName={Name1} wineBottleId={id1} />
          <CardBottle wineBottleName={Name2} wineBottleId={id2} />
          <CardBottle wineBottleName={Name3} wineBottleId={id3} />
        </div>
        <Apercu />
      </div>
    </div>
  );
}

export default AtelierCreation;
