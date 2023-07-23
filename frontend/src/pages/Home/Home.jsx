import "./Home.scss";
import background from "../../assets/images/separator02.png";
import SliderHome from "../../components/SliderHomePage/SliderHomePage";

function Home() {
  return (
    <div className="homePage">
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
