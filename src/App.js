
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './assets/theme/theme';
import Main from './pages/main/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    ${
      theme.typeBlock.body
    }
  }
  *{
    box-sizing: border-box;
  }
  p{
    margin-top: 0 !important;
  }
 
`;

export default App;
