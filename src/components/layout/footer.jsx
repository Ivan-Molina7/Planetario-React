import mapa from "../../assets/img/mapsicle.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
    <>
      <footer className="ubicacion__container">
        <div className="ubicacion__thumbnail">
          <img src={mapa} alt="" className="ubicacion__img" />
        </div>
        <div className="ubicacion__information">
          <div className="information__text">
            <h1>Planetario de Montevideo Agrim. German Barbato</h1>
            <h1>Av. Rivera 3275</h1>
            <h1>Telefono: [598 2] 1950 8550</h1>
            <h1>Mail: info@planetariomvd.com</h1>
          </div>
          <div className="information__contact">
            <input
              type="text"
              className="information__input"
              placeholder="Ingresa tu email aqui *"
            />
            <button className="information__button">Suscribirse Ahora</button>
          </div>
          <div className="information__social">
            <ul className="social__container">
            <li className="social__block">
                <a href="#" className="social__item">
                  <FontAwesomeIcon icon={faFacebook}  className="social__item__icon"/>
                </a>
              </li>
              <li className="social__block">
                <a href="#" className="social__item">
                  <FontAwesomeIcon icon={faTwitter}  className="social__item__icon"/>
                </a>
              </li>
              <li className="social__block">
                <a href="#" className="social__item">
                  <FontAwesomeIcon icon={faInstagram}  className="social__item__icon"/>
                </a>
              </li>
            </ul>
            <p className="right__web">2023 By Buos 2022 Web3.0</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
