import Layout from './function/Layout';
import { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Selector from './components/Selector';

const App = () => {
   const [score, setScore] = useState(0);
   const [gameMode, setGameMode] = useState('default');
   const [scoreClicks, setScoreClicks] = useState(0);

   return (
      <>
         <Layout.container padding="1rem">
            <Header
               scoreClicks={scoreClicks}
               setScoreClicks={setScoreClicks}
               setGameMode={setGameMode}
               score={score}
            />
            <Selector setGameMode={setGameMode} />
            <Game gameMode={gameMode} setScore={setScore} />
         </Layout.container>
      </>
   );
};

export default App;
