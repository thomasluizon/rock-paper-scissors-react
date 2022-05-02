import styled from 'styled-components';

const transform = `
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
const buttonSize = '150px';

const GameButton = styled.div`
   background: ${props => props.color};
   border-radius: 50%;
   width: ${buttonSize};
   height: ${buttonSize};
   position: relative;
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
`;

export default props => {
   return (
      <GameButton color={props.color}>
         <Circle img={props.img} />
      </GameButton>
   );
};
