import Layout from '../function/Layout';
import styled from 'styled-components';
import GameButton from './GameButton';
import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';
import Spock from '../assets/images/icon-spock.svg';
import Lizard from '../assets/images/icon-lizard.svg';
import colors from '../function/Colors';
import { useEffect, useState } from 'react';

const Winner = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   @media screen and (max-width: 768px) {
      position: absolute;
      bottom: -10rem;
      left: 50%;
      transform: translateX(-50%);
   }

   button {
      text-transform: uppercase;
      padding: 0.75rem 3rem;
      border-radius: 0.75rem;
      transition: 0.2s;
      cursor: pointer;
      font-size: 1.2rem;
      &:hover {
         box-shadow: 1px 1px 10px 5px white;
      }
      ${props => (props.winCondition === 'lose' ? `color: red;` : '')}
   }

   h3 {
      color: white;
      font-size: 2rem;
      text-transform: uppercase;
      text-align: center;

      @media screen and (max-width: 768px) {
         font-size: 1.5rem;
      }
   }
`;

const BlackBall = styled.div`
   width: 250px;
   height: 250px;
   background: #00000030;
   border-radius: 50%;

   @media screen and (max-width: 768px) {
      width: calc(250px * 0.67);
      height: calc(250px * 0.67);
   }

   @media screen and (max-width: 470px) {
      width: calc(250px * 0.5);
      height: calc(250px * 0.5);
   }
`;

const PlayingWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1rem;

   @media screen and (max-width: 768px) {
      position: relative;
   }
`;

export default props => {
   const Game = props.Game;
   const [timePassed, setTimePassed] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setTimePassed(true);
      }, 1500);
   }, []);

   const setButton = play => {
      if (play === 'rock') {
         return {
            playerBox: '#c32240',
            playerImg: Rock,
            playerColor: colors.primary.rock,
         };
      }

      if (play === 'paper') {
         return {
            playerBox: '#0d2fd9',
            playerImg: Paper,
            playerColor: colors.primary.paper,
         };
      }

      if (play === 'scissors') {
         return {
            playerBox: '#d39312',
            playerImg: Scissors,
            playerColor: colors.primary.scissors,
         };
      }

      if (play === 'spock') {
         return {
            playerBox: '#30a1b5',
            playerImg: Spock,
            playerColor: colors.primary.cyan,
         };
      }

      if (play === 'lizard') {
         return {
            playerBox: '#5a20c5',
            playerImg: Lizard,
            playerColor: colors.primary.lizard,
         };
      }
   };

   return (
      <Game>
         <PlayingWrapper>
            <div className="wrapper">
               <h4>You Picked</h4>
               {timePassed ? (
                  <GameButton
                     box={setButton(props.player).playerBox}
                     img={setButton(props.player).playerImg}
                     color={setButton(props.player).playerColor}
                     size={250}
                     win={props.winCondition === 'win' ? true : false}
                     index={-1}
                  />
               ) : (
                  <GameButton
                     box={setButton(props.player).playerBox}
                     img={setButton(props.player).playerImg}
                     color={setButton(props.player).playerColor}
                     size={250}
                     win={false}
                     index={-2}
                  />
               )}
            </div>

            {timePassed ? (
               <Winner winCondition={props.winCondition}>
                  {timePassed ? (
                     <h3>
                        {props.winCondition === 'win'
                           ? 'You win'
                           : props.winCondition === 'lose'
                           ? 'You lose'
                           : 'Draw'}
                     </h3>
                  ) : (
                     <h3>Computer is choosing...</h3>
                  )}

                  <button onClick={() => props.setIsPlaying(false)}>
                     Play Again
                  </button>
               </Winner>
            ) : (
               <Winner>
                  {timePassed ? (
                     <h3>
                        {props.winCondition === 'win'
                           ? 'You win'
                           : props.winCondition === 'lose'
                           ? 'You lose'
                           : 'Draw'}
                     </h3>
                  ) : (
                     <h3>Computer is choosing...</h3>
                  )}

                  <button onClick={() => props.setIsPlaying(false)}>
                     Play Again
                  </button>
               </Winner>
            )}

            <div className="wrapper">
               <h4>The house picked</h4>
               {timePassed ? (
                  <GameButton
                     box={setButton(props.computer).playerBox}
                     img={setButton(props.computer).playerImg}
                     color={setButton(props.computer).playerColor}
                     size={250}
                     win={props.winCondition === 'lose' ? true : false}
                     index={-2}
                  />
               ) : (
                  <BlackBall />
               )}
            </div>
         </PlayingWrapper>
      </Game>
   );
};
