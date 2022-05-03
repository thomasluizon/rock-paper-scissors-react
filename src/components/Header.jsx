import styled from 'styled-components';
import colors from '../function/Colors';
import Layout from '../function/Layout';

const GameMode = styled.div`
   .normal {
      font-size: 2em;

      @media screen and (max-width: 360px) {
         font-size: 1.5em;
      }
   }

   p {
      color: white;
      font-size: 1.3em;
      text-transform: uppercase;

      @media screen and (max-width: 470px) {
         font-size: 1em;
      }
   }
`;

const Header = styled.header`
   padding: 1rem 1.5rem;
   border: 1px solid ${colors.neutral.headerOutline};
   border-radius: 10px;
   user-select: none;
   width: 100%;

   @media screen and (max-width: 768px) {
      transform: scale(0.8);
   }
`;

const Score = styled.div`
   border-radius: 10px;
   background-color: white;
   padding: 10px 40px;

   .score {
      text-align: center;
      color: ${colors.neutral.score};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
   }

   .score-value {
      text-align: center;
      font-weight: 700;
      font-size: 3rem;
      color: ${colors.neutral.dark};
   }
`;

const GameName = props => {
   const defaultGameName = (
      <>
         <p className="normal">rock</p>
         <p className="normal">paper</p>
         <p className="normal">scissors</p>
      </>
   );

   const hardGameName = (
      <>
         <p>rock</p>
         <p>paper</p>
         <p>scissors</p>
         <p>lizard</p>
         <p>spock</p>
      </>
   );

   return props.gameMode === 'default' ? defaultGameName : hardGameName;
};

export default props => {
   return (
      <Header>
         <Layout.wrapper justify="space-between" align="center">
            <GameMode>
               <GameName gameMode={props.gameMode} />
            </GameMode>
            <Score>
               <p className="score">score</p>
               <p className="score-value">{props.score}</p>
            </Score>
         </Layout.wrapper>
      </Header>
   );
};
