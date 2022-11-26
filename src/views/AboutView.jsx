import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faVideoCamera,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";

import telescopio from "../assets/img/About/telescope.png";
import cardAbout1 from "../assets/img/About/cardAbout1.png";
import cardAbout2 from "../assets/img/About/cardAbout2.png";
import cardAbout3 from "../assets/img/About/cardAbout3.png";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function AboutView() {
  return (
    <>
  
        <div className="back__container">
          <Link to="/" className="back__button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
        <div className="separator-s"></div>
        <div className="actividades__container">
          <h1 className="actividades__title">Actividades</h1>
          <div className="actividades__thumbnail">
            <img src={telescopio} alt="" className="actividades__img" />
          </div>
          <h3 className="actividades__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ad
            eaque fugit quas, aut unde quae corporis quia cumque impedit.
            Dolorem amet sunt sed vel.
          </h3>
        </div>

        <div className="separator-md separator--reservas"></div>

        <div className="cards-actividades__container">
          <div className="card__actividades">
            <div className="card__actividades__container">
              <div className="card__actividades__container__title">
                <div className="card__actividades__thumbnail">
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="card__actividades__img"
                  />
                </div>
                <h1 className="card__actividades__title">Fotografia</h1>
              </div>
              <div className="card__actividades__content">
                <p className="card__actividades__content__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  veritatis ipsum voluptatem voluptate sunt? Cupiditate minus
                  autem ratione corrupti dicta repudiandae, voluptatem ab non?
                </p>
                <a href="" className="card__actividades__content__button">
                  Conoce +{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="card__actividades__fa"
                  />
                </a>
              </div>
            </div>
            <div className="card__actividades__main__thumbnail">
              <img
                src={cardAbout1}
                alt=""
                className="card__actividades__main__img"
              />
            </div>
          </div>

          <div className="card__actividades">
            <div className="card__actividades__container">
              <div className="card__actividades__container__title">
                <div className="card__actividades__thumbnail">
                  <FontAwesomeIcon
                    icon={faVideoCamera}
                    className="card__actividades__img"
                  />
                </div>
                <h1 className="card__actividades__title">Cine</h1>
              </div>
              <div className="card__actividades__content">
                <p className="card__actividades__content__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  veritatis ipsum voluptatem voluptate sunt? Cupiditate minus
                  autem ratione corrupti dicta repudiandae, voluptatem ab non?
                </p>
                <a href="" className="card__actividades__content__button">
                  Conoce +{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="card__actividades__fa"
                  />
                </a>
              </div>
            </div>
            <div className="card__actividades__main__thumbnail">
              <img
                src={cardAbout2}
                alt=""
                className="card__actividades__main__img"
              />
            </div>
          </div> 

          <div className="card__actividades">
            <div className="card__actividades__container">
              <div className="card__actividades__container__title">
                <div className="card__actividades__thumbnail">
                  <FontAwesomeIcon
                    icon={faBinoculars}
                    className="card__actividades__img"
                  />
                </div>
                <h1 className="card__actividades__title">
                  Observaciones con Telescopio
                </h1>
              </div>
              <div className="card__actividades__content">
                <p className="card__actividades__content__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  veritatis ipsum voluptatem voluptate sunt? Cupiditate minus
                  autem ratione corrupti dicta repudiandae, voluptatem ab non?
                </p>
                <a href="" className="card__actividades__content__button">
                  Conoce +{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="card__actividades__fa"
                  />
                </a>
              </div>
            </div>
            <div className="card__actividades__main__thumbnail">
              <img
                src={cardAbout3}
                alt=""
                className="card__actividades__main__img"
              />
            </div>
          </div>
        </div>

        <div className="separator-md separator--reservas"></div>

        <div className="scroll_up__container">
          <div className="scroll_up__container__thumbnail">
            <img
              src={telescopio}
              alt=""
              className="scroll_up__container__img"
            />
          </div>

          <a href="#header" className="up__button">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>

    </>
  );
}

export default AboutView;
