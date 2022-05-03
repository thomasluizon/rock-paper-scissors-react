import { useEffect, useState } from 'react';
import Layout from '../function/Layout';
import colors from '../function/Colors';
import styled from 'styled-components';
import GameButton from './GameButton';
import Playing from './Playing';

import Triangle from '../assets/images/bg-triangle.svg';
import Pentagon from '../assets/images/bg-pentagon.svg';

import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';
import Spock from '../assets/images/icon-spock.svg';
import Lizard from '../assets/images/icon-lizard.svg';

const Game = styled.main`
   width: 100%;
   margin: 4rem auto;

   .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      width: 50%;
      h4 {
         color: white;
         font-size: 2rem;
         text-transform: uppercase;
         text-align: center;

         @media screen and (max-width: 533px) {
            font-size: 1.2rem;
         }
      }
   }
`;

const Connector = styled.div`
   background-image: ${props => `url(${props.img})`};
   background-repeat: no-repeat;
   background-position: center;
   width: 450px;
   height: 450px;

   @media screen and (max-width: 470px) {
      width: 300px;
      height: 300px;
   }

   @media screen and (max-width: 360px) {
      width: 250px;
      height: 270px;
   }

   margin: 0 auto;

   #paper {
      position: absolute;
      left: 25px;
      top: 25px;

      @media screen and (max-width: 470px) {
         left: -15px;
         top: -15px;
      }

      @media screen and (max-width: 360px) {
         left: -30px;
         top: -30px;
      }
   }

   #rock {
      position: absolute;
      top: 270px;

      @media screen and (max-width: 470px) {
         top: 230px;
      }

      @media screen and (max-width: 360px) {
         top: 210px;
      }
   }

   #scissors {
      position: absolute;
      right: 25px;
      top: 25px;

      @media screen and (max-width: 470px) {
         right: -15px;
         top: -15px;
      }

      @media screen and (max-width: 360px) {
         right: -30px;
         top: -30px;
      }
   }
`;

const ConnectorSecret = styled.div`
   background-image: ${props => `url(${props.img})`};
   background-repeat: no-repeat;
   background-position: center;
   width: 450px;
   height: 450px;
   margin: 0 auto;

   @media screen and (max-width: 470px) {
      width: 330px;
      height: 330px;
      transform: scale(0.8);
   }

   @media screen and (max-width: 360px) {
      width: 300px;
      height: 300px;
   }

   #scissors {
      position: absolute;
      top: 25px;

      @media screen and (max-width: 470px) {
         top: -20px;
      }

      @media screen and (max-width: 360px) {
         top: -30px;
      }
   }

   #spock {
      position: absolute;
      left: 20px;
      top: 130px;

      @media screen and (max-width: 470px) {
         top: 80px;
         left: -15px;
      }

      @media screen and (max-width: 360px) {
         top: 70px;
         left: -30px;
      }
   }

   #paper {
      position: absolute;
      right: 20px;
      top: 130px;

      @media screen and (max-width: 470px) {
         top: 80px;
         right: -15px;
      }

      @media screen and (max-width: 360px) {
         top: 70px;
         right: -30px;
      }
   }

   #rock {
      position: absolute;
      top: 300px;
      right: 60px;

      @media screen and (max-width: 470px) {
         top: 260px;
         right: 25px;
      }

      @media screen and (max-width: 360px) {
         top: 240px;
      }
   }

   #lizard {
      position: absolute;
      top: 300px;
      left: 60px;

      @media screen and (max-width: 470px) {
         top: 260px;
         left: 25px;
      }

      @media screen and (max-width: 360px) {
         top: 240px;
      }
   }
`;

