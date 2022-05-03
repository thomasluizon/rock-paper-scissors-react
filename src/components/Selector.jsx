import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../function/Layout';
import colors from '../function/Colors';

const Selector = styled.div`
   margin-top: 2rem;
   margin-bottom: 11rem;

   @media screen and (max-height: 900px) {
      margin-bottom: 3rem;
   }

   @media screen and (max-width: 425px) {
      transform: scale(0.8);
   }

   p {
      color: white;
      text-transform: uppercase;
      font-size: 1.5rem;
      cursor: pointer;
   }

   .switch {
      background-color: #1f3746;
      width: 100px;
      height: 30px;
      position: relative;
      border: 3px solid ${colors.neutral.headerOutline};
      cursor: pointer;
      border-radius: 2rem;
      display: flex;
      align-items: center;

      .button {
         cursor: pointer;
         width: 30px;
         height: 30px;
         background-color: white;
         border-radius: 50%;
         box-shadow: 0 0 0 10px ${colors.neutral.headerOutline};
         transition: 0.5s;
         margin-left: ${props => (props.isChecked ? '60px' : '0px')};
      }
   }
`;

export default props => {
   const [checked, setChecked] = useState(false);

   const handleChecked = condition => {
      setChecked(condition);

      condition ? props.setGameMode('hard') : props.setGameMode('default');
   };

   return (
      <Selector isChecked={checked}>
         <Layout.wrapper justify="center" align="center" gap="1rem">
            <p onClick={() => handleChecked(false)}>easy</p>

            <div onClick={() => handleChecked(!checked)} className="switch">
               <div className="button"></div>
            </div>

            <p onClick={() => handleChecked(true)}>hard</p>
         </Layout.wrapper>
      </Selector>
   );
};
