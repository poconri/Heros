import React, { useEffect, useState } from "react";
import { getHeroes } from "../features/heroes/heroesSlice";
import HeroeCard from './HeroeCard';
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { FixedSizeGrid as Grid } from 'react-window';
import { IHero, CompleteState } from "../interface/interface";

const Heroes = () => {
    const [ heroeSize, setHeroeSize ] = useState(1215);
    const [ heroesColumn, setHeroesColumn ] = useState(4);
  let Loading: boolean = useAppSelector(state => state.heroes.loading);
  let renderedHeroes:IHero[] = [];
  const heroes = useAppSelector(state => state.heroes.listA).map((hero: IHero) =>{
    if(!hero.isFavorite){
      renderedHeroes.push(hero);
    }
  }); 

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHeroes());
    if (window.innerWidth < 1000) {
        setHeroeSize(315)
        setHeroesColumn(1)
      } else if(window.innerWidth < 1600) {
        setHeroeSize(630)
        setHeroesColumn(2)
      } else if(window.innerWidth < 1800) {
        setHeroeSize(945)
        setHeroesColumn(3)
      } else {
        setHeroeSize(1215)
        setHeroesColumn(4)
      }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
      setHeroeSize(315)
      setHeroesColumn(1)
    } else if(window.innerWidth < 1600) {
      setHeroeSize(630)
      setHeroesColumn(2)
    } else if(window.innerWidth < 1800) {
      setHeroeSize(945)
      setHeroesColumn(3)
    } else {
      setHeroeSize(1215)
      setHeroesColumn(4)
    }
  })

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const hero =
    renderedHeroes[columnIndex + rowIndex + (rowIndex > 0 ? rowIndex * (heroesColumn - 1) : 0)];
    if (!hero) {
      return null;
    }
    return (
      <div style={style}>
        <HeroeCard hero={hero} />
      </div>
    );
  };

  return (
    <div>
      {renderedHeroes.length === 0 && !Loading && (
        <h2>No Super Heroes Found... please try again</h2>
      )}
      <Grid
        columnCount={heroesColumn}
        columnWidth={300}
        height={570}
        rowCount={heroes.length / heroesColumn + 0.5}
        rowHeight={190}
        width={heroeSize}
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default Heroes;
