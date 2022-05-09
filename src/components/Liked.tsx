import React from "react";
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { SimpleGrid } from "@chakra-ui/react";
import { IHero, CompleteState } from '../interface/interface';
import HeroeCard from "./HeroeCard";
import mediumHeart from '../assets/medium-heart/medium-heart.svg';
import BigHeart from '../assets/big-heart/big-heart.svg';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react";
import '../styles/Liked.css'


const Liked: React.FC = ():JSX.Element => {
    const liked = useAppSelector((state) => state.heroes.favorites);
    const heroes:IHero[] = useAppSelector((state) => state.heroes.listB);
    const estado = useAppSelector((state) => state.heroes);
    console.log(estado);
    let likedHeroes:any = liked.map(id => heroes.find(hero => hero.id === id));
    
    return (
        <div className="Liked" >
        <Accordion allowToggle >
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "#11072f", color: "white" }}
                h="74px"
                borderRadius="16px"
                bg="#2a1b57"
                color="white"
                border="0px"
              >
                <Box p="10px" bg="#6a4dbc" borderRadius="50px" margin="15px">
                  <img src={mediumHeart} alt="Heart" className="nav-heart" />
                </Box>
                <Box flex="1" textAlign="left" fontSize="25px" fontWeight="bold" >
                  Liked
                </Box>
                <Box p="10px" bg="#3f3268" borderRadius="50px" margin="15px">
                  <AccordionIcon fontSize="25px" />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel p="20px">
              {liked.length === 0 && (
                <div className="HeroesBox">
                  <img src={BigHeart} alt="Heart" className="liked-heart" />
                  <p>You haven't like any superhero yet</p>
                </div>
              )}
              {liked.length > 0 && <SimpleGrid
                minChildWidth="250px"
                columns={[1, 1, 2, 3]}
                spacing={10}
                w="100%"
                overflowY="scroll"
                h={liked.length > 2 ? 360 : 180 }
              >
                {likedHeroes.map((hero: IHero) =>
                    (<HeroeCard hero={hero} key={`hero-${hero.id}`} />
                    )
                )}
                <div id="last">test</div>
              </SimpleGrid>}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
}

export default Liked;