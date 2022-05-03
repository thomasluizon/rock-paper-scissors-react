import styled from 'styled-components';

const transform = `
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
const buttonSize = '130px';

const GameButton = styled.div`
   background: ${props => props.colorRadial};
   border-radius: 50%;
   width: ${buttonSize};
   height: ${buttonSize};
   position: relative;
   transition: 0.2s;
   cursor: pointer;
   box-shadow: ${props => `0 7px 0 0 ${props.box}`};

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
   box-shadow: inset 0 8px 0 0 #ccc;
`;

export default props => {
   return (
      <GameButton box={props.box} id={props.id} colorRadial={props.color}>
         <Circle img={props.img} />
      </GameButton>
   );
};
