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
   margin-top: 2rem;
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
                  box="#0d2fd9"
                  img={Paper}
                  color={colors.primary.paper}
               />
               <GameButton
                  id="scissors"
                  box="#d39312"
                  img={Scissors}
                  color={colors.primary.scissors}
               />

               <GameButton
                  id="rock"
                  box="#c32240"
                  img={Rock}
                  color={colors.primary.rock}
               />
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
                  box="#d39312"
                  img={Scissors}
                  color={colors.primary.scissors}
               />
               <GameButton
                  id="spock"
                  box="#30a1b5"
                  img={Spock}
                  color={colors.primary.cyan}
               />
               <GameButton
                  id="paper"
                  box="#0d2fd9"
                  img={Paper}
                  color={colors.primary.paper}
               />
               <GameButton
                  id="rock"
                  box="#c32240"
                  img={Rock}
                  color={colors.primary.rock}
               />
               <GameButton
                  id="lizard"
                  img={Lizard}
                  box="#5a20c5"
                  color={colors.primary.lizard}
               />
            </Layout.wrapper>
         </ConnectorSecret>
      </Game>
   );

   return props.gameMode === 'default' ? defaultGame : secretGame;
};
