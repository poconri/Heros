import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { setFavorite } from "../features/heroes/heroesSlice";
import { IHero, CompleteState } from '../interface/interface';
import Fist from "../assets/fist/fist.svg";
import mediumHeart from "../assets/medium-heart/medium-heart.svg";
import mediumFilledheart from "../assets/medium-filled-heart/medium-filled-heart.svg";
import {
    Container,
    HeroPicture,
    HearthContainer,
    HeroDescription,
    ContainerBackground,
    BoldParagraph,
  } from "./HeroeCard.element";

interface HeroCardProps {
    hero: IHero;
}

const HeroeCard: FC<HeroCardProps> = ( { hero } ) => {
    const heroPicture: string = hero.images.sm;
    const heroPictureLG: string = hero.images.lg;
    const heroName: string = hero.name;
    const heroRealName: string = hero.biography.fullName;
    const heroStrength: number = hero.powerstats.strength / 10;
    const heart: string = hero.isFavorite ? mediumFilledheart : mediumHeart;

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setFavorite(hero));
    }

    return (
        <ContainerBackground
      style={{
        backgroundImage: `url(${heroPictureLG})`,
        backgroundBlendMode: "saturation",
      }}
    >
      <Container
      onClick={handleClick}
      >
        <HeroPicture src={heroPicture} alt="the superHero picture" />
        <HearthContainer src={heart} alt="liked hearth" />
        <HeroDescription>
          <h2>{heroName}</h2>
          <p>
            Real Name:{" "}
            {heroRealName === "" ? "not records found" : heroRealName}
          </p>
          <div>
            <img src={Fist} alt="a fist picture" />
            <BoldParagraph>{heroStrength}</BoldParagraph>
            <p>/ 10</p>
          </div>
        </HeroDescription>
      </Container>
    </ContainerBackground>
    )
}

export default HeroeCard;