import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";
import { LoaderContainer } from "./Loader.Element";
import { Spinner } from "@chakra-ui/spinner";

const Loader = (props: any) => {
  let windowWidth: number = window.innerWidth;
  console.log(windowWidth < 1000);

  return (
      <LoaderContainer>
        <Spinner size="xl" h="250px" w="250px" />
      </LoaderContainer>
  );
};

export default Loader;
