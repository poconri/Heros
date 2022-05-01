import React from "react";
import "../styles/HeroCard.css";
import Fist from "../assets/fist/fist.svg";
import mediumHeart from "../assets/medium-heart/medium-heart.svg";

const HeroCard = ({ hero }) => {

  let favorito = hero.isFavorite ? "este si" : "este no";

  return (
    <div
      className="card"
      // style={{
      //     backgroundImage: `url(${hero.images.md})`,
      //   }}
    >
      <img src={hero.images.sm} className="picture" />
      <img src={mediumHeart} className="medium_heart" />
      <div className="card-content">
        <h3>{hero.name}</h3>
        <p>{`Real Name: ${hero.biography.fullName}`}</p>
        <div className="strength_data">
          <img src={Fist} />
          <p>{<b>{hero.powerstats.strength / 10}</b>} / 10</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
