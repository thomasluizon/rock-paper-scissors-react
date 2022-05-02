import styled from 'styled-components';
import Header from './components/Header';
import colors from './function/Colors';

const Background = styled.div`
   background: ${colors.background.back};
   width: 100%;
   height: 100vh;
`;

const App = () => {
   return (
      <>
         <Background>
            <Header />
         </Background>
      </>
   );
};

export default App;
