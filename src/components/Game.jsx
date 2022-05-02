import Layout from '../function/Layout';
import colors from '../function/Colors';
import styled from 'styled-components';
import GameButton from './GameButton';

import Triangle from '../assets/images/bg-triangle.svg';
import Pentagon from '../assets/images/bg-pentagon.svg';

import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';
import Spock from '../assets/images/icon-spock.svg';
import Lizard from '../assets/images/icon-lizard.svg';

const Game = styled.main`
   display: grid;
   place-items: center;
   height: 70%;
`;

const Connector = styled.div`
   background-image: ${props => `url(${props.img})`};
   background-repeat: no-repeat;
   background-position: center;
   width: 450px;
   height: 450px;
   margin: 0 auto;

   #paper {
      position: absolute;
      left: 25px;
      top: 25px;
   }

   #scissors {
      position: absolute;
      top: 270px;
   }

   #rock {
      position: absolute;
      right: 25px;
      top: 25px;
   }
`;

const ConnectorSecret = styled.div`
   background-image: ${props => `url(${props.img})`};
   background-repeat: no-repeat;
   background-position: center;
   width: 450px;
   height: 450px;
   margin: 0 auto;

   #scissors {
      position: absolute;
      top: 25px;
   }

   #spock {
      position: absolute;
      left: 20px;
      top: 130px;
   }

   #paper {
      position: absolute;
      right: 20px;
      top: 130px;
   }

   #rock {
      position: absolute;
      top: 300px;
      right: 60px;
   }

   #lizard {
      position: absolute;
      top: 300px;
      left: 60px;
   }
`;

export default props => {
   const defaultGame = (
      <Game>
         <Connector img={Triangle}>
            <Layout.wrapper justify="center" position="relative">
               <GameButton
                  id="paper"
                  img={Paper}
                  color={colors.primary.paper}
               />
               <GameButton
                  id="scissors"
                  img={Scissors}
                  color={colors.primary.scissors}
               />

               <GameButton id="rock" img={Rock} color={colors.primary.rock} />
            </Layout.wrapper>
         </Connector>
      </Game>
   );

   const secretGame = (
      <Game>
         <ConnectorSecret img={Pentagon}>
            <Layout.wrapper justify="center" position="relative">
               <GameButton
                  id="scissors"
                  img={Scissors}
                  color={colors.primary.scissors}
               />
               <GameButton id="spock" img={Spock} color={colors.primary.cyan} />
               <GameButton
                  id="paper"
                  img={Paper}
                  color={colors.primary.paper}
               />
               <GameButton id="rock" img={Rock} color={colors.primary.rock} />
               <GameButton
                  id="lizard"
                  img={Lizard}
                  color={colors.primary.lizard}
               />
            </Layout.wrapper>
         </ConnectorSecret>
      </Game>
   );

   return props.gameMode === 'default' ? defaultGame : secretGame;
};
