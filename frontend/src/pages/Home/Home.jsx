import "./Home.scss";
import React, { useContext } from "react";
import background from "../../assets/images/separator02.png";
import SliderHome from "../../components/SliderHomePage/SliderHomePage";
import { ThemeContext } from "../../contexts/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`homeContainer ${theme}`}>
      <div className="header_container">
        <h2 id="title">Connectez vous à votre profil de dégustation de vin</h2>
        <img className="title_background" src={background} alt="" />
      </div>
      <SliderHome />
      <div className="start_button">
        <img id="background_btn" src={background} alt="" />
      </div>
    </div>
  );
}

export default Home;
