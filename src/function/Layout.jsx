import styled from 'styled-components';

const Layout = {
   container: styled.div`
      margin: 0 auto;
      height: 100%;
      max-width: ${props => props.maxWidth || '960px'};
      padding: ${props => props.padding || '0 1rem'};
      position: ${props => props.position || 'static'};
   `,

   wrapper: styled.div`
      display: flex;
      align-items: ${props => props.align || 'normal'};
      justify-content: ${props => props.justify || 'normal'};
      flex-direction: ${props => props.direction || 'row'};
      gap: ${props => props.gap || 'unset'};
      position: ${props => props.position || 'static'};
      flex-wrap: ${props => props.fwrap || 'nowrap'};
   `,
};

export default Layout;
