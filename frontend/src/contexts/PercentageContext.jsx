import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

// Création d'un contexte appelé "PercentageContext"
const PercentageContext = createContext(null);

// Composant "PercentageProvider" qui fournit le contexte
export function PercentageProvider({ children }) {
  // Déclaration de l'état "percentage" à l'aide de useState()
  // const [percentageData, setPercentageData] = useState([]);
  const [progress, SetProgress] = useState();

  // Création de la valeur du contexte à l'aide de useMemo()
  const contextValue = useMemo(
    () => ({
      progress, // Valeur actuelle de l'état "percentage"
      SetProgress, // Fonction pour mettre à jour l'état "percentage"
    }),
    [progress, SetProgress] // Dépendances pour le recalcul de la valeur du contexte
  );

  // Rendu du composant "BottleProvider" en enveloppant les composants enfants avec le contexte
  return (
    <PercentageContext.Provider value={contextValue}>
      {children}
    </PercentageContext.Provider>
  );
}

// Propriétés requises du composant "BottleProvider"
PercentageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export du contexte "PercentageContext"
export { PercentageContext };
export default PercentageProvider;

// contexte "PercentageContext">pour partager des données entre les composants React.
// Le composant "PercentageProvider" enveloppe les autres composants et fournit ce contexte à ses enfants.
// Il utilise le hook useState pour déclarer un état appelé "percentage" avec une valeur initiale vide.
// Ensuite, il utilise le hook useMemo pour créer un objet "contextValue" contenant la valeur actuelle de "percentage" et une fonction "setPercentage" pour mettre à jour cet état.
// Le contexte "PercentageContext.Provider" est rendu, enveloppant les composants enfants avec la valeur du contexte "contextValue".
// Enfin, le contexte "PercentageContext" est exporté pour être utilisé dans d'autres parties de l'application.
