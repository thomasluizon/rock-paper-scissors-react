import Layout from './function/Layout';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Selector from './components/Selector';
import Rules from './components/Rules';
import RulesOverlay from './components/RulesOverlay.jsx';

const App = () => {
   const [score, setScore] = useState(0);
   const [gameMode, setGameMode] = useState('default');
   const [rules, setRules] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);

   return (
      <>
         <Layout.container padding="1rem">
            <Header gameMode={gameMode} score={score} />
            <Selector setGameMode={setGameMode} />
            <Game
               isPlaying={isPlaying}
               setIsPlaying={setIsPlaying}
               gameMode={gameMode}
               setScore={setScore}
            />
            <Rules setRules={setRules} />
            {rules && <RulesOverlay setRules={setRules} gameMode={gameMode} />}
         </Layout.container>
      </>
   );
};

export default App;
