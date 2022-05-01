import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  return (
    <div className="Liked">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#11072f", color: "white" }}
              h="70px"
              borderRadius="15px"
              bg="#2a1b57"
              color="white"
              border="0px"
            >
              <Box p="10px" bg="#6a4dbc" borderRadius="50px" margin="15px">
                <img src={BigHeart} alt="Heart" className="nav-heart" />
              </Box>
              <Box
                flex="1"
                textAlign="left"
                fontSize="25px"
                fontWeight="bold"
              >
                Liked
              </Box>
              <Box p="10px" bg="#3f3268" borderRadius="50px" margin="15px">
                <AccordionIcon fontSize="25px" />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Liked;
