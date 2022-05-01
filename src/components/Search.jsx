import React from "react";
import SearchIcon from "../assets/search/search.svg";
import { Input, InputGroup, InputLeftElement   } from "@chakra-ui/react";
import '../styles/Search.css';

const Search = () => {
  return (
    <div className="Search">
      <h2 className="subTittle">All superheros</h2>
        <InputGroup>
          <InputLeftElement children={<img src={SearchIcon}/>} p='6px' />
          <Input type="text" placeholder="Search" bg="#281f43" color="white" pl="35px" h='30px' borderRadius="30px" w='350px' border='none' pt='3px' pb="3px" fontSize='15px'/>
        </InputGroup>
    </div>
  );
};

export default Search;
