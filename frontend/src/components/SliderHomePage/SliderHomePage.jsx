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
          <div className="slide-holder">
            <div id="first_slide">
              <div
                className={lightMode ? "light-text-slide" : "text-first-slide"}
              >
                Bienvenue à cet atelier unique, après une dégustation
                savoureuse, vous créerez votre propre vin grâce aux différents
                cépages !
              </div>
            </div>
          </div>
          <div className={lightMode ? "light-first-slide" : "slide-holder"}>
            <div className={lightMode ? "light-slide-map" : "slide-map"}>
              <div className={lightMode ? "text-map-light" : "text-map"}>
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
          <div className="slide-holder">
            <span
              className="text_container"
              id={lightMode ? "steps_light" : "steps"}
            >
              <div id="a" className={lightMode ? "light_steps" : "dark_steps"}>
                1. Inscrivez-vous
              </div>
              <div id="b" className={lightMode ? "light_steps" : "dark_steps"}>
                2. Complétez vos préférences
              </div>
              <div id="c" className={lightMode ? "light_steps" : "dark_steps"}>
                3. Découvrez votre Profil de Dégustation
              </div>
              <div id="d" className={lightMode ? "light_steps" : "dark_steps"}>
                4. Découvrez l'Atelier Création Viticole{" "}
              </div>
              <div id="e" className={lightMode ? "light_steps" : "dark_steps"}>
                5. Achetez Votre création
              </div>
              <div id="a">1. Inscrivez-vous</div>
              <div id="b">2. Complétez vos préférences</div>
              <div id="c">3. Découvrez votre Profil de Dégustation</div>
              <div id="d">4. Découvrez l'Atelier Création Viticole </div>
              <div id="e">5. Achetez Votre création</div>
            </span>
            <img src={wineGlass} id="wineGlass" alt="wine" />
            <div className="start_button">
              <button
                type="button"
                id={lightMode ? "home_btn_light" : "home_btn"}
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
