import styled from 'styled-components';

const transform = `
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
const buttonSize = 140;

const GameButton = styled.div`
   background: ${props => props.colorRadial};
   border-radius: 50%;
   width: ${props => (props.size ? `${props.size}px` : `${buttonSize}px`)};
   height: ${props => (props.size ? `${props.size}px` : `${buttonSize}px`)};
   z-index: ${props => props.index || 0};

   @media screen and (max-width: 768px) {
      width: ${props =>
         props.size ? `${props.size * 0.67}px` : `${buttonSize}px`};
      height: ${props =>
         props.size ? `${props.size * 0.67}px` : `${buttonSize}px`};
   }

   @media screen and (max-width: 470px) {
      width: ${props =>
         props.size ? `${props.size * 0.5}px` : `${buttonSize * 0.67}px`};
      height: ${props =>
         props.size ? `${props.size * 0.5}px` : `${buttonSize * 0.67}px`};
   }

   position: relative;
   transition: 0.2s;
   cursor: pointer;
   box-shadow: ${props =>
      props.win
         ? '0 0 0 75px hsla(214,47%,23%,80%),0 0 0 150px hsla(214,47%,23%,60%),0 0 0 225px hsla(214,47%,23%,40%)'
         : `0 7px 0 0 ${props.box}`};

   &:hover {
      box-shadow: 1px 1px 10px 5px white;
   }
`;

const circleSize = '80%';

const Circle = styled.div`
   ${transform}
   background-image: ${props => `url(${props.img})`};
   background-repeat: no-repeat;
   background-position: center;
   background-color: white;
   border-radius: 50%;
   width: ${circleSize};
   height: ${circleSize};

   @media screen and (max-width: 470px) {
      background-size: 50%;
   }

   box-shadow: inset 0 8px 0 0 #ccc;
`;

export default props => {
   return (
      <GameButton
         onClick={props.onClick}
         box={props.box}
         id={props.id}
         colorRadial={props.color}
         size={props.size}
         win={props.win}
         index={props.index}
      >
         <Circle img={props.img} />
      </GameButton>
   );
};
