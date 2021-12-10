import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  body {
      background: #252526;
  }
`

export const LayoutContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;