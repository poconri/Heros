import React from 'react';
import { ContainerBox, LogoContainer } from './components/AppContainer.element';
import Logo from './assets/logo/logo.svg';
import Heroes from './components/Heroes';
import Liked from './components/Liked';
import Loader from './components/Loader';
import './styles/App.css';
import Search from './components/Search';
import { useAppSelector, useAppDispatch } from "../src/hooks/hooks";


function App() {
  const loading:boolean = useAppSelector(state => state.heroes.loading);

  return (
    <ContainerBox>
      <LogoContainer src={Logo} alt='logo' />
      <Liked />
      <Search />
      {loading && <Loader />}
      <Heroes />
    </ContainerBox>
  );
}

export default App;
