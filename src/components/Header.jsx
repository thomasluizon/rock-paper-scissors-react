import Layout from '../function/Layout';
import styled from 'styled-components';
import colors from '../function/Colors';

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

export default () => {
   return (
      <Layout.container padding="1rem">
         <Header>
            <Layout.wrapper justify="space-between" align="center">
               <GameMode>
                  <p>rock</p>
                  <p>paper</p>
                  <p>scissors</p>
               </GameMode>
               <Score>
                  <p className="score">score</p>
                  <p className="score-value">12</p>
               </Score>
            </Layout.wrapper>
         </Header>
      </Layout.container>
   );
};
