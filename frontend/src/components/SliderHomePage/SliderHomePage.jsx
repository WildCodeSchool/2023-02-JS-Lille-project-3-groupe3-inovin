import "./SliderHomePage.scss";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import wineGlass from "../../assets/images/verre_plan_de_travail.png";
import franceMap from "../../assets/images/map.png";
import { LightModeContext } from "../../contexts/LightModeContext";

function SliderHome() {
  const navigate = useNavigate();
  const { lightMode } = useContext(LightModeContext);
  const navigateToInscription = () => {
    navigate("/inscription");
  };
  return (
    <div className="wrapper_portrait">
      <div className={lightMode ? "lightCarousel" : "carousel_container"}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          stopOnHover
          useKeyboardArrows
          transitionTime={1000}
        >
          <div className={lightMode ? "slide-holderLight" : "slide-holder"}>
            <div id="first_slide">
              <div
                className={
                  lightMode ? "light-text-first-slide" : "text-first-slide"
                }
              >
                Bienvenue à cet atelier unique, après une dégustation
                savoureuse, vous créerez votre propre vin grâce aux différents
                cépages !
              </div>
            </div>
          </div>
          <div className={lightMode ? "slide-holderLight" : "slide-holder"}>
            <div className="slide-map">
              <div className="text-map">
                Et voici la carte des différentes régions viticoles où nous
                irons piocher nos cépages.
              </div>
              <img
                src={franceMap}
                id="franceMap"
                alt="Carte de France des régions viticoles"
              />
            </div>
          </div>
          <div className={lightMode ? "slide-holderLight" : "slide-holder"}>
            <span className="text_container" id="steps">
              <div id="a">1. Inscrivez-vous</div>
              <div id="b">2. Complétez vos préférences</div>
              <div id="c">3. Découvrez votre Profil de Dégustation</div>
              <div id="d">4. Découvrez l’Atelier Création Viticole </div>
              <div id="e">5. Achetez Votre création</div>
            </span>
            <img src={wineGlass} id="wineGlass" alt="wine" />
            <div className="start_button">
              <button
                type="button"
                className="button-submit-identity"
                id="home_btn"
                onClick={navigateToInscription}
              >
                C'est parti
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default SliderHome;
