import styled from 'styled-components';
import defaultRules from '../assets/images/image-rules.svg';
import hardRules from '../assets/images/image-rules-bonus.svg';
import colors from '../function/Colors';
import { useEffect, useState } from 'react';

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
      @media screen and (min-width: 768px) {
         background-color: #0000002e;
         width: 100%;
         height: 100%;
         position: fixed;
         z-index: -1;
      }
   }

   .modal {
      background: white;
      padding: 2rem;
      border-radius: 0.75rem;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 768px) {
         justify-content: space-between;
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         border-radius: 0;

         img {
            max-width: 400px;
            margin: 0 auto;
         }
      }

      @media screen and (max-width: 410px) {
         img {
            max-width: 250px;
         }
      }

      .wrapper {
         display: flex;
         justify-content: space-between;
         margin-bottom: 2rem;

         h2 {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1.5rem;

            @media screen and (max-width: 768px) {
               text-align: center;
               width: 100%;
            }
         }

         .desktop {
            background: none;
            color: grey;
            font-size: 2rem;
            cursor: pointer;

            @media screen and (max-width: 768px) {
               display: none;
            }
         }
      }
      .mobile {
         display: none;
         background: none;
         color: grey;
         font-size: 2rem;
         cursor: pointer;

         @media screen and (max-width: 768px) {
            display: block;
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
               <button
                  onClick={() => props.setRules(false)}
                  className="desktop"
               >
                  x
               </button>
            </div>
            <img
               src={props.gameMode === 'default' ? defaultRules : hardRules}
               alt=""
            />
            <button onClick={() => props.setRules(false)} className="mobile">
               x
            </button>
         </div>
      </RulesOverlay>
   );
};
