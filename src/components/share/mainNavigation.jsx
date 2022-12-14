import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';
import AboutView from "../../views/AboutView";
import HomeView from "../../views/HomeView";
import "../../assets/css/style.min.css";
import astronaut from "../../assets/img/astronaut.png";
import '../../assets/css/modules/Global/header.min.css'
import Burguer from './Burguer'

// import BurguerButton from '../share/BurguerButton';
// import styled from "styled-components";

const Home = React.lazy(() => import("../../views/HomeView"));

// function Homepage() {
//   const history = useNavigate();

//   const coursesPage = () => {
//     history.push("/#reservas");
//   };
// }

function MainNavigation() {


  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }



  return (
    <Router>
      <header className="header" id="header">
        <div className="header__brand">
          <div className="header__brand__name">
            <p>Planetario</p>
          </div>
          <div className="header__brand__thumbnail">
            <img className="header__brand__img" src={astronaut} alt="" />
          </div>
        </div>

        <ul className={`header__nav__item ${clicked ? 'active' : ''}`}>
          <li>
            <Link to="Planetario-React/about" className="link" >Actividades</Link>
          </li>
          <li>
            <HashLink smooth to="/Planetario-React#reservas" className="link">
              Reservas
            </HashLink>
          </li>
          <li>
            <a href="#contacto" className="link">Contacto</a>
          </li>
        </ul>

        <div className="hamburguer">
          <Burguer clicked={clicked} handleClick={handleClick} />
        </div>

        <div className={`background ${clicked ? 'active' : ''}`} handleClick={handleClick}></div>
      </header>

      <main>
        <Routes>
          <Route path="Planetario-React/" element={<HomeView />} />
          <Route path="Planetario-React/about" element={<AboutView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>
      </main>
    </Router>
  );
}
export default MainNavigation;

// const NavContainer = styled.nav`

// `
