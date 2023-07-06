import React from "react";
import ModalLexique from "./ModalLexique";
import UseModalLexique from "./UseModalLexique";

function Lexique() {
  const { isShowing, toggle } = UseModalLexique();
  return (
    <div className="lexique-contenair">
      <button className="button-default" type="button" onClick={toggle}>
        Explication Vin Lexique
      </button>
      <ModalLexique isShowing={isShowing} hide={toggle} />
    </div>
  );
}

export default Lexique;
