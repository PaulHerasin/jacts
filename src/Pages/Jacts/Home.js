
import React from 'react';
import About from '../../Components/Jacts/About/About';
import Rarity from '../../Components/Jacts/Rarity/Rarity';
import Roadmap from '../../Components/Jacts/Roadmap/Roadmap';
import Header from '../../Components/Jacts//Header/Header';
import MainScreen from '../../Components/Jacts/Main-screen/Main-screen';
import Team from '../../Components/Jacts/Team/Team';

export const Home = () => (
  <main className="jacks">
    <Header />
    <MainScreen />
    <About />
    <Rarity />
    <Roadmap />
    <Team />
  </main>
)


export default Home;
