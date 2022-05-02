import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroCard from "./HeroCard";
import { SimpleGrid } from "@chakra-ui/react";
import mediumHeart from "../assets/medium-heart/medium-heart.svg";
import BigHeart from "../assets/big-heart/big-heart.svg";
import "../styles/Liked.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Liked = () => {
  const liked = useSelector((state) => state.favorites);
  const heroes = useSelector((state) => state.listB);

  return (
    <div className="Liked">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#11072f", color: "white" }}
              h="74px"
              borderRadius="15px"
              bg="#2a1b57"
              color="white"
              border="0px"
            >
              <Box p="10px" bg="#6a4dbc" borderRadius="50px" margin="15px">
                <img src={mediumHeart} alt="Heart" className="nav-heart" />
              </Box>
              <Box flex="1" textAlign="left" fontSize="25px" fontWeight="bold">
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
              h="200px"
            >
              {heroes.map(
                (hero, index) =>
                  hero.isFavorite && (
                    <HeroCard hero={hero} key={`hero-${index}`} />
                  )
              )}
            </SimpleGrid>}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Liked;
