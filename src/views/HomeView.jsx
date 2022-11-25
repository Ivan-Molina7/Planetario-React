import rocket from "../assets/img/rocket.png";
import planetSaturn from "../assets/img/planetSaturn.png";
import bigAstronaut from "../assets/img/bigastronaut.png";
import Cards from "../components/share/cards";
import Slider from "../components/share/slider";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function HomeView() {
  return (
    <>
      <div className="separator-xl"></div>
      <section className="presentation" id="presentation">
        <h1 className="presentation__title">
          Descubri el planetario en <span>Noviembre</span>, sumate a la
          aventura!!!
        </h1>
        <img
          src={planetSaturn}
          alt=""
          className="presentation__img--absolute planet--hover"
        />
        <div className="separator-l"></div>
        <div className="presentation__thumbnail">
          <img src={rocket} alt="" className="presentation__img" />
          <img
            src={bigAstronaut}
            alt=""
            className="presentation__img--absolute-2"
          />
        </div>
        <div className="separator-md"></div>
        <div className="container__trending">
          <h1 className="trending__title title">Lo mas destacado</h1>
          <p className="trending__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tempora sed hic, eligendi nostrum mollitia natus velit ducimus
            cupiditate corporis cupiditate corporis cupiditate corporis cupiditate corporis.
          </p>
        </div>
      </section>
      <div className="separator-l"></div>
      <Cards />
      <div className="separator-xl separator-xl--query"></div>
      <div className="slider__container">
        <h1 className="slider__title  title">Galeria</h1>
        <div className="separator-s"></div>
        <img src={bigAstronaut} alt="" className="slider__img--absolute" />
        <Slider />
        <img src={planetSaturn} alt="" className="slider__img--absolute-2" />
      </div>
      <div className="separator-s separator-s--query"></div>
      <div className="reservas__container" id="reservas">
        <h1 className="reservas__title title" >Reservas</h1>
        <div className="separator-l"></div>
        <div className="reservas__content">
          <button className="reservas__button">RESERVAR</button>
        </div>
        <div className="separator-l"></div>

        <a href="#header" className="reservas__scroll-up">
          <FontAwesomeIcon icon={faChevronUp} />
        </a>
      </div>
    </>
  );
}

export default HomeView;
