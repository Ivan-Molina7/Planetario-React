import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutView from "../../views/AboutView";
import HomeView from "../../views/HomeView";
import ContactView from "../../views/ContactView";
import "../../assets/css/style.min.css";
import astronaut from "../../assets/img/astronaut.png";

const Home = React.lazy(() => import("../../views/HomeView"));

function MainNavigation() {
  return (
    <Router>
      <header className="header"  id="presentation">
        <div className="header__brand">
          <div className="header__brand__name">
            <p>Planetario</p>
          </div>
          <div className="header__brand__thumbnail">
            <img className="header__brand__img" src={astronaut} alt="" />
          </div>
        </div>
        <div className="header__nav">
          <ul className="header__nav__item">
            <li>
              <Link to="/">Actividades</Link>
            </li>
            <li>
              <Link to="/about">Reservas</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </main>
    </Router>
  );
}

export default MainNavigation;
