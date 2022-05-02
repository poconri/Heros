import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../actions/index";
import SearchIcon from "../assets/search/search.svg";
import { Input, InputGroup, InputLeftElement   } from "@chakra-ui/react";
import '../styles/Search.css';

const Search = () => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(search(e.target.value));
  }

  return (
    <div className="Search">
      <h2 className="subTittle">All superheros</h2>
        <InputGroup>
          <InputLeftElement children={<img src={SearchIcon}/>} pt='11px' pl='7px' />
          <Input onChange={handleChange} type="text" placeholder="Search" bg="#281f43" color="white" pl="35px" h='40px' borderRadius="30px" w='371px' border='none' pt='3px' pb="3px" fontSize='15px'/>
        </InputGroup>
    </div>
  );
};

export default Search;
