import { createGlobalStyle } from 'styled-components';
import colors from './Colors';

const Global = createGlobalStyle`
   *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 1rem;
      font-weight: normal;
      outline: none;
      border: none;
   }

   body {
      font-family: 'Barlow Semi Condensed', sans-serif;

      background: ${colors.background.back};

      #root {
         height: 100%;
      }
   }
`;

export default Global;
