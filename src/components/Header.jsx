import styled from 'styled-components';
import colors from '../function/Colors';
import Layout from '../function/Layout';

const GameMode = styled.div`
   p {
      color: white;
      font-size: 2em;
      text-transform: uppercase;
   }
`;

const Header = styled.header`
   padding: 1rem 1.5rem;
   border: 1px solid ${colors.neutral.headerOutline};
   border-radius: 10px;
   user-select: none;
   width: 100%;
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
         <p>rock</p>
         <p>paper</p>
         <p>scissors</p>
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
