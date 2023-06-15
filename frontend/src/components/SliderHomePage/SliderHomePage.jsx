import "./SliderHomePage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import wineGlass from "../../assets/images/verre_plan_de_travail.png";

function SliderHome() {
  return (
    <div className="wrapper_portrait">
      <div className="carousel_container">
        <Carousel
          showThumbs
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          transitionTime={1000}
        >
          <div className="slide-holder">
            <div id="first_slide">
              <span className="text_container" id="steps">
                <div id="a">1. Inscrivez-vous</div>
                <div id="b">2. Complétez vos préférences</div>
                <div id="c">3. Découvrez votre Profil de Dégustation</div>
                <div id="d">4. Découvrez l’Atelier Création Viticole </div>
                <div id="e">5. Achetez Votre création</div>
              </span>
              <img src={wineGlass} id="wineGlass" alt="wine" />
            </div>
          </div>
          <div className="slide-holder">
            <p className="text_container" id="second_slide">
              L'atelier « Je crée mon vin » proposé par Inovin est une
              expérience unique qui vous invite à une dégustation de cépages et
              vous guide dans la création de votre propre bouteille de vin.{" "}
              <br />
              L’atelier est conçu pour vous offrir une expérience inoubliable,
              alliant découverte, apprentissage et convivialité. Notre atelier
              est adapté à tous et nous le proposons pour : Des événements
              d'entreprise, séminaires, événements privés, pour les passionnés
              et les amateurs souhaitant en apprendre davantage sur l'art de la
              vinification.
            </p>
          </div>
          <div className="slide-holder">
            <p className="text_container" id="third_slide">
              Explications de l’atelier : Durant l'atelier, les participants
              sont guidés par un sommelier professionnel qui leur explique
              comment déguster et évaluer les différents vins. Ensuite, les
              participants sont invités à choisir différents vins qu'ils ont
              préférés lors de la dégustation et à les mélanger pour créer leur
              propre vin. <br /> Les participants pourront ainsi jouer le rôle
              d'œnologue et expérimenter l'art de l'assemblage pour créer un vin
              qui reflète leurs goûts personnels. Le sommelier est là pour les
              conseiller sur les proportions, les arômes et le caractère qu'ils
              souhaitent intégrer à leur vin. L'atelier convient aux amateurs de
              vin qui cherchent à s'immerger dans l'univers du vin tout en
              recherchant une expérience interactive et divertissante. Les
              participants peuvent ainsi découvrir les différentes étapes de la
              production du vin, tout en créant une bouteille de vin unique et
              personnalisée.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default SliderHome;
