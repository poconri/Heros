import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { SearchBox, SearchContainer, SubtitleBox } from "./Search.element";
import { search } from '../features/heroes/heroesSlice';
import SearchIcon from "../assets/search/search.svg";

const Search = () => {

    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
        dispatch(search(e.target.value));
    }
    return(
        <SearchBox>
        <SubtitleBox>All superheros</SubtitleBox>
        <SearchContainer>
            <img src={SearchIcon} alt="search" />
            <input type="text" placeholder="Search" onChange={handleChange} />
        </SearchContainer>
      </SearchBox>
    );
}

export default Search;