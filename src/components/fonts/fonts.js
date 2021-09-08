import { createGlobalStyle } from "styled-components";
import TitilliumWeb from './Titillium_Web/TitilliumWeb-Black.ttf';
import TitilliumWeb2 from './Titillium_Web/TitilliumWeb-Regular.ttf';
import TitilliumWeb3 from './Titillium_Web/TitilliumWeb-Bold.ttf';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'trialFont';
  src: url(${TitilliumWeb}) format('truetype')
       ;
}
@font-face {
  font-family: 'trialFont2';
  src: url(${TitilliumWeb2}) format('truetype')
       ;
}

@font-face {
  font-family: 'trialFont3';
  src: url(${TitilliumWeb3}) format('truetype')
       ;
}

`;

export default FontStyles;