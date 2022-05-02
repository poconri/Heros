import React from "react";
import { useDispatch} from 'react-redux';
import { setFavorite } from "../actions/index";
import Fist from "../assets/fist/fist.svg";
import mediumHeart from "../assets/medium-heart/medium-heart.svg";
import mediumFilledHeart from "../assets/medium-filled-heart/medium-filled-heart.svg";
import "../styles/HeroCard.css";


const HeroCard = ({ hero }) => {

  const dispatch = useDispatch();
  const heart = hero.isFavorite ? mediumFilledHeart : mediumHeart;

  const handleFavorite = () => {
    dispatch(setFavorite(hero));
  };

  return (
    <div
      className="card"
      onClick={handleFavorite}
    >
      <img src={hero.images.sm} className="picture" />
      <img src={heart} className="medium_heart" />
      <div className="card-content">
        <h3 className="name">{hero.name}</h3>
        <p className="realName">{`Real Name: ${hero.biography.fullName}`}</p>
        <div className="strength_data">
          <img src={Fist} />
          <p className="heroStrength">{hero.powerstats.strength / 10} </p>
          <p className="realName">/ 10</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
