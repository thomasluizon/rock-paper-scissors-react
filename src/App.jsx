import { useState } from 'react';
import styled from 'styled-components';
import colors from './function/Colors';
import Header from './components/Header';
import Game from './components/Game';
import Layout from './function/Layout';
import { useEffect } from 'react';

const App = () => {
   const [score, setScore] = useState(0);
   const [gameMode, setGameMode] = useState('default');
   const [scoreClicks, setScoreClicks] = useState(0);

   useEffect(() => {
      // console.log(`You clicked ${scoreClicks} times!`);
      if (scoreClicks === 30) {
         setGameMode('secret');
      }
   }, [scoreClicks]);

   useEffect(() => {
      // console.log(`You are playing ${gameMode} game mode!`);
   }, [gameMode]);

   return (
      <>
         <Layout.container padding="1rem">
            <Header
               scoreClicks={scoreClicks}
               setScoreClicks={setScoreClicks}
               setGameMode={setGameMode}
               score={score}
            />
            <Game gameMode={gameMode} setScore={setScore} />
         </Layout.container>
      </>
   );
};

export default App;
