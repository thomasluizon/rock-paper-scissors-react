import Layout from '../function/Layout';
import styled from 'styled-components';
import GameButton from './GameButton';
import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';
import Spock from '../assets/images/icon-spock.svg';
import Lizard from '../assets/images/icon-lizard.svg';
import colors from '../function/Colors';

const Winner = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   button {
      text-transform: uppercase;
      padding: 0.75rem 3rem;
      border-radius: 0.75rem;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
         box-shadow: 1px 1px 10px 5px white;
      }
   }
   h3 {
      color: white;
      font-size: 2rem;
      text-transform: uppercase;
      text-align: center;
   }
`;

export default props => {
   const Game = props.Game;

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
         <Layout.wrapper align="center" justify="space-between" gap="1rem">
            <div className="wrapper">
               <h4>You Picked</h4>
               <GameButton
                  box={setButton(props.player).playerBox}
                  img={setButton(props.player).playerImg}
                  color={setButton(props.player).playerColor}
                  size="250px"
                  win={props.winCondition === 'win' ? true : false}
                  index={-1}
               />
            </div>
            <Winner>
               <h3>
                  {props.winCondition === 'win'
                     ? 'You win'
                     : props.winCondition === 'lose'
                     ? 'You lose'
                     : 'Draw'}
               </h3>
               <button onClick={() => props.setIsPlaying(false)}>
                  Play Again
               </button>
            </Winner>
            <div className="wrapper">
               <h4>The house picked</h4>
               <GameButton
                  box={setButton(props.computer).playerBox}
                  img={setButton(props.computer).playerImg}
                  color={setButton(props.computer).playerColor}
                  size="250px"
                  win={props.winCondition === 'lose' ? true : false}
                  index={-1}
               />
            </div>
         </Layout.wrapper>
      </Game>
   );
};
