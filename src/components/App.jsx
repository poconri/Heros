import React, {useEffect} from "react";
import "../styles/App.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeros, toggleFavorite } from "../actions";
import Logo from '../assets/logo/logo.svg';
import Liked from "./Liked";
import Search from "./Search";
import Heroes from "./Heroes";
import Loader from "../loader/Loader";

const App = () => {
 
  const dispatch = useDispatch();
  const list = useSelector(state => state);
  const loading = useSelector(state => state.loading);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchHeros());
  }, [])

  return (
    <div className="Container">
      <img src= { Logo } alt="logo" className="nav-logo" />
      <Liked />
      <Search />
      {loading && <Loader />}
      <Heroes heroes={ list } />
    </div>
  );
};

App.defaulProps = {
  heroes: [],
};

export default App;
