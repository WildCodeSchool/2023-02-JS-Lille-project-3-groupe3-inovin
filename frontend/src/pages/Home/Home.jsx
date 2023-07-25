import "./Home.scss";
import React, { useContext } from "react";
import background from "../../assets/images/separator02.png";
import SliderHome from "../../components/SliderHomePage/SliderHomePage";
import { LightModeContext } from "../../contexts/LightModeContext";

function Home() {
  const { lightMode } = useContext(LightModeContext);
  return (
    <div className="homePage">
      <div
        className="header_container"
        id={lightMode ? "head_container_light" : ""}
      >
        <h2 id="title">Connectez vous à votre profil de dégustation de vin</h2>
        <img
          className={lightMode ? "light-title-background" : "title_background"}
          src={background}
          alt=""
        />
      </div>
      <SliderHome />
      <div className="start_button">
        <img
          id={lightMode ? "light_background_btn" : "background_btn"}
          src={background}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
