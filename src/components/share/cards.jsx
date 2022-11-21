import React from "react";
import sun from '../../assets/img/sun.png'


 function Cards() {
  return (
    <div className="card_container">
      <div className="card">
        <p className="card__text card__title">El Universo en un minuto</p>
        <div className="card__thumbnail">
        <img src={sun} className="card__img"/>
        </div>
        <h3 className="card__text card__subtitle">Las estrellas: enormes generadoras de energia</h3>
      </div>
      <div className="card">
        <p className="card__text card__title">El Universo en un minuto</p>
        <div className="card__thumbnail">
        <img src={sun} className="card__img"/>
        </div>
        <h3 className="card__text card__subtitle">Las estrellas: enormes generadoras de energia</h3>
      </div>
      <div className="card">
        <p className="card__text card__title">El Universo en un minuto</p>
        <div className="card__thumbnail">
        <img src={sun} className="card__img"/>
        </div>
        <h3 className="card__text card__subtitle">Las estrellas: enormes generadoras de energia</h3>
      </div>
    </div>
  );
}

export default Cards;
