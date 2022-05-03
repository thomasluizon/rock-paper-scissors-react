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
      font-family: 'Barlow Semi Condensed', sans-serif;
   }

   body {
      font-family: 'Barlow Semi Condensed', sans-serif;
      overflow-x: hidden;
      background: ${colors.background.back};
      height: 100vh;
      #root {
         height: 100%;
         overflow-x: hidden;
      }
   }
`;

export default Global;
