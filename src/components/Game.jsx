import Layout from '../function/Layout';
import colors from '../function/Colors';
import styled from 'styled-components';
import GameButton from './GameButton';

import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';

const Game = styled.section``;

export default props => {
   return (
      <main>
         <Game>
            <Layout.wrapper justify="center">
               <GameButton img={Paper} color={colors.primary.paper} />
               <GameButton img={Scissors} color={colors.primary.scissors} />
               <GameButton img={Rock} color={colors.primary.rock} />
            </Layout.wrapper>
         </Game>
      </main>
   );
};
