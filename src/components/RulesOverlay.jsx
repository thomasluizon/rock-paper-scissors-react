import styled from 'styled-components';
import defaultRules from '../assets/images/image-rules.svg';
import hardRules from '../assets/images/image-rules-bonus.svg';
import colors from '../function/Colors';

const RulesOverlay = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: grid;
   place-items: center;

   .overlay {
      background-color: #0000002e;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: -1;
   }

   .modal {
      background: white;
      padding: 2rem;
      border-radius: 0.75rem;
      display: flex;
      flex-direction: column;

      .wrapper {
         display: flex;
         justify-content: space-between;
         margin-bottom: 2rem;

         h2 {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1.5rem;
         }

         button {
            background: none;
            color: ${colors.neutral.headerOutline};
            font-size: 1.5rem;
            cursor: pointer;
         }
      }
   }
`;

export default props => {
   return (
      <RulesOverlay>
         <div className="overlay" onClick={() => props.setRules(false)}></div>
         <div
            className="modal
         "
         >
            <div className="wrapper">
               <h2>Rules</h2>
               <button onClick={() => props.setRules(false)}>x</button>
            </div>
            <img
               src={props.gameMode === 'default' ? defaultRules : hardRules}
               alt=""
            />
         </div>
      </RulesOverlay>
   );
};
