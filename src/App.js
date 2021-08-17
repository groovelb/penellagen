
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './translate/I18nSetting';
import theme from './assets/theme/theme';
import Main from './pages/main/Main';

function App() {
  // console.log = function() {}
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
    width: 100%;
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
  table {
    border-collapse: separate;
    border-spacing: 0;
    min-width: 350px;
  }
  table tr th,
  table tr td {
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 5px;
  }
  table tr th:first-child,
  table tr td:first-child {
    border-left: 1px solid #fff;
  }
  table tr th {
    background: #eee;
    border-top: 1px solid #fff;
    text-align: left;
  }

  table {
    border-top: 1px solid #fff;
    border-radius: 12px;
  }

  /* top-left border-radius */
  table tr:first-child td:first-child {
    border-top-left-radius: 12px;
  }

  /* top-right border-radius */
  table tr:first-child td:last-child {
    border-top-right-radius: 12px;
  }

  /* bottom-left border-radius */
  table tr:last-child td:first-child {
    border-bottom-left-radius: 12px;
  }

  /* bottom-right border-radius */
  table tr:last-child td:last-child {
    border-bottom-right-radius: 12px;
  }

  button{
    outline: none;
    border: inherit;
    border-color: inherit;
    transition: opacity 0.3s ease-out;
  }
  button:disabled{
    opacity: 0.48;
  }

  input[type='text']{
    border: none !important;
    background: none !important;
    border-radius: 0px !important;
    height: 48px !important;
    border-bottom: solid 2px ${props => props.theme.color.pinkBeige} !important;
    padding-left: 112px;
  }
  textarea{
    border: none;
    background: none !important;
    height: 96px !important;
    background: none !important;
    border-radius: 0px !important;
    border-bottom: solid 2px ${props => props.theme.color.pinkBeige} !important;
    padding-left: 112px;
    resize: none;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }

  input[type="checkbox"]:checked + label {
    background-color: ${props => props.theme.color.pinkBeige} !important;
    border-color: ${props => props.theme.color.pinkBeige} !important;
  }
  body{
    overscroll-behavior-y: none;
  }
  input{
    outline: none;
    -webkit-appearance: none;
  }
  input[type="submit"]{
    height: 44px !important;
    padding: 0px 56px !important;
    border: none !important;
    border-radius: 0px !important;
    background-color: ${props => props.theme.color.lightBeige} !important;
    color: ${props => props.theme.color.black} !important;
  }
  strong{
    font-weight: 500;
  }
  a{
    text-decoration: none !important;
  }
`;

export default App;
