import React from "react";
import HeroCard from "./HeroCard";
import { SimpleGrid } from "@chakra-ui/react";


const Heroes = ({ heroes }) => {

  return (
      <SimpleGrid minChildWidth="250px" spacing={15} w="1184px" overflowY='scroll' h='614px'>
        {heroes.list.map((hero, index) => (
          <HeroCard hero={hero} key={`hero-${index}`} />
        ))}
      </SimpleGrid>
  );
};

export default Heroes;
