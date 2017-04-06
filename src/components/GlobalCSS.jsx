import { colors } from '../constants';

const GlobalCSS = `
  * { box-sizing: border-box; }

  body {
    background-color: ${colors.black};
    margin: 0;
    height: 100%;
    min-height: 100vh;
    width: 100vw;
  }

  #root {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .Root {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
`;

export default GlobalCSS;
