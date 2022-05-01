import React from "react";
import HeroCard from "./HeroCard";
import { SimpleGrid } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";

const Heroes = ({ heroes }) => {
  console.log(heroes);

  return (

      <SimpleGrid minChildWidth="220px" spacing={15} w="80%">
        {heroes.list.map((hero, index) => (
          <HeroCard hero={hero} key={`hero-${index}`} />
        ))}
      </SimpleGrid>

  );
};

export default Heroes;