export default props => {
   const [player, setPlayer] = useState('');
   const [computer, setComputer] = useState('');
   const [winCondition, setWinCondition] = useState('');

   const playGame = play => {
      props.setIsPlaying(true);

      let amount;

      if (props.gameMode === 'default') {
         amount = 3;
      } else {
         amount = 5;
      }

      let computerPlay = Math.floor(Math.random() * amount);

      if (computerPlay === 0) computerPlay = 'rock';
      if (computerPlay === 1) computerPlay = 'paper';
      if (computerPlay === 2) computerPlay = 'scissors';
      if (computerPlay === 3) computerPlay = 'spock';
      if (computerPlay === 4) computerPlay = 'lizard';

      setPlayer(play);
      setComputer(computerPlay);
   };

   useEffect(() => {
      if (player === computer) {
         setWinCondition('draw');
      } else {
         if (player === 'rock') {
            if (computer === 'scissors' || computer === 'lizard') {
               setWinCondition('win');
               setTimeout(() => {
                  props.setScore(curr => curr + 1);
               }, 1500);
            } else {
               setWinCondition('lose');
               setTimeout(() => {
                  props.setScore(curr => curr - 1);
               }, 1500);
            }
         }

         if (player === 'paper') {
            if (computer === 'rock' || computer === 'spock') {
               setWinCondition('win');
               setTimeout(() => {
                  props.setScore(curr => curr + 1);
               }, 1500);
            } else {
               setWinCondition('lose');
               setTimeout(() => {
                  props.setScore(curr => curr - 1);
               }, 1500);
            }
         }

         if (player === 'scissors') {
            if (computer === 'paper' || computer === 'lizard') {
               setWinCondition('win');
               setTimeout(() => {
                  props.setScore(curr => curr + 1);
               }, 1500);
            } else {
               setWinCondition('lose');
               setTimeout(() => {
                  props.setScore(curr => curr - 1);
               }, 1500);
            }
         }

         if (player === 'spock') {
            if (computer === 'scissors' || computer === 'rock') {
               setWinCondition('win');
               setTimeout(() => {
                  props.setScore(curr => curr + 1);
               }, 1500);
            } else {
               setWinCondition('lose');
               setTimeout(() => {
                  props.setScore(curr => curr - 1);
               }, 1500);
            }
         }

         if (player === 'lizard') {
            if (computer === 'spock' || computer === 'paper') {
               setWinCondition('win');
               setTimeout(() => {
                  props.setScore(curr => curr + 1);
               }, 1500);
            } else {
               setWinCondition('lose');
               setTimeout(() => {
                  props.setScore(curr => curr - 1);
               }, 1500);
            }
         }
      }
   }, [player, computer]);

   const defaultGame = (
      <Game>
         <Connector img={Triangle}>
            <Layout.wrapper justify="center" position="relative">
               <GameButton
                  id="paper"
                  box="#0d2fd9"
                  img={Paper}
                  color={colors.primary.paper}
                  onClick={() => playGame('paper')}
               />
               <GameButton
                  id="scissors"
                  box="#d39312"
                  img={Scissors}
                  color={colors.primary.scissors}
                  onClick={() => playGame('scissors')}
               />
               <GameButton
                  id="rock"
                  box="#c32240"
                  img={Rock}
                  color={colors.primary.rock}
                  onClick={() => playGame('rock')}
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
                  onClick={() => playGame('scissors')}
               />
               <GameButton
                  id="spock"
                  box="#30a1b5"
                  img={Spock}
                  color={colors.primary.cyan}
                  onClick={() => playGame('spock')}
               />
               <GameButton
                  id="paper"
                  box="#0d2fd9"
                  img={Paper}
                  color={colors.primary.paper}
                  onClick={() => playGame('paper')}
               />
               <GameButton
                  id="rock"
                  box="#c32240"
                  img={Rock}
                  color={colors.primary.rock}
                  onClick={() => playGame('rock')}
               />
               <GameButton
                  id="lizard"
                  img={Lizard}
                  box="#5a20c5"
                  color={colors.primary.lizard}
                  onClick={() => playGame('lizard')}
               />
            </Layout.wrapper>
         </ConnectorSecret>
      </Game>
   );

   if (props.isPlaying)
      return (
         <Playing
            Game={Game}
            setIsPlaying={props.setIsPlaying}
            player={player}
            computer={computer}
            winCondition={winCondition}
         />
      );

   return props.gameMode === 'default' ? defaultGame : secretGame;
};
