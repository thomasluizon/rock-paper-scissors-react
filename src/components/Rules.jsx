import styled from 'styled-components';
import colors from '../function/Colors';

const Rules = styled.button`
   position: fixed;
   bottom: 2rem;
   right: 2rem;
   padding: 0.5rem 2rem;
   border-radius: 0.25rem;
   text-transform: uppercase;
   cursor: pointer;
   background: ${colors.background.back};
   border: 2px solid ${colors.neutral.headerOutline};
   color: white;

   &:hover {
      background: #1f3746;
   }
`;

export default props => {
   return <Rules onClick={() => props.setRules(true)}>Rules</Rules>;
};
