import mapa from "../../assets/img/mapsicle.png";
import  '../../assets/css/modules/Global/footer.min.css'
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
      <footer className="ubicacion__container" id="contacto">
        <div className="ubicacion__thumbnail">
          <iframe className="ubicacion__img" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13088.735506790134!2d-56.1445373!3d-34.9018348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x568b22e488508f25!2sPlanetario!5e0!3m2!1ses!2suy!4v1669868215656!5m2!1ses!2suy" loading="lazy" ></iframe>
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
                <a href="https://www.facebook.com/planetariodemontevideo/" className="social__item" target="_blank">
                  <FontAwesomeIcon icon={faFacebook}  className="social__item__icon"/>
                </a>
              </li>
              <li className="social__block">
                <a href="https://twitter.com/planetario_mvd" className="social__item" target="_blank">
                  <FontAwesomeIcon icon={faTwitter}  className="social__item__icon"/>
                </a>
              </li>
              <li className="social__block">
                <a href="https://www.instagram.com/planetario.de.montevideo/?hl=es" className="social__item" target="_blank">
                  <FontAwesomeIcon icon={faInstagram}  className="social__item__icon"/>
                </a>
              </li>
            </ul>
            <p className="right__web">2023 By Bios 2022 Web3.0</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

