
import React from 'react';
import About from '../Components/About/About';
import Rarity from '../Components/Rarity/Rarity';
import Roadmap from '../Components/Roadmap/Roadmap';
import Header from '../Components/Header/Header';
import MainScreen from '../Components/Main-screen/Main-screen';
import Team from '../Components/Team/Team';

export const Home = () => (
  <>
    <Header />
    <MainScreen />
    <About />
    <Rarity />
    <Roadmap />
    <Team />
  </>
)


export default Home;
